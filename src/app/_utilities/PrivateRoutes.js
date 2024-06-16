import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoutes = () => {
    debugger;
    let token = localStorage.getItem('token') != undefined ? true : false;
    
    return (
        token ? <Outlet /> : <Navigate to="/login" />
    );
}

export default PrivateRoutes;
