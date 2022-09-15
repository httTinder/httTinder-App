import { Route, Router, Routes } from "react-router-dom";
import CheckEmailPage from "../pages/email";
import { RegisterPage } from "../pages/register";
import EmailChecker from "../pages/EmailChecker";

export const PagesRoutes = () => {
  return (
      <Routes>
        <Route path="/registerfinish" element={<CheckEmailPage />} />
        <Route path="/" element={<RegisterPage />} />
        <Route path="/emailchecker/:tokenEmail" element={<EmailChecker/>} />
      </Routes>
  );
};
