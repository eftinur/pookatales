import About from "../components/About";
import BookList from "../components/BookList";
import Hero from "../components/Hero";
import TermsConditions from "../components/TermsConditions";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <BookList />
      <TermsConditions />
    </>
  );
};

export default Home;
