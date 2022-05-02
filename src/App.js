import "./App.css";
import GithubPage from "./pages/UserPage";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
function App() {
  let user = true;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/user" index element={<GithubPage />} />
        <Route path="/" element={user ? <Navigate to="/user" /> : <Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
