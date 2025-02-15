import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Dashboard from "./pages/(authenticated)/dashboard/Dashboard";
import History from "./pages/(authenticated)/history/History";
import Bots from "./pages/(authenticated)/bots/Bots";
import CreateComment from "./pages/(authenticated)/create-comments/CreateComments";
import Profile from "./pages/(authenticated)/profile/Accounts";
import DownloadReport from "./pages/(authenticated)/history/DownloadReport";
import Report from "./pages/(authenticated)/history/Report";
import Create from "./pages/(authenticated)/profile/Create";
import EditBot from "./pages/(authenticated)/bots/EditBot";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/create-comment" element={<CreateComment />} />

        <Route path="/history" element={<History />} />
        <Route path="/downloadreport" element={<DownloadReport/>} />
        <Route path="/report/:batchId" element={<Report/>} />

        <Route path="/accounts" element={<Profile/>} />
        <Route path="/create" element={<Create/>} />

        <Route path="/bots" element={<Bots />} />
        <Route path="/bot/:id_bot" element={<EditBot/>} />
      </Routes>
    </Router>
  );
}

export default App;
