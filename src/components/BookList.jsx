import { useEffect, useState } from "react";
import axios from "axios";
const BookList = () => {
  const [data, setData] = useState([]);
  // GEtting data from API
  const API_URL = "https://example-data.draftbit.com/books?_limit=28"; // API URL

  useEffect(() => {
    axios.get(API_URL).then((res) => {
      setData(res.data);
      console.log(data);
    });
  }, []);

  return (
    <div className="container mx-auto px-4 my-20">
      <div className="grid grid-cols-4 gap-20">
        {data.map((book, index) => (
          <div className="book_wrapper shadow-xl" key={index}>
            <div className="book_poster">
              <img src={book?.image_url} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;
