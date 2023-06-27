import Navbar from "@component/components/navbar";
import Hero from "@component/components/hero";
import About from "@component/components/about";
import Projects from "@component/components/projects";
import Contact from "@component/components/contact";
import Footer from "@component/components/footer";
import Head from "@component/components/head";

export default function Home() {
  return (
    <>
      <Head />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
