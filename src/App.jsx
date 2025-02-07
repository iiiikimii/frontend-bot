import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Dashboard from "./pages/(authenticated)/dashboard/Dashboard";
import History from "./pages/(authenticated)/history/History";
import Bots from "./pages/(authenticated)/bots/Bots";
import CreateComment from "./pages/(authenticated)/create-comments/CreateComments";
import Register from "./pages/(authenticated)/registerbot/Registerbot";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create-comment" element={<CreateComment />} />
        <Route path="/bots" element={<Bots />} />
        <Route path="/history" element={<History />} />
        <Route path="/registerbot" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
