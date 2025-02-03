import { Header } from "./components/Header";
import { Footer } from "./components/pages/footer";
import "./App.css";
import ContextUser from "./components/pages/context";
import { Home } from "./components/pages/Home";
import { Contact } from "./components/pages/contact";
import { Project } from "./components/pages/Project";
import { Skills } from "./components/pages/Skills";
import { About } from "./components/pages/About";

function App() {
  return (
    <div className="App">
      <ContextUser>
        <div className="container">
          <Header /> {/* Header with Navigation links */}
          {/* Sections for each page */}
          <div id="home">
            <Home />
          </div>
          <div id="about">
            <About />
          </div>
          <div id="skills">
            <Skills />
          </div>
          <div id="project">
            <Project />
          </div>
          <div id="contact">
            <Contact />
          </div>
        </div>

        <Footer />
      </ContextUser>
    </div>
  );
}

export default App;
