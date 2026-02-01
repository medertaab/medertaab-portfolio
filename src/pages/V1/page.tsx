import Header from "@component/components/v1/Header";
import Hero from "@component/components/v1/Hero";
import About from "@component/components/v1/About";
import Projects from "@component/components/v1/Projects";
import Contact from "@component/components/v1/Contact";
import Footer from "@component/components/v1/Footer";
import Head from "@component/components/v1/Head";

export default function V1() {
  return (
    <div className="v1-page">
      <Head />
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
