import About from "../components/About";
import BookList from "../components/BookList";
import Hero from "../components/Hero";
import Upcoming from "../components/Upcoming";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <BookList />
      <Upcoming />
    </>
  );
};

export default Home;
