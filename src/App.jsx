import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import PromptGenerator from './pages/PromptGenerator'
import Blog from './pages/Blog'
import Admin from './pages/Admin'
import Structure from './pages/Structure'
import Mastering from './pages/Mastering'
import Examples from './pages/Examples'

function App() {
  return (
    <Router basename="/promtwave-v2">
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/generator" element={<PromptGenerator />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/admin" element={<Admin />} />
                <Route path="/structure" element={<Structure />} />
                <Route path="/mastering" element={<Mastering />} />
                <Route path="/examples" element={<Examples />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
