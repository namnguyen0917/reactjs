import { Outlet, Navigate } from 'react-router-dom';

function Admin() {
    const auth = false;
    return auth ? <Outlet /> : <Navigate to="/login" />;
}

export default Admin;
