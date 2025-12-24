import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import { Routes, Route } from "react-router-dom";
import About from './components/About/About';
import Navbar from './components/Navbar/Navbar';
import "./App.css"
import 'bootstrap-icons/font/bootstrap-icons.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

const App = () => {
  return (
    <div className='div'>
      <div className="menu">
        <Header />
        <Navbar />
        <Footer />
      </div>
      <main>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>
    </div>
  )
}

export default App