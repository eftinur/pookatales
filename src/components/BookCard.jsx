import { useNavigate } from "react-router-dom";

const BookCard = ({book}) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/books/${book?.id}`)}
      className="book_wrapper shadow-xl rounded-xl"
    >
      <div className="book_poster rounded-md">
        <img src={book?.image_url} alt="poster" />
      </div>
      <div className="mt-8 font-medium text-gray-400 text-center">
        <h5>{book?.title}</h5>
      </div>
    </div>
  );
};

export default BookCard;
