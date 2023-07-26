import axios from "axios";
import { useEffect, useState } from "react";

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
    <div className="bg-[#1e1e1e] px-4 py-20">
      <div className="container mx-auto relative">
        <div className="w-3/4 mx-auto pb-12">
          <h5 className="text-5xl lg:text-9xl text-white font-medium text-center  capitalize">
            Upcoming this week
          </h5>
        </div>
        <div className="w-3/4 sm:w-2/4 lg:w-1/4 mx-auto my-8 shadow-2xl">
          <img className="w-full" src={book[0]?.image_url} alt="" />
        </div>
        <div className="w-full lg:w-2/4 mx-auto py-4 mt-5 px-4 text-white">
          <h5 className="text-3xl lg:text-5xl text-white font-medium mb-8 capitalize">{book[0]?.title}</h5>
          <p className="text-xs lg:text-base">{book[0]?.description}</p>
          <p className="text-medium text-xl mt-4">Authors: {book[0]?.authors}</p>
        </div>
      </div>
    </div>
  );
};

export default Upcoming;
