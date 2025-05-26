const Comments = ({ comments, onReply }) => {
  const parentComments = comments.filter((c) => c.id_comment === 0);

  const getChildComments = (parentId) =>
    comments.filter((c) => c.id_comment === parentId);

  return (
    <div className="response-area">
      <h2>{comments.length} RESPONSES</h2>
      <ul className="media-list">
        {parentComments.map((parent) => (
          <li key={parent.id} className="media">
            {/* <a className="pull-left" href=".">
              <img
                className="media-object"
                src={`http://localhost:8080/web/laravel8/public/upload/user/avatar/${parent.image_user}`}
                alt="avatar"
              />
            </a> */}
            <a className="pull-left" href=".">
              <img
                className="media-object"
                src={`http://project.test/laravel8/laravel8/public/upload/user/avatar/${parent.image_user}`}
                alt="avatar"
              />
            </a>
            <div className="media-body">
              <ul className="sinlge-post-meta">
                <li>
                  <i className="fa fa-user"></i> {parent.name_user}
                </li>
                <li>
                  <i className="fa fa-clock-o"></i> 1:33 pm
                </li>
                <li>
                  <i className="fa fa-calendar"></i> DEC 5, 2013
                </li>
              </ul>
              <p>{parent.comment}</p>
              <button
                className="btn btn-primary"
                onClick={() => onReply(parent.id)}
              >
                <i className="fa fa-reply"></i> Reply
              </button>
            </div>

            {getChildComments(parent.id).length > 0 && (
              <ul className="media-list" style={{ marginLeft: "40px" }}>
                {getChildComments(parent.id).map((child) => (
                  <li key={child.id} className="media second-media">
                    {/* <a className="pull-left" href=".">
                      <img
                        className="media-object"
                        src={`http://localhost:8080/web/laravel8/public/upload/user/avatar/${child.image_user}`}
                        alt="avatar"
                      />
                    </a> */}

                    <a className="pull-left" href=".">
                      <img
                        className="media-object"
                        src={`http://project.test/laravel8/laravel8/public/upload/user/avatar/${child.image_user}`}
                        alt="avatar"
                      />
                    </a>
                    <div className="media-body">
                      <ul className="sinlge-post-meta">
                        <li>
                          <i className="fa fa-user"></i> {child.name_user}
                        </li>
                        <li>
                          <i className="fa fa-clock-o"></i> 1:33 pm
                        </li>
                        <li>
                          <i className="fa fa-calendar"></i> DEC 5, 2013
                        </li>
                      </ul>
                      <p>{child.comment}</p>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Comments;
