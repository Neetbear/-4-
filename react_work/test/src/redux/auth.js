import { Navigate, Outlet } from "react-router-dom";

function PrivateOutlet() {
    const auth = useAuth();
    return auth ? <Outlet /> : <Navigate to="/login" />;
}

function PrivateRoute({ children }) {
    const auth = useAuth();
    return auth ? children : <Navigate to="/login" />;
}

function useAuth() {
    return true;
}