import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const Upcoming = () => {
  const [book, setBook] = useState([]);
  // GEtting data from API
  const API_URL =
    "https://example-data.draftbit.com/books?q=The Fault in Our Stars"; // API URL
  useEffect(() => {
    axios.get(API_URL).then((res) => {
      setBook(res.data);
    });
  }, []);

  console.log(book);
  return (
    <div className="bg-[#8846FF] px-4 py-20">
      <div className="container mx-auto relative">
        <div className="w-3/4 mx-auto pb-12">
          <h5 className="text-5xl lg:text-[8rem] text-white font-light text-center leading-[48px] lg:leading-[128px] uppercase">
            Upcoming this week
          </h5>
        </div>
        <div className="w-2/4 lg:w-1/4 mx-auto my-8 shadow-2xl">
          <img className="w-full" src={book[0]?.image_url} alt="" />
        </div>
        <div className="py-4 mt-5 text-gray-100 px-4">
          <h5 className="text-3xl font-medium mb-8">{book[0]?.title}</h5>
          <p>{book[0]?.description}</p>
          <p className="text-medium text-xl mt-4">Authors: {book[0]?.authors}</p>
        </div>
      </div>
    </div>
  );
};

export default Upcoming;
