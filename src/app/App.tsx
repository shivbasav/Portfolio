import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { Skills } from '../components/sections/Skills';
import { Projects } from '../components/sections/Projects';
import { Experience } from '../components/sections/Experience';
import { Security } from '../components/sections/Security';
import { Contact } from '../components/sections/Contact';
import { AIAssistant } from '../components/ui/AIAssistant';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Security />
        <Contact />
      </main>
      <Footer />
      <AIAssistant />
    </>
  );
}