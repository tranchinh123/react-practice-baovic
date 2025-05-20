import { useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

import useFetchBlogById from "../../hooks/useFetchBlogByID";

import Rating from "../../components/Rating";
import Comments from "../../components/Comments";
import PostComment from "../../components/PostComment";

import { get } from "../../service/api";
import { API } from "../../constants/api";

import imageSocial from "../../assets/images/blog/socials.png";

const BlogPageDetail = () => {
  const { id } = useParams();
  const { data, error } = useFetchBlogById(id);
  const [comments, setComments] = useState([]);
  const commentFormRef = useRef();

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await get(`${API.BLOGDETAIL_ENDPOINT}/${id}`);
        setComments(response.data.comment);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchComments();
  }, [id]);

  const handleReplyButton = (idComment) => {
    console.log("Click Comment", idComment);
    if (commentFormRef) {
      if (commentFormRef.current) {
        commentFormRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleNewComment = (newComment) => {
    setComments((prev) => [...prev, newComment]);
  };

  if (error) return <p style={{ color: "red" }}>{error}</p>;
  return (
    <div className="col-sm-9">
      <div className="blog-post-area">
        <h2 className="title text-center">Latest From our Blog</h2>
        <div className="single-blog-post">
          <h3>{data.title}</h3>
          <div className="post-meta">
            <ul>
              <li>
                <i className="fa fa-user"></i> Mac Doe
              </li>
              <li>
                <i className="fa fa-clock-o"></i> 1:33 pm
              </li>
              <li>
                <i className="fa fa-calendar"></i> DEC 5, 2013
              </li>
            </ul>
          </div>
          <a href=".">
            <img
              src={`http://project.test/laravel8/laravel8/public/upload/blog/image/${data.image}`}
              alt=""
            />
          </a>

          <div dangerouslySetInnerHTML={{ __html: data.content }}></div>

          <div className="pager-area">
            <ul className="pager pull-right">
              <li>
                <a href="/">Pre</a>
              </li>
              <li>
                <a href="/">Next</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Rating />

      <div className="socials-share">
        <a href=".">
          <img src={imageSocial} alt="" />
        </a>
      </div>

      <Comments comments={comments} onReply={handleReplyButton} />

      <div ref={commentFormRef}>
        <PostComment idBlog={id} onNewComment={handleNewComment} />
      </div>
    </div>
  );
};
export default BlogPageDetail;
