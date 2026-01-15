import { Navigate, Outlet } from "react-router-dom";

export default function RotaPrivada() {
  const token = localStorage.getItem("token");

  return token ? <Outlet /> : <Navigate to="/auth/login" replace />;
}
