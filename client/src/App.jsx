import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter as Router, Route, Routes}  from "react-router-dom";
import TopicDetailsPage from "./pages/TopicDetailsPage";

export default function App() {
  return (
    <Router >
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/topic" element={<TopicDetailsPage />} />
      </Routes>
    </Router>
  )
}