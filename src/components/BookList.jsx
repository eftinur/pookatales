import { useEffect, useState } from "react";
import axios from "axios";

const BookList = () => {
  const [data, setData] = useState([]);

  // GEtting data from API
  const API_URL = "https://example-data.draftbit.com/books?_limit=28"; // API URL
  useEffect(() => {
    axios.get(API_URL).then((res) => {
      setData(res.data);
      // console.log(data);
    });
  }, [data]);

  return (
    <div className="container mx-auto px-4 my-20">
      <h5 className="text-center text-2xl text-gray-700 font-medium uppercase mb-12">
        Best Sellers
      </h5>
      <div className="w-full grid grid-cols-5 gap-x-6 gap-y-12">
        {data.map((book, index) => (
          // Mapping items to render in the UI
          <div className="book_wrapper shadow-2xl rounded-xl" key={index}>
            <div className="book_poster rounded-md">
              <img src={book?.image_url} alt="poster" />
            </div>
            <div className="fade"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;
