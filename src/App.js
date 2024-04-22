import { Routes, Route } from 'react-router-dom';
import { Home } from './components/pages/Home';
import { Contact } from './components/pages/contact'
import { Project } from './components/pages/Project'
import { Skills } from './components/pages/Skills'
import { About } from './components/pages/About'
import { Header } from './components/Header';
// import { Errors } from './components/errors';
import { Footer } from './components/pages/footer';
import './App.css';






function App() {
  return (
    <div className="App">
      <div className="container" >
        <Header />
        <Home/>
        <About/>
        <Skills/>
        <Project/>
        <Contact/>
        <Routes>

          <Route path="/Home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project" element={<Project />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/About" element={<About />} />
          {/* <Route path="*" element={<Errors />} /> */}
        </Routes>
      </div>

      <Footer />

    </div>
  );
}

export default App;
