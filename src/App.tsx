import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Skills } from "@/components/sections/Skills";
import { Work } from "@/components/sections/Work";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";
import ClickSpark from "@/components/react-bits/ClickSpark";

function App() {
  return (
    <ClickSpark
      sparkColor="#6366f1"
      sparkSize={12}
      sparkRadius={20}
      sparkCount={10}
      duration={500}
      extraScale={1.2}
    >
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main>
          <Hero />
          <Skills />
          <Work />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </ClickSpark>
  );
}

export default App;
