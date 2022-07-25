import { Routes, Route } from "react-router-dom";
import { Login } from "../auth/pages/Login";
import { PagesRoutes } from "../pages/routes/PagesRoutes";

export const AppRouter = () => {
  return (
    <>
        <Routes>

            <Route path="login" element={<Login />} />

            <Route path="/*" element={<PagesRoutes />} />
            
        </Routes>
    </>
  );
};
