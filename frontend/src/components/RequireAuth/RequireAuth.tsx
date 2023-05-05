import React, {FC} from 'react';
import {Navigate, useLocation} from 'react-router-dom';
import {observer} from 'mobx-react-lite';
import {RootStoreContext} from '../../stores/root-context';

interface Props {
    children: JSX.Element;
}

const RequireAuth: FC<Props> = ({ children }) => {
    const { authStore } = React.useContext(RootStoreContext);
    const location = useLocation();
  
    if (!authStore.isAuthenticated) {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
  
    return children;
}

export default observer(RequireAuth);