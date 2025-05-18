import { useEffect, useState } from "react";
import Rating from "react-rating";
import { getById } from "../../service/api";
import { API } from "../../constants/api";
const StarRating = () => {
  const [rating, setRating] = useState(0);
  const handleChangeRating = (value) => {
    setRating(value);
    console.log(value);
  };

  useEffect(() => {
    const getRattingBlog = async () => {
      try {
        const response = await getById(API.BLOGRATE_ENPOINT, 4);
        console.log(response.data);
      } catch (err) {}
    };

    getRattingBlog();
  }, []);

  return (
    <div>
      <Rating
        initialRating={rating}
        onChange={handleChangeRating}
        emptySymbol={<span style={{ fontSize: "30px", color: "#ccc" }}>☆</span>}
        fullSymbol={<span style={{ fontSize: "30px", color: "blue" }}>★</span>}
        fractions={1} // cho phép rating theo từng nửa sao, nếu muốn
        stop={6}
      />
    </div>
  );
};

export default StarRating;
