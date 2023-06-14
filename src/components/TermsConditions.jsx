import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";

const TermsConditions = () => {
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
    <div className="bg-[#8846FF]">
      <div className="container mx-auto py-20 relative">
        <h5 className="heading_text w-3/4 mx-auto text-[8rem] text-gray-200 font-light text-center leading-[128px] uppercase">
          Upcoming this week
        </h5>
        <div className="w-1/4 mx-auto my-8 shadow-2xl">
          <img className="w-full" src={book[0]?.image_url} alt="" />
        </div>
        <div className="py-4 mt-5 text-gray-100">
          <h5 className="text-3xl font-medium mb-5">{book[0]?.title}</h5>
          <p>{book[0]?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
