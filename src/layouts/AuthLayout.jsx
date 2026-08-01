import { useContext } from "react";
import { Outlet, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../providers/AuthContext";

const AuthLayout = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.pathname ? location.state?.pathname : "/";

  if (user) {
    return navigate(from, { replace: true });
  }

  return (
    <div className="min-h-screen bg-base-200">
      <div className="container mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
