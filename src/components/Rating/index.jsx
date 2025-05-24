import { useEffect, useState } from "react";

import Rating from "react-rating";

import { getById, post } from "../../service/api";
import { API } from "../../constants/api";

const StarRating = ({ idBlog }) => {
  const [rating, setRating] = useState(0);
  const token = localStorage.getItem("token");
  const auth = JSON.parse(localStorage.getItem("auth"));

  const config = {
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json",
    },
  };

  const handleChangeRating = (value) => {
    if (!token) {
      alert("Vui lòng đăng nhập để đánh giá");
      return;
    }

    const postRate = async () => {
      const data = {
        user_id: auth.id,
        blog_id: idBlog,
        rate: value,
      };
      console.log(data);

      try {
        const response = await post(
          `${API.BLOGRATE_ENPOINT}/${idBlog}`,
          data,
          config
        );
        return response.data;
      } catch (err) {
        console.error("Đã xảy ra lỗi", err.message);
      }
    };

    postRate();
  };

  useEffect(() => {
    const getRattingBlog = async () => {
      try {
        const response = await getById(API.BLOGRATE_ENPOINT, idBlog);
        const data = response.data;
        console.log(data);

        const rates = data.map((item) => item.rate);

        if (rates.length > 0) {
          const avgRate =
            rates.reduce((acc, val) => acc + val, 0) / rates.length;
          setRating(Math.round(avgRate));
        }
      } catch (err) {
        console.error("Lỗi khi fetch ", err.message);
      }
    };

    getRattingBlog();
  }, [idBlog]);

  return (
    <div>
      <Rating
        initialRating={rating}
        onChange={handleChangeRating}
        emptySymbol={<span style={{ fontSize: "30px", color: "#ccc" }}>☆</span>}
        fullSymbol={<span style={{ fontSize: "30px", color: "blue" }}>★</span>}
        fractions={1}
        stop={5}
      />
    </div>
  );
};

export default StarRating;
