import About from "../components/About";
import BookList from "../components/BookList";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Upcoming from "../components/Upcoming";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <BookList />
      <Upcoming />
      <Contact />
    </>
  );
};

export default Home;
