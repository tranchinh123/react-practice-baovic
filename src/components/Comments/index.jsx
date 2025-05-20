const Comments = ({ comments, onReply }) => {
  return (
    <div className="response-area">
      <h2>{comments.length} RESPONSES</h2>
      <ul className="media-list">
        {comments.map((comment, index) => (
          <li key={index} className="media">
            <a className="pull-left" href=".">
              <img
                className="media-object"
                src={`http://project.test/laravel8/laravel8/public/upload/user/avatar/${comment.image_user}`}
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
              <button
                className="btn btn-primary"
                onClick={() => onReply(comment.id)}
              >
                <i className="fa fa-reply"></i> Reply
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Comments;
