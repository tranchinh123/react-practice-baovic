import useFetchBlog from "../../hooks/useFetchBlog";
import { Link } from "react-router-dom";

const BlogPage = () => {
  const { data, error } = useFetchBlog();

  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div className="col-sm-9">
      <div className="blog-post-area">
        <h2 className="title text-center">Latest From our Blog</h2>

        {data.map((blog) => (
          <div key={blog.id} className="single-blog-post">
            <h3>{blog.title}</h3>
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
              <span>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-half-o"></i>
              </span>
            </div>
            <Link to={`/blog/detail/${blog.id}`}>
              <img
                src={`http://project.test/laravel8/laravel8/public/upload/blog/image/${blog.image}`}
                alt={blog.title}
              />
            </Link>
            <p>{blog.description}</p>
            <Link className="btn btn-primary" to={`/blog/detail/${blog.id}`}>
              Read More
            </Link>
          </div>
        ))}

        <div className="pagination-area">
          <ul className="pagination">
            <li>
              <a href="." className="active">
                1
              </a>
            </li>
            <li>
              <a href=".">2</a>
            </li>
            <li>
              <a href=".">3</a>
            </li>
            <li>
              <a href=".">
                <i className="fa fa-angle-double-right"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default BlogPage;
