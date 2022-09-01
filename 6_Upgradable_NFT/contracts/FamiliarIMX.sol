// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.0 <0.9.0;

import "./ERC721/ERC721.sol";
import "./CommonStorage.sol";
import "./IMXBridge/Mintable.sol";
import "@openzeppelin/contracts/utils/introspection/ERC165.sol";

/// @title Familiar Logic Implementation
/// @notice NFT contract implementation for IMX minting
/// @dev Logic implementation or base contracts other 
/// @dev than CommonStorage must not declare any state variables
contract FamiliarIMX is CommonStorage, ERC165, ERC721, Mintable {

     /**
     * @dev See {IERC165-supportsInterface}.
     */
    function supportsInterface(bytes4 interfaceId) public view virtual override(ERC721, ERC165) returns (bool) {
        return
            interfaceId == type(IERC721).interfaceId ||
            interfaceId == type(IERC721Metadata).interfaceId ||
            interfaceId == type(IMintable).interfaceId ||
            super.supportsInterface(interfaceId);
    }

    function _mintFor(address to, uint256 id, bytes memory blueprint) internal override {
        blueprints[id] = blueprint;
        _safeMint(to, id);
    }
}