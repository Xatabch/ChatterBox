import React from 'react';
import './global.css';
import 'normalize.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RootStoreContext } from './stores/root-context';
import RootStore from './stores/rootStore';
import RootApi from './api/root-api';
import ApiService from './api/services/api-service';

import RequireAuth from './components/RequireAuth/RequireAuth';

import Chat from './pages/Chat/Chat'
import Login from './pages/Login/Login';

const apiService = new ApiService('http://localhost:4000');
const rootApi = new RootApi(apiService);
const rootStore = new RootStore(rootApi);

const App: React.FC = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <RootStoreContext.Provider value={rootStore}>
          <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/" element={
              <RequireAuth>
                <Chat/>
              </RequireAuth>
            } />
          </Routes>
        </RootStoreContext.Provider>
      </BrowserRouter>
    </React.StrictMode>
  );
};

export default App;