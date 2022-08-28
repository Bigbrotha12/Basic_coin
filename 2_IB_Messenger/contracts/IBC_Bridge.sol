// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import "./EIP712X.sol";

/// @title IBC_Bridge
/// @notice Implementing EIP712 and on-chain signature verification to
/// @notice ensure transaction validity and uniqueness. This specific implementation
/// @notice handles cross-chain NFT minting requests. 
/// @dev Allows dapp to determine pending 'receive' transaction for each
/// @dev user and allow them to complete data bridging. Nonce for any given
/// @dev sending/receiving chain pair should be equal on both chains if data
/// @dev transfer completed succesfully.
contract IBC_Bridge is EIP712X, Ownable {
    using ECDSA for bytes32;

    //------------------ STATE VARIABLES ---------------------------------------

    mapping(address => mapping(uint256 => mapping(uint256 => uint256))) public _nonce;

    //----------------------- EVENTS -------------------------------------------

    event DataSent(
      address indexed receiver, 
      uint256 tokenId, 
      uint256 receivingChainId, 
      uint256 nonce, 
      bytes32 domainSeparator
    );
    event DataReceived(
      address indexed receiver, 
      uint256 tokenId, 
      uint256 sendingChainId, 
      uint256 nonce
    );

    //--------------------  CONSTRUCTOR ----------------------------------------

    /// @notice Initializes bridge endpoint contract with given name and version.
    /// @param _name           of current contract
    /// @param _version        of contract being deployed.
    constructor(string memory _name, string memory _version) EIP712(_name, _version) {
      _MESSAGE_TYPE_HASH = keccak256(
        "Transaction(address receiver,uint256 tokenId,uint256 receivingChainId,uint256 nonce)"
      );
    }

    //-------------------- MUTATIVE FUNCTIONS ----------------------------------

    /// @notice Initiates data bridge to another chain.
    /// @dev Captures the user request data to be relayed to another blockchain. 
    /// @dev Data is captured by relayer via emitted event. Domain hash needs to match 
    /// @dev domain for receiving chain, NOT this contract's domain.
    /// @param _receiver          Address of the receiving account.
    /// @param _tokenId           ID number of the NFT to be minted.
    /// @param _receivingChainId  ID of the destination blockchain.
    function dataSend(
      address _receiver, 
      uint256 _tokenId, 
      uint256 _receivingChainId
    ) external returns (bool) {
        bytes32 destinationDomain = getDomainHash(_receivingChainId);
        require(destinationDomain != 0, "EIP712X: Unregistered Domain");

        uint256 nonce = _nonce[msg.sender][block.chainid][_receivingChainId]++;
        
        emit DataSent(_receiver, _tokenId, _receivingChainId, nonce, destinationDomain);
        return true;
    }

    /// @notice Validates the transaction data and verifies signature before 
    /// @notice executing NFT minting.
    /// @dev The message hash must be computed on-chain based on parameter 
    /// @dev input to verify that provided parameters have not been tampered and 
    /// @dev signature has not been reused. Current contract simply emits log
    /// @dev if successful but production implementation should include NFT minting calls.
    /// @param _receiver          Address of the receiving account.
    /// @param _tokenId           ID number of the NFT collection to be minted.
    /// @param _sendingChainId    ID of the origin chain.
    /// @param _signature         Signature for verification.
    function dataReceive(
      address _receiver, 
      uint256 _tokenId, 
      uint256 _sendingChainId, 
      bytes calldata _signature
    ) external returns (bool) {
      uint256 nonce = _nonce[msg.sender][_sendingChainId][block.chainid]++;
      bytes32 domainHash = getCurrentDomainHash();
      bytes32 structHash = buildStructHash(_receiver, _tokenId, block.chainid, nonce);
      bytes32 digest = getPrefixedDataHash(domainHash, structHash);
      address signer = digest.recover(_signature);
      require(signer == _MINTER, "ECDSA: Signature Verification Failed");
  
      emit DataReceived(_receiver, _tokenId, _sendingChainId, nonce);
      return true;
    }
}