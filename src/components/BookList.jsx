import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  // GEtting data from API
  const API_URL = "https://example-data.draftbit.com/books?_limit=10"; // API URL
  useEffect(() => {
    axios.get(API_URL).then((res) => {
      setBooks(res.data);
    });
  }, []);

  return (
    <div className="container mx-auto px-4 my-20">
      <h5 className="heading_text w-3/4 mx-auto text-[8rem] text-gray-400 font-light text-center leading-[128px] uppercase py-12">
       Top Sellers this week
      </h5>
      <div className="w-full grid grid-cols-5">
        {books.map((book, index) => (
          // Mapping items to render in the UI
          <div className="book_wrapper shadow-xl rounded-xl" key={index}>
            <div
              className="book_poster rounded-md"
              onClick={() => navigate(`/books/${book.id}`)}
            >
              <img src={book?.image_url} alt="poster" />
            </div>
            <div className="mt-8 font-medium text-gray-400 text-center">
              <h5>{book?.title}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;
