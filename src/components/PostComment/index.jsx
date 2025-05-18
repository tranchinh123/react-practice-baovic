import { useState } from "react";
import { post } from "../../service/api";
import { API } from "../../constants/api";

const PostComment = ({ idBlog, onNewComment, replyTo }) => {
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");

  const token = localStorage.getItem("token");
  const auth = JSON.parse(localStorage.getItem("auth"));
  const config = {
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json",
    },
  };

  const handlePostComment = async (e) => {
    e.preventDefault();

    if (!token) {
      alert("Vui lòng đăng nhập trước khi bình luận");
      return;
    }

    if (!comment.trim()) {
      setError("Vui lòng nhập bình luận");
      return;
    } else {
      const formData = new FormData();
      formData.append("id_blog", idBlog);
      formData.append("id_user", auth.id);
      formData.append("id_comment", replyTo || 0);
      formData.append("comment", comment);
      formData.append("image_user", auth.avatar);
      formData.append("name_user", auth.name);

      try {
        await post(
          `${API.BLOG_ENDPOINT}/${API.COMMENT_ENDPOINT}/${idBlog}`,
          formData,
          config
        );

        const newComment = {
          id_comment: replyTo || 0,
          comment,
          image_user: auth.avatar,
          name_user: auth.name,
        };

        if (onNewComment) {
          onNewComment(newComment);
        }

        setError("");
        setComment("");
      } catch (err) {
        console.error("Post Comment Failed:", err.message);
        setError("Không thể gửi bình luận. Vui lòng thử lại sau.");
      }
    }
  };

  return (
    <div className="replay-box">
      <div className="row">
        <div className="col-sm-12">
          <h2>Leave a {replyTo ? `reply @${auth.name}` : "comment"}</h2>

          <div className="text-area">
            <div className="blank-arrow">
              <label>{auth?.name || "Guest"}</label>
            </div>
            <span>*</span>
            <textarea
              name="message"
              rows="5"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>

            <div style={{ color: "red", margin: "5px 0" }}>{error}</div>

            <button className="btn btn-primary" onClick={handlePostComment}>
              Post Comment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PostComment;
