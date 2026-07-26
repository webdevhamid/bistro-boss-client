import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="min-h-screen bg-base-200">
      <div className="container mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
