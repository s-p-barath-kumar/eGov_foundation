import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Impact from "./components/Impact";
import Solutions from "./components/Solutions";
import About from "./components/About";
import Platform from "./components/Platform";
import Latest from "./components/Latest";
import Supporters from "./components/Supporters";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Impact />
        <Solutions />
        <About />
        <Platform />
        <Latest />
        <Supporters />
      </main>
      <Footer />
    </>
  );
};

export default App;
