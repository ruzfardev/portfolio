import Header from "./components/header";
import { Hero } from "./components/hero";
import { About } from "./components/about";
import { Projects } from "./components/projects";
import { Contact } from "./components/contact";
import { SkipLink } from "./components/ui/skip-link";
import { BackToTop } from "./components/ui/back-to-top";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="min-h-screen bg-background">
      {/* Skip Navigation Links for Accessibility */}
      <SkipLink href="#main">Skip to main content</SkipLink>
      <SkipLink href="#projects">Skip to projects</SkipLink>
      
      <Header />
      
      <main id="main">
        <Hero />
        <About />
        <Projects />
        <Contact />
        
        <motion.footer 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="py-6 bg-secondary/20"
        >
          <div className="container">
            <p className="text-center text-sm sm:text-base">
              &copy; {new Date().getFullYear()}{" "}
              <span className="text-gradient font-bold text-lg sm:text-xl">
                ruzfardev
              </span>{" "}
              <span className="block sm:inline mt-2 sm:mt-0">
                Made with <span className="text-red-500 animate-pulse inline-block">❤</span> and{" "}
                <span className="text-yellow-600">☕</span>
              </span>
            </p>
          </div>
        </motion.footer>
      </main>
      
      {/* Back to Top Button */}
      <BackToTop />
    </div>
  );
}

export default App;
