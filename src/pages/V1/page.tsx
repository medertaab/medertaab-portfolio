import Header from "@component/components/v1/header";
import Hero from "@component/components/v1/hero";
import About from "@component/components/v1/about";
import Projects from "@component/components/v1/projects";
import Contact from "@component/components/v1/contact";
import Footer from "@component/components/v1/footer";
import Head from "@component/components/v1/head";

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
