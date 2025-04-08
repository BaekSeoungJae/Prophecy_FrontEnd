import { Navigate } from "react-router-dom";
import Common from "../utils/Common";

const ProtectedRoute = ({ children }) => {
  const token = Common.getAccessToken();
  if (!token) {
    alert("로그인이 필요합니다.");
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
