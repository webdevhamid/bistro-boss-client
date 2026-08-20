import { Navigate, Outlet } from "react-router";
import useAdmin from "../hooks/useAdmin";

const AdminRoute = () => {
  const [isAdmin, isAdminLoading] = useAdmin();

  if (isAdminLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-xl text-amber-500"></span>
      </div>
    );
  }

  if (isAdmin) {
    return <Outlet />;
  }

  return <Navigate to="/" replace={true} />;
};

export default AdminRoute;
