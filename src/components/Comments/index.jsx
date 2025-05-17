import { useEffect, useState } from "react";

import { get } from "../../service/api";
import { API } from "../../constants/api";

const Comments = ({ idBlog }) => {
  const [comments, setComments] = useState([]);
  console.log(comments);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await get(`${API.BLOGDETAIL_ENDPOINT}/${idBlog}`);
        setComments(response.data.comment);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchComments();
  }, [idBlog]);

  return (
    <div className="response-area">
      <h2>{comments.length} RESPONSES</h2>
      <ul className="media-list">
        {comments.map((comment, index) => (
          <li key={index} className="media">
            <a className="pull-left" href=".">
              <img
                className="media-object"
                src={`http://localhost:8080/web/laravel8/public/upload/user/avatar/${comment.image_user}`}
                alt="avatar"
              />
            </a>
            <div className="media-body">
              <ul className="sinlge-post-meta">
                <li>
                  <i className="fa fa-user"></i> {comment.name_user}
                </li>
                <li>
                  <i className="fa fa-clock-o"></i> 1:33 pm
                </li>
                <li>
                  <i className="fa fa-calendar"></i> DEC 5, 2013
                </li>
              </ul>
              <p>{comment.comment}</p>
              <a className="btn btn-primary" href=".">
                <i className="fa fa-reply"></i> Reply
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );

  // return (
  //   <div className="response-area">
  //     <h2>{comments.length} RESPONSES</h2>
  //     <ul className="media-list">
  //       <li className="media">
  //         <a className="pull-left" href=".">
  //           <img
  //             className="media-object"
  //             src="images/blog/man-two.jpg"
  //             alt=""
  //           />
  //         </a>
  //         <div className="media-body">
  //           <ul className="sinlge-post-meta">
  //             <li>
  //               <i className="fa fa-user"></i>Janis Gallagher
  //             </li>
  //             <li>
  //               <i className="fa fa-clock-o"></i> 1:33 pm
  //             </li>
  //             <li>
  //               <i className="fa fa-calendar"></i> DEC 5, 2013
  //             </li>
  //           </ul>
  //           <p>
  //             Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
  //             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
  //             enim ad minim veniam, quis nostrud exercitation ullamco laboris
  //             nisi ut aliquip ex ea commodo consequat.
  //           </p>
  //           <a className="btn btn-primary" href=".">
  //             <i className="fa fa-reply"></i>Replay
  //           </a>
  //         </div>
  //       </li>

  //       <li className="media second-media">
  //         <a className="pull-left" href=".">
  //           <img
  //             className="media-object"
  //             src="images/blog/man-three.jpg"
  //             alt=""
  //           />
  //         </a>
  //         <div className="media-body">
  //           <ul className="sinlge-post-meta">
  //             <li>
  //               <i className="fa fa-user"></i>Janis Gallagher
  //             </li>
  //             <li>
  //               <i className="fa fa-clock-o"></i> 1:33 pm
  //             </li>
  //             <li>
  //               <i className="fa fa-calendar"></i> DEC 5, 2013
  //             </li>
  //           </ul>
  //           <p>
  //             Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
  //             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
  //             enim ad minim veniam, quis nostrud exercitation ullamco laboris
  //             nisi ut aliquip ex ea commodo consequat.
  //           </p>
  //           <a className="btn btn-primary" href=".">
  //             <i className="fa fa-reply"></i>Replay
  //           </a>
  //         </div>
  //       </li>
  //       <li className="media second-media">
  //         <a className="pull-left" href=".">
  //           <img
  //             className="media-object"
  //             src="images/blog/man-three.jpg"
  //             alt=""
  //           />
  //         </a>
  //         <div className="media-body">
  //           <ul className="sinlge-post-meta">
  //             <li>
  //               <i className="fa fa-user"></i>Janis Gallagher
  //             </li>
  //             <li>
  //               <i className="fa fa-clock-o"></i> 1:33 pm
  //             </li>
  //             <li>
  //               <i className="fa fa-calendar"></i> DEC 5, 2013
  //             </li>
  //           </ul>
  //           <p>
  //             Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
  //             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
  //             enim ad minim veniam, quis nostrud exercitation ullamco laboris
  //             nisi ut aliquip ex ea commodo consequat.
  //           </p>
  //           <a className="btn btn-primary" href=".">
  //             <i className="fa fa-reply"></i>Replay
  //           </a>
  //         </div>
  //       </li>
  //       <li className="media second-media">
  //         <a className="pull-left" href=".">
  //           <img
  //             className="media-object"
  //             src="images/blog/man-three.jpg"
  //             alt=""
  //           />
  //         </a>
  //         <div className="media-body">
  //           <ul className="sinlge-post-meta">
  //             <li>
  //               <i className="fa fa-user"></i>Janis Gallagher
  //             </li>
  //             <li>
  //               <i className="fa fa-clock-o"></i> 1:33 pm
  //             </li>
  //             <li>
  //               <i className="fa fa-calendar"></i> DEC 5, 2013
  //             </li>
  //           </ul>
  //           <p>
  //             Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
  //             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
  //             enim ad minim veniam, quis nostrud exercitation ullamco laboris
  //             nisi ut aliquip ex ea commodo consequat.
  //           </p>
  //           <a className="btn btn-primary" href=".">
  //             <i className="fa fa-reply"></i>Replay
  //           </a>
  //         </div>
  //       </li>

  //       <li className="media">
  //         <a className="pull-left" href=".">
  //           <img
  //             className="media-object"
  //             src="images/blog/man-four.jpg"
  //             alt=""
  //           />
  //         </a>
  //         <div className="media-body">
  //           <ul className="sinlge-post-meta">
  //             <li>
  //               <i className="fa fa-user"></i>Janis Gallagher
  //             </li>
  //             <li>
  //               <i className="fa fa-clock-o"></i> 1:33 pm
  //             </li>
  //             <li>
  //               <i className="fa fa-calendar"></i> DEC 5, 2013
  //             </li>
  //           </ul>
  //           <p>
  //             Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
  //             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
  //             enim ad minim veniam, quis nostrud exercitation ullamco laboris
  //             nisi ut aliquip ex ea commodo consequat.
  //           </p>
  //           <a className="btn btn-primary" href=".">
  //             <i className="fa fa-reply"></i>Replay
  //           </a>
  //         </div>
  //       </li>
  //       <li className="media second-media">
  //         <a className="pull-left" href=".">
  //           <img
  //             className="media-object"
  //             src="images/blog/man-three.jpg"
  //             alt=""
  //           />
  //         </a>
  //         <div className="media-body">
  //           <ul className="sinlge-post-meta">
  //             <li>
  //               <i className="fa fa-user"></i>Janis Gallagher
  //             </li>
  //             <li>
  //               <i className="fa fa-clock-o"></i> 1:33 pm
  //             </li>
  //             <li>
  //               <i className="fa fa-calendar"></i> DEC 5, 2013
  //             </li>
  //           </ul>
  //           <p>
  //             Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
  //             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
  //             enim ad minim veniam, quis nostrud exercitation ullamco laboris
  //             nisi ut aliquip ex ea commodo consequat.
  //           </p>
  //           <a className="btn btn-primary" href=".">
  //             <i className="fa fa-reply"></i>Replay
  //           </a>
  //         </div>
  //       </li>
  //       <li className="media second-media">
  //         <a className="pull-left" href=".">
  //           <img
  //             className="media-object"
  //             src="images/blog/man-three.jpg"
  //             alt=""
  //           />
  //         </a>
  //         <div className="media-body">
  //           <ul className="sinlge-post-meta">
  //             <li>
  //               <i className="fa fa-user"></i>Janis Gallagher
  //             </li>
  //             <li>
  //               <i className="fa fa-clock-o"></i> 1:33 pm
  //             </li>
  //             <li>
  //               <i className="fa fa-calendar"></i> DEC 5, 2013
  //             </li>
  //           </ul>
  //           <p>
  //             Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
  //             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
  //             enim ad minim veniam, quis nostrud exercitation ullamco laboris
  //             nisi ut aliquip ex ea commodo consequat.
  //           </p>
  //           <a className="btn btn-primary" href=".">
  //             <i className="fa fa-reply"></i>Replay
  //           </a>
  //         </div>
  //       </li>
  //       <li className="media second-media">
  //         <a className="pull-left" href=".">
  //           <img
  //             className="media-object"
  //             src="images/blog/man-three.jpg"
  //             alt=""
  //           />
  //         </a>
  //         <div className="media-body">
  //           <ul className="sinlge-post-meta">
  //             <li>
  //               <i className="fa fa-user"></i>Janis Gallagher
  //             </li>
  //             <li>
  //               <i className="fa fa-clock-o"></i> 1:33 pm
  //             </li>
  //             <li>
  //               <i className="fa fa-calendar"></i> DEC 5, 2013
  //             </li>
  //           </ul>
  //           <p>
  //             Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
  //             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
  //             enim ad minim veniam, quis nostrud exercitation ullamco laboris
  //             nisi ut aliquip ex ea commodo consequat.
  //           </p>
  //           <a className="btn btn-primary" href=".">
  //             <i className="fa fa-reply"></i>Replay
  //           </a>
  //         </div>
  //       </li>
  //     </ul>
  //   </div>
  // );
};
export default Comments;
