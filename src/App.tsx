import "./App.css";
import Header from "./components/header";
// import svg1 from "./assets/gradient-left-dark.svg";
// import svg2 from "./assets/gradient-right-dark.svg";
import { Hero } from "./components/hero";
import { About } from "./components/about";
import { Projects } from "./components/projects";
import { Contact } from "./components/contact";
import { ScrollTop } from "primereact/scrolltop";
function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Hero />
        <About />
        <Projects />
        <Contact />
        <footer className="footer p-3 bg-surface-b">
          <p className="text-center">
            &copy; {new Date().getFullYear()}{" "}
            <span
              style={{
                fontWeight: "bold",
                fontSize: "1.2rem",
              }}
              className="text-gradient"
            >
              ruzfardev
            </span>{" "}
            Made with <span className="heart">❤</span> and{" "}
            <span className="coffee">☕</span>
          </p>
        </footer>
        {/* <div className="app-container"></div> */}
      </main>
    </>
  );
}

export default App;
