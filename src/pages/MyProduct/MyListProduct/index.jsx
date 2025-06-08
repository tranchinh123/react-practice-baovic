import "./index.css";
import { useState, useEffect, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { get } from "../../../service/api";
import { API } from "../../../constants/api";

const MyProductPage = () => {
  const [products, setProducts] = useState([]);
  const userID = JSON.parse(localStorage.getItem("auth")).id;

  const token = localStorage.getItem("token");
  const config = useMemo(
    () => ({
      headers: {
        Authorization: "Bearer " + token,
        Accept: "application/json",
      },
    }),
    [token]
  );

  const navigate = useNavigate();

  const fetchProduct = useCallback(async () => {
    try {
      const response = await get(`${API.MYPRODUCT_ENDPOINT}`, config);
      const data = Object.values(response);
      const productList = Object.values(data[1]); // chuyển thành mảng

      setProducts(productList);
    } catch (err) {
      console.error("Đã xảy ra lỗi khi get MyProduct", err);
    }
  }, [config]);

  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

  const handleEdit = (id) => {
    navigate(`/account/product/edit/${id}`);
  };

  const handleDelete = async (id) => {
    await get(`${API.DELELETPRODUCT_ENDPOINT}/${id}`, config);
    await fetchProduct();
  };

  const handleAdd = () => {
    navigate("/account/product/add");
  };

  return (
    <div className="col-sm-9">
      <div className="table-container">
        <table className="product-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Ảnh</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => {
              // Parse ảnh JSON, lấy ảnh đầu tiên, xử lý lỗi an toàn
              let firstImage = "";
              try {
                const images = JSON.parse(product.image);
                firstImage = images.length > 0 ? images[0] : "";
              } catch {
                firstImage = "";
              }

              // Đường dẫn đầy đủ ảnh
              const imageUrl = firstImage
                ? `http://localhost:8080/web/laravel8/public/upload/product/${userID}/${firstImage}`
                : "";

              return (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>
                    {firstImage ? (
                      <img
                        src={imageUrl}
                        alt={product.name}
                        className="product-image"
                      />
                    ) : (
                      <span>Không có ảnh</span>
                    )}
                  </td>
                  <td>{product.price.toLocaleString()}$</td>
                  <td>
                    <button
                      className="btn edit-btn"
                      onClick={() => handleEdit(product.id)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn delete-btn"
                      onClick={() => handleDelete(product.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <button onClick={handleAdd} className="add-btn">
        Add Product
      </button>
    </div>
  );
};
export default MyProductPage;
