import { useState, useEffect } from "react";
import { API } from "../constants/api";
import { get } from "../service/api";

const useFetchBlog = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await get(API.BLOG_ENDPOINT);
        setData(result.blog.data);
      } catch (error) {
        console.error("Lỗi khi fetch blog:", error.message);
        setError("Something went wrong!");
      }
    };
    fetchData();
  }, []);
  return { data, error };
};

export default useFetchBlog;
