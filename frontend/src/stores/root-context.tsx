import React from 'react';
import RootStore from './rootStore';

export const RootStoreContext = React.createContext<RootStore>(null as unknown as RootStore);