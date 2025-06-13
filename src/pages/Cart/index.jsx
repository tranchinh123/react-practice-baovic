import { useState, useEffect } from "react";
import { post } from "../../service/api";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

const CartPage = () => {
  const [products, setProducts] = useState([]);
  const subtotal = products.reduce(
    (acc, product) => acc + product.price * product.qty,
    0
  );

  const handleQuantityUp = (id) => {
    const updatedProducts = products.map((product) =>
      product.id === id ? { ...product, qty: product.qty + 1 } : product
    );
    setProducts(updatedProducts);
    updateLocalStorage(updatedProducts);
  };

  const handleQuantityDown = (id) => {
    const updatedProducts = products.map((product) =>
      product.id === id && product.qty > 1
        ? { ...product, qty: product.qty - 1 }
        : product
    );
    setProducts(updatedProducts);
    updateLocalStorage(updatedProducts);
  };

  const handleDeleteProduct = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
    updateLocalStorage(updatedProducts);
  };

  const updateLocalStorage = (updatedProducts) => {
    const cartObject = {};
    updatedProducts.forEach((item) => {
      cartObject[item.id] = item.qty;
    });
    localStorage.setItem("cart", JSON.stringify(cartObject));
  };

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    const fetchCart = async () => {
      try {
        const response = await post("product/cart", cart);
        const data = response.data;
        setProducts(data);
      } catch (error) {
        console.error("Something went wrong", error);
      }
    };
    fetchCart();
  }, []);

  return (
    <>
      <Header />
      <section id="cart_items">
        <div className="container">
          <div className="breadcrumbs">
            <ol className="breadcrumb">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li className="active">Shopping Cart</li>
            </ol>
          </div>

          <div className="table-responsive cart_info">
            <table className="table table-condensed">
              <thead>
                <tr className="cart_menu">
                  <td className="image">Item</td>
                  <td className="description"></td>
                  <td className="price">Price</td>
                  <td className="quantity">Quantity</td>
                  <td className="total">Total</td>
                  <td></td>
                </tr>
              </thead>

              <tbody>
                {products.map((product) => {
                  let firstImage = "";
                  try {
                    const images = JSON.parse(product.image);
                    firstImage = images.length > 0 ? images[0] : "";
                  } catch {
                    firstImage = "";
                  }

                  const imageUrl = firstImage
                    ? `http://project.test/laravel8/laravel8/public/upload/product/${product.id_user}/${firstImage}`
                    : "";

                  return (
                    <tr key={product.id}>
                      <td className="cart_product">
                        <img
                          src={imageUrl}
                          alt=""
                          style={{ width: "110px", height: "110px" }}
                        />
                      </td>
                      <td className="cart_description">
                        <h4>
                          <p>{product.name}</p>
                        </h4>
                        <p>Web ID: 1089772</p>
                      </td>
                      <td className="cart_price">
                        <p>{`$${product.price}`}</p>
                      </td>
                      <td className="cart_quantity">
                        <div
                          className="cart_quantity_button"
                          style={{ display: "flex" }}
                        >
                          <button
                            className="cart_quantity_up"
                            onClick={() => handleQuantityUp(product.id)}
                          >
                            +
                          </button>
                          <input
                            className="cart_quantity_input"
                            type="text"
                            name="quantity"
                            value={product.qty}
                            size="2"
                            readOnly
                          />
                          <button
                            className="cart_quantity_down"
                            onClick={() => handleQuantityDown(product.id)}
                          >
                            -
                          </button>
                        </div>
                      </td>
                      <td className="cart_total">
                        <p className="cart_total_price">
                          {`$${product.price * product.qty}`}
                        </p>
                      </td>
                      <td className="cart_delete">
                        <button
                          className="cart_quantity_delete"
                          onClick={() => handleDeleteProduct(product.id)}
                        >
                          <i className="fa fa-times"></i>
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="do_action">
        <div className="container">
          <div className="heading">
            <h3>What would you like to do next?</h3>
            <p>
              Choose if you have a discount code or reward points you want to
              use or would like to estimate your delivery cost.
            </p>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <div className="chose_area">
                <ul className="user_option">
                  <li>
                    <input type="checkbox" />
                    <label>Use Coupon Code</label>
                  </li>
                  <li>
                    <input type="checkbox" />
                    <label>Use Gift Voucher</label>
                  </li>
                  <li>
                    <input type="checkbox" />
                    <label>Estimate Shipping & Taxes</label>
                  </li>
                </ul>
                <ul className="user_info">
                  <li className="single_field">
                    <label>Country:</label>
                    <select>
                      <option>United States</option>
                      <option>Bangladesh</option>
                      <option>UK</option>
                      <option>India</option>
                      <option>Pakistan</option>
                      <option>Canada</option>
                      <option>Dubai</option>
                    </select>
                  </li>
                  <li className="single_field">
                    <label>Region / State:</label>
                    <select>
                      <option>Select</option>
                      <option>Dhaka</option>
                      <option>London</option>
                      <option>Lahore</option>
                      <option>Alaska</option>
                      <option>Canada</option>
                      <option>Dubai</option>
                    </select>
                  </li>
                  <li className="single_field zip-field">
                    <label>Zip Code:</label>
                    <input type="text" />
                  </li>
                </ul>
                <button className="btn btn-default update">Get Quotes</button>
                <button className="btn btn-default check_out">Continue</button>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="total_area">
                <ul>
                  <li>
                    Cart Sub Total <span>{subtotal}</span>
                  </li>
                  <li>
                    Eco Tax <span>$2</span>
                  </li>
                  <li>
                    Shipping Cost <span>Free</span>
                  </li>
                  <li>
                    Total <span>{`$${subtotal + 2}`}</span>
                  </li>
                </ul>
                <button className="btn btn-default update">Update</button>
                <button className="btn btn-default check_out">Check Out</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default CartPage;
