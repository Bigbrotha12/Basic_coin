import React from 'react';
import AppController from '../app/AppController';
import IController from '../app/IController';
import { defaultConnection } from '../app/Networks';
import { AppConnectionData } from '../app/Definitions';

export const ControllerContext = React.createContext<IController>(new AppController());
export const ConnectionContext = React.createContext<AppConnectionData>(defaultConnection);
