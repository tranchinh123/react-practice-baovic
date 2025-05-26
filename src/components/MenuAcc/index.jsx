import { Link } from "react-router-dom";
const MenuAcc = () => {
  return (
    <div className="col-sm-3">
      <div className="left-sidebar">
        <h2>Category</h2>
        <div className="panel-group category-products" id="accordian">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h4 className="panel-title">
                <Link
                  data-toggle="collapse"
                  data-parent="#accordian"
                  to="/account/update"
                >
                  <span className="badge pull-right">
                    <i className="fa fa-plus"></i>
                  </span>
                  Account
                </Link>
              </h4>
            </div>
          </div>
          <div className="panel panel-default">
            <div className="panel-heading">
              <h4 className="panel-title">
                <Link
                  data-toggle="collapse"
                  data-parent="#accordian"
                  to="/account/product/list"
                >
                  <span className="badge pull-right">
                    <i className="fa fa-plus"></i>
                  </span>
                  MY PRODUCT
                </Link>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuAcc;
