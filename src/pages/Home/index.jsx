import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { get } from "../../service/api";

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await get(`product`);
      setProducts(response.data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="col-sm-9 padding-right">
      <div className="features_items">
        <h2 className="title text-center">Features Items</h2>
        {products.map((product) => {
          let firstImage = "";
          try {
            const images = JSON.parse(product.image);
            firstImage = images.length > 0 ? images[0] : "";
          } catch {
            firstImage = "";
          }

          // Đường dẫn đầy đủ ảnh
          const imageUrl = firstImage
            ? `http://project.test/laravel8/laravel8/public/upload/product/${product.id_user}/${firstImage}`
            : "";

          return (
            <div key={product.id} className="col-sm-4">
              <div className="product-image-wrapper">
                <div className="single-products">
                  <div className="productinfo text-center">
                    <img src={imageUrl} alt="" />
                    <h2>{`$${product.price}`}</h2>
                    <p>{`${product.name}`}</p>
                    <Link href="#" className="btn btn-default add-to-cart">
                      <i className="fa fa-shopping-cart"></i>Add to cart
                    </Link>
                  </div>
                </div>
                <div className="choose">
                  <ul className="nav nav-pills nav-justified">
                    <li>
                      <Link href="#">
                        <i className="fa fa-plus-square"></i>Add to wishlist
                      </Link>
                    </li>
                    <li>
                      <Link to={`/product_detail/${product.id}`}>
                        <i className="fa fa-plus-square"></i>More
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="category-tab">
        <div className="col-sm-12">
          <ul className="nav nav-tabs">
            <li className="active">
              <Link href="#tshirt" data-toggle="tab">
                T-Shirt
              </Link>
            </li>
            <li>
              <Link href="#blazers" data-toggle="tab">
                Blazers
              </Link>
            </li>
            <li>
              <Link href="#sunglass" data-toggle="tab">
                Sunglass
              </Link>
            </li>
            <li>
              <Link href="#kids" data-toggle="tab">
                Kids
              </Link>
            </li>
            <li>
              <Link href="#poloshirt" data-toggle="tab">
                Polo shirt
              </Link>
            </li>
          </ul>
        </div>
        <div className="tab-content">
          <div className="tab-pane fade active in" id="tshirt">
            <div className="col-sm-3">
              <div className="product-image-wrapper">
                <div className="single-products">
                  <div className="productinfo text-center">
                    <img src="images/home/gallery1.jpg" alt="" />
                    <h2>$56</h2>
                    <p>Easy Polo Black Edition</p>
                    <Link href="#" className="btn btn-default add-to-cart">
                      <i className="fa fa-shopping-cart"></i>Add to cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="product-image-wrapper">
                <div className="single-products">
                  <div className="productinfo text-center">
                    <img src="images/home/gallery2.jpg" alt="" />
                    <h2>$56</h2>
                    <p>Easy Polo Black Edition</p>
                    <Link href="#" className="btn btn-default add-to-cart">
                      <i className="fa fa-shopping-cart"></i>Add to cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="product-image-wrapper">
                <div className="single-products">
                  <div className="productinfo text-center">
                    <img src="images/home/gallery3.jpg" alt="" />
                    <h2>$56</h2>
                    <p>Easy Polo Black Edition</p>
                    <Link href="#" className="btn btn-default add-to-cart">
                      <i className="fa fa-shopping-cart"></i>Add to cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="product-image-wrapper">
                <div className="single-products">
                  <div className="productinfo text-center">
                    <img src="images/home/gallery4.jpg" alt="" />
                    <h2>$56</h2>
                    <p>Easy Polo Black Edition</p>
                    <Link href="#" className="btn btn-default add-to-cart">
                      <i className="fa fa-shopping-cart"></i>Add to cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="tab-pane fade" id="blazers">
            <div className="col-sm-3">
              <div className="product-image-wrapper">
                <div className="single-products">
                  <div className="productinfo text-center">
                    <img src="images/home/gallery4.jpg" alt="" />
                    <h2>$56</h2>
                    <p>Easy Polo Black Edition</p>
                    <Link href="#" className="btn btn-default add-to-cart">
                      <i className="fa fa-shopping-cart"></i>Add to cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="product-image-wrapper">
                <div className="single-products">
                  <div className="productinfo text-center">
                    <img src="images/home/gallery3.jpg" alt="" />
                    <h2>$56</h2>
                    <p>Easy Polo Black Edition</p>
                    <Link href="#" className="btn btn-default add-to-cart">
                      <i className="fa fa-shopping-cart"></i>Add to cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="product-image-wrapper">
                <div className="single-products">
                  <div className="productinfo text-center">
                    <img src="images/home/gallery2.jpg" alt="" />
                    <h2>$56</h2>
                    <p>Easy Polo Black Edition</p>
                    <Link href="#" className="btn btn-default add-to-cart">
                      <i className="fa fa-shopping-cart"></i>Add to cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="product-image-wrapper">
                <div className="single-products">
                  <div className="productinfo text-center">
                    <img src="images/home/gallery1.jpg" alt="" />
                    <h2>$56</h2>
                    <p>Easy Polo Black Edition</p>
                    <Link href="#" className="btn btn-default add-to-cart">
                      <i className="fa fa-shopping-cart"></i>Add to cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="tab-pane fade" id="sunglass">
            <div className="col-sm-3">
              <div className="product-image-wrapper">
                <div className="single-products">
                  <div className="productinfo text-center">
                    <img src="images/home/gallery3.jpg" alt="" />
                    <h2>$56</h2>
                    <p>Easy Polo Black Edition</p>
                    <Link href="#" className="btn btn-default add-to-cart">
                      <i className="fa fa-shopping-cart"></i>Add to cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="product-image-wrapper">
                <div className="single-products">
                  <div className="productinfo text-center">
                    <img src="images/home/gallery4.jpg" alt="" />
                    <h2>$56</h2>
                    <p>Easy Polo Black Edition</p>
                    <Link href="#" className="btn btn-default add-to-cart">
                      <i className="fa fa-shopping-cart"></i>Add to cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="product-image-wrapper">
                <div className="single-products">
                  <div className="productinfo text-center">
                    <img src="images/home/gallery1.jpg" alt="" />
                    <h2>$56</h2>
                    <p>Easy Polo Black Edition</p>
                    <Link href="#" className="btn btn-default add-to-cart">
                      <i className="fa fa-shopping-cart"></i>Add to cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="product-image-wrapper">
                <div className="single-products">
                  <div className="productinfo text-center">
                    <img src="images/home/gallery2.jpg" alt="" />
                    <h2>$56</h2>
                    <p>Easy Polo Black Edition</p>
                    <Link href="#" className="btn btn-default add-to-cart">
                      <i className="fa fa-shopping-cart"></i>Add to cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="tab-pane fade" id="kids">
            <div className="col-sm-3">
              <div className="product-image-wrapper">
                <div className="single-products">
                  <div className="productinfo text-center">
                    <img src="images/home/gallery1.jpg" alt="" />
                    <h2>$56</h2>
                    <p>Easy Polo Black Edition</p>
                    <Link href="#" className="btn btn-default add-to-cart">
                      <i className="fa fa-shopping-cart"></i>Add to cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="product-image-wrapper">
                <div className="single-products">
                  <div className="productinfo text-center">
                    <img src="images/home/gallery2.jpg" alt="" />
                    <h2>$56</h2>
                    <p>Easy Polo Black Edition</p>
                    <Link href="#" className="btn btn-default add-to-cart">
                      <i className="fa fa-shopping-cart"></i>Add to cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="product-image-wrapper">
                <div className="single-products">
                  <div className="productinfo text-center">
                    <img src="images/home/gallery3.jpg" alt="" />
                    <h2>$56</h2>
                    <p>Easy Polo Black Edition</p>
                    <Link href="#" className="btn btn-default add-to-cart">
                      <i className="fa fa-shopping-cart"></i>Add to cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="product-image-wrapper">
                <div className="single-products">
                  <div className="productinfo text-center">
                    <img src="images/home/gallery4.jpg" alt="" />
                    <h2>$56</h2>
                    <p>Easy Polo Black Edition</p>
                    <Link href="#" className="btn btn-default add-to-cart">
                      <i className="fa fa-shopping-cart"></i>Add to cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="tab-pane fade" id="poloshirt">
            <div className="col-sm-3">
              <div className="product-image-wrapper">
                <div className="single-products">
                  <div className="productinfo text-center">
                    <img src="images/home/gallery2.jpg" alt="" />
                    <h2>$56</h2>
                    <p>Easy Polo Black Edition</p>
                    <Link href="#" className="btn btn-default add-to-cart">
                      <i className="fa fa-shopping-cart"></i>Add to cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="product-image-wrapper">
                <div className="single-products">
                  <div className="productinfo text-center">
                    <img src="images/home/gallery4.jpg" alt="" />
                    <h2>$56</h2>
                    <p>Easy Polo Black Edition</p>
                    <Link href="#" className="btn btn-default add-to-cart">
                      <i className="fa fa-shopping-cart"></i>Add to cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="product-image-wrapper">
                <div className="single-products">
                  <div className="productinfo text-center">
                    <img src="images/home/gallery3.jpg" alt="" />
                    <h2>$56</h2>
                    <p>Easy Polo Black Edition</p>
                    <Link href="#" className="btn btn-default add-to-cart">
                      <i className="fa fa-shopping-cart"></i>Add to cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="product-image-wrapper">
                <div className="single-products">
                  <div className="productinfo text-center">
                    <img src="images/home/gallery1.jpg" alt="" />
                    <h2>$56</h2>
                    <p>Easy Polo Black Edition</p>
                    <Link href="#" className="btn btn-default add-to-cart">
                      <i className="fa fa-shopping-cart"></i>Add to cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="recommended_items">
        <h2 className="title text-center">recommended items</h2>

        <div
          id="recommended-item-carousel"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="item active">
              <div className="col-sm-4">
                <div className="product-image-wrapper">
                  <div className="single-products">
                    <div className="productinfo text-center">
                      <img src="images/home/recommend1.jpg" alt="" />
                      <h2>$56</h2>
                      <p>Easy Polo Black Edition</p>
                      <Link href="#" className="btn btn-default add-to-cart">
                        <i className="fa fa-shopping-cart"></i>Add to cart
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="product-image-wrapper">
                  <div className="single-products">
                    <div className="productinfo text-center">
                      <img src="images/home/recommend2.jpg" alt="" />
                      <h2>$56</h2>
                      <p>Easy Polo Black Edition</p>
                      <Link href="#" className="btn btn-default add-to-cart">
                        <i className="fa fa-shopping-cart"></i>Add to cart
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="product-image-wrapper">
                  <div className="single-products">
                    <div className="productinfo text-center">
                      <img src="images/home/recommend3.jpg" alt="" />
                      <h2>$56</h2>
                      <p>Easy Polo Black Edition</p>
                      <Link href="#" className="btn btn-default add-to-cart">
                        <i className="fa fa-shopping-cart"></i>Add to cart
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="col-sm-4">
                <div className="product-image-wrapper">
                  <div className="single-products">
                    <div className="productinfo text-center">
                      <img src="images/home/recommend1.jpg" alt="" />
                      <h2>$56</h2>
                      <p>Easy Polo Black Edition</p>
                      <Link href="#" className="btn btn-default add-to-cart">
                        <i className="fa fa-shopping-cart"></i>Add to cart
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="product-image-wrapper">
                  <div className="single-products">
                    <div className="productinfo text-center">
                      <img src="images/home/recommend2.jpg" alt="" />
                      <h2>$56</h2>
                      <p>Easy Polo Black Edition</p>
                      <Link href="#" className="btn btn-default add-to-cart">
                        <i className="fa fa-shopping-cart"></i>Add to cart
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="product-image-wrapper">
                  <div className="single-products">
                    <div className="productinfo text-center">
                      <img src="images/home/recommend3.jpg" alt="" />
                      <h2>$56</h2>
                      <p>Easy Polo Black Edition</p>
                      <Link href="#" className="btn btn-default add-to-cart">
                        <i className="fa fa-shopping-cart"></i>Add to cart
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Link
            className="left recommended-item-control"
            href="#recommended-item-carousel"
            data-slide="prev"
          >
            <i className="fa fa-angle-left"></i>
          </Link>
          <Link
            className="right recommended-item-control"
            href="#recommended-item-carousel"
            data-slide="next"
          >
            <i className="fa fa-angle-right"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
