import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Dashboard from "./pages/(authenticated)/dashboard/Dashboard";
import History from "./pages/(authenticated)/history/History";
import Bots from "./pages/(authenticated)/bots/Bots";
import CreateComment from "./pages/(authenticated)/create-comments/CreateComments";
import Register from "./pages/(authenticated)/registerbot/Registerbot";
import Profile from "./pages/(authenticated)/profile/Profile";
import Accounts from "./pages/(authenticated)/accounts/Accounts";
import Invite from "./pages/(authenticated)/invite/Invite";
import DownloadReport from "./pages/(authenticated)/history/DownloadReport";
import Report from "./pages/(authenticated)/history/Report";
import Create from "./pages/(authenticated)/profile/Create";

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
        <Route path="/profile" element={<Profile/>} />
        <Route path="/accounts" element={<Accounts/>} />
        <Route path="/invite" element={<Invite/>} />
        <Route path="/downloadreport" element={<DownloadReport/>} />
        <Route path="/report" element={<Report/>} />
        <Route path="/create" element={<Create/>} />
      </Routes>
    </Router>
  );
}

export default App;
