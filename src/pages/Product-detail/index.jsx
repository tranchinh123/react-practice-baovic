import { useState, useEffect } from "react";
import { get } from "../../service/api";
import { Link, useParams } from "react-router-dom";

const ProductDetailPage = () => {
  const [product, setProduct] = useState("");
  const { id } = useParams();
  const imageList = product.image ? JSON.parse(product.image) : [];
  const [mainImage, setMainImage] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = (id) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || {};

    if (cart[id]) {
      cart[id] += quantity;
    } else {
      cart[id] = quantity;
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Đã thêm sản phẩm vào giỏ hàng!");
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await get(`product/detail/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error("Something went wrong", error);
      }
    };
    fetchProduct();
  }, [id]);

  useEffect(() => {
    if (product.image) {
      const images = JSON.parse(product.image);
      if (images.length > 0) {
        setMainImage(images[0]);
      }
    }
  }, [product.image]);

  return (
    <div className="col-sm-9 padding-right">
      <div className="product-details">
        <div className="col-sm-5">
          <div className="view-product">
            <img
              src={`http://localhost:8080/web/laravel8/public/upload/product/${product.id_user}/${mainImage}`}
              alt=""
            />
            <Link href="images/product-details/1.jpg" rel="prettyPhoto">
              <h3>ZOOM</h3>
            </Link>
          </div>

          <div
            id="similar-product"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="item active">
                {imageList.map((img, index) => (
                  <Link key={index}>
                    <img
                      src={`http://localhost:8080/web/laravel8/public/upload/product/${product.id_user}/${img}`}
                      alt={`${index + 1}`}
                      onClick={() => setMainImage(img)}
                      style={{
                        width: "85px",
                        height: "85px",
                        objectFit: "cover",
                        marginRight: "5px",
                      }}
                    />
                  </Link>
                ))}
              </div>
            </div>

            <a
              className="left item-control"
              href="#similar-product"
              data-slide="prev"
            >
              <i className="fa fa-angle-left"></i>
            </a>
            <a
              className="right item-control"
              href="#similar-product"
              data-slide="next"
            >
              <i className="fa fa-angle-right"></i>
            </a>
          </div>
        </div>
        <div className="col-sm-7">
          <div className="product-information">
            <img
              src="images/product-details/new.jpg"
              className="newa/rrival"
              alt=""
            />
            <h2>{product.name}</h2>
            <p>Web ID: 1089772</p>
            <img src="images/product-details/rating.png" alt="" />
            <span>
              <span>{`US $${product.price}`}</span>
              <label>Quantity:</label>
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
              />
              <button
                onClick={() => handleAddToCart(product.id)}
                type="button"
                className="btn btn-fefault cart"
              >
                <i className="fa fa-shopping-cart"></i>
                Add to cart
              </button>
            </span>
            <p>
              <b>Availability:</b> In Stock
            </p>
            <p>
              <b>Condition:</b> New
            </p>
            <p>
              <b>Brand:</b> E-SHOPPER
            </p>
          </div>
        </div>
      </div>

      <div className="category-tab shop-details-tab">
        <div className="col-sm-12">
          <ul className="nav nav-tabs">
            <li>
              <Link href="#details" data-toggle="tab">
                Details
              </Link>
            </li>
            <li>
              <Link href="#companyprofile" data-toggle="tab">
                Company Profile
              </Link>
            </li>

            <li className="active">
              <Link href="#reviews" data-toggle="tab">
                Reviews (5)
              </Link>
            </li>
          </ul>
        </div>
        <div className="tab-content">
          <div className="tab-pane fade active in" id="reviews">
            <div className="col-sm-12">
              <ul>
                <li>
                  <Link>
                    <i className="fa fa-user"></i>EUGEN
                  </Link>
                </li>
                <li>
                  <Link>
                    <i className="fa fa-clock-o"></i>12:41 PM
                  </Link>
                </li>
                <li>
                  <Link>
                    <i className="fa fa-calendar-o"></i>31 DEC 2014
                  </Link>
                </li>
              </ul>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
              <p>
                <b>Write Your Review</b>
              </p>

              <form action="#">
                <span>
                  <input type="text" placeholder="Your Name" />
                  <input type="email" placeholder="Email Address" />
                </span>
                <textarea name=""></textarea>

                <button type="button" className="btn btn-default pull-right">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductDetailPage;
