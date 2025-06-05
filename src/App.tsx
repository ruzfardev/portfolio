import Header from "./components/header";
import { Hero } from "./components/hero";
import { About } from "./components/about";
import { Projects } from "./components/projects";
import { Contact } from "./components/contact";

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
        <footer className="py-6 bg-secondary/20">
          <p className="text-center">
            &copy; {new Date().getFullYear()}{" "}
            <span className="text-gradient font-bold text-xl">ruzfardev</span>{" "}
            Made with <span className="text-red-500">❤</span> and{" "}
            <span className="text-yellow-600">☕</span>
          </p>
        </footer>
      </main>
    </div>
  );
}

export default App;
