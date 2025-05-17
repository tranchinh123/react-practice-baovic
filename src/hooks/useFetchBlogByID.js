import { useState, useEffect } from "react";
import { getById } from "../service/api";
import { API } from "../constants/api";

const useFetchBlogById = (id) => {
  const [data, setData] = useState({});
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getById(API.BLOG_ENDPOINT, "detail", id);
        setData(result.data);
      } catch (error) {
        console.error("Lỗi khi fetch blog:", error.message);
        setError("Something went wrong!");
      }
    };
    fetchData();
  }, [id]);
  return { data, error };
};
export default useFetchBlogById;
