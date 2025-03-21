import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import HomePage from "./pages/HomePage"
import GeneratePage from "./pages/GeneratePage"
import ResultPage from "./pages/ResultPage"
import CallbackPage from "./pages/CallbackPage"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/generate" element={<GeneratePage />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/callback" element={<CallbackPage />} />
      </Routes>
    </Router>
  )
}

export default App

