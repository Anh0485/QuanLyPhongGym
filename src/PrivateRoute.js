import { Outlet, useNavigate } from 'react-router-dom';
import { useStateContext } from './contexts/ContextProvider';
import { useEffect } from 'react';
function PrivateRoute() {
    const { isAuthenticated } = useStateContext();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/login');
        }
    }, [isAuthenticated, navigate]);

    return isAuthenticated ? <Outlet /> : null;
}

export default PrivateRoute;