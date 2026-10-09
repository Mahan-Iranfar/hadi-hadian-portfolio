import Header from '@/components/Header';
import Hero from '@/components/Hero';
import StatsBar from '@/components/StatsBar';
import About from '@/components/About';
import Credentials from '@/components/Credentials';
import Achievements from '@/components/Achievements';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ClientScripts from '@/components/ClientScripts';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <StatsBar />
      <About />
      <Credentials />
      <Achievements />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      <ClientScripts />
    </>
  );
}