import About from "../components/About";
import BookList from "../components/BookList";
import Commercial from "../components/Commercial";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Partners from "../components/Partners";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <BookList />
      <Commercial />
      <Partners />
      <Contact />
    </>
  );
};

export default Home;
