import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ContextProvider } from "./components/Context";

import AccountPage from "./pages/Account";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";

export default function App() {
  return (
    <BrowserRouter>
      <ContextProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/account" element={<AccountPage />} />
        </Routes>
        </ContextProvider>
    </BrowserRouter>
  );
}
