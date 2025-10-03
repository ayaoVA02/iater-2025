import { HashRouter as Router, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import ProjectPage from "./pages/ProjectPage"
import ProgramPage from "./pages/ProgramPage"
import PeoplePage from "./pages/PeoplePage"
import HistoryPage from "./pages/HistoryPage"
import AIEducationTabs from "./pages/AIEducationTabs"
import BlogPostDetail from "./pages/BlogPostDetail"
import Onboard from "./pages/Onboard"
import Professors from "./pages/Professors"
import Test from "./pages/Test"

function App() {
  return (

    <Router>

      <Routes>
        {/* Onboard shown at root */}
        <Route index element={<Onboard />} />

        <Route path="/" element={<Layout />}>
          <Route path="home" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="project" element={<ProjectPage />} />
          <Route path="program" element={<ProgramPage />} />
          <Route path="professors" element={<Professors />} />
          <Route path="history" element={<HistoryPage />} />
          <Route path="aieducation" element={<AIEducationTabs />} />
        </Route>
      </Routes>
    </Router>
    // <div>
    //   <h1>Hellow</h1>
    // </div>
  )
}

export default App
