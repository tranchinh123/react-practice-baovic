import { useParams } from "react-router-dom";
import { useState, useEffect, useCallback, useMemo } from "react";
import { useForm } from "react-hook-form";

import { get } from "../../../service/api";
import { API } from "../../../constants/api";

import "../EditProductForm/index.css";

const EditProductForm = () => {
  const { id } = useParams();
  const [product, setProduct] = useState("");
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  const [images, setImages] = useState([]);
  const userID = JSON.parse(localStorage.getItem("auth")).id;
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

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

  const validateImages = (files) => {
    if (!files || files.length === 0) {
      return "Vui lòng chọn ảnh";
    }
    if (files.length > 3) {
      return "Chỉ được chọn tối đa 3 ảnh";
    }
    const validTypes = ["image/jpeg", "image/png", "image/jpg"];
    for (let file of files) {
      if (!validTypes.includes(file.type)) {
        return "Chỉ chấp nhận định dạng JPG, JPEG, PNG";
      }
      if (file.size > 1024 * 1024) {
        return "Mỗi ảnh phải nhỏ hơn 1MB";
      }
    }
    return true;
  };

  const fetchProduct = useCallback(async () => {
    try {
      const response = await get(`${API.PRODUCT_ENDPOINT}/${id}`, config);
      const data = Object.values(response);

      setProduct(data[1]);
    } catch (err) {
      console.error("Đã có lỗi xảy ra", err);
    }
  }, [config, id]);

  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

  useEffect(() => {
    if (product && categories.length > 0 && brands.length > 0) {
      reset({
        name: product.name,
        price: product.price,
        category: product.id_category,
        brand: product.id_brand,
        status: product.status.toString(),
        percent: product.sale,
        company: product.company_profile,
        detail: product.detail,
      });
    }
  }, [product, categories, brands, reset]);

  useEffect(() => {
    const fetchCategoryBrand = async () => {
      try {
        const categoryBrand = await get(`${API.CATEGORYBRAND_ENDPOINT}`);

        setBrands(categoryBrand.brand || []);
        setCategories(categoryBrand.category || []);
      } catch (err) {
        console.error("Lỗi khi fetch Category-Brand:", err);
      }
    };
    fetchCategoryBrand();
  }, []);

  useEffect(() => {
    if (product && product.image) {
      setImages(product.image);
    }
  }, [product]);

  const onSubmit = async (data) => {
    try {
      let formData = new FormData();
      formData.append("name", data.name);
      formData.append("price", data.price);
      formData.append("category", data.category);
      formData.append("brand", data.brand);
      formData.append("status", data.status);
      formData.append("sale", data.percent || "");
      formData.append("company", data.company);
      formData.append("detail", data.detail);
    } catch (err) {}
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Edit Product!</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <div className="form-group">
          <input
            className="form-input"
            placeholder="Name"
            {...register("name", { required: "Vui lòng không để trống" })}
          />
          <p className="form-error">{errors.name?.message}</p>
        </div>

        <div className="form-group">
          <input
            className="form-input"
            placeholder="Price"
            type="number"
            {...register("price", { required: "Vui lòng không để trống" })}
          />
          <p className="form-error">{errors.price?.message}</p>
        </div>

        <div className="form-group">
          <select
            className="form-select"
            {...register("category", { required: "Vui lòng chọn danh mục" })}
          >
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.category}
              </option>
            ))}
          </select>
          <p className="form-error">{errors.category?.message}</p>
        </div>

        <div className="form-group">
          <select
            className="form-select"
            {...register("brand", { required: "Vui lòng chọn danh mục" })}
          >
            {brands.map((brand) => (
              <option key={brand.id} value={brand.id}>
                {brand.brand}
              </option>
            ))}
          </select>
          <p className="form-error">{errors.brand?.message}</p>
        </div>

        <div className="form-group">
          <select
            className="form-select"
            {...register("status")}
            defaultValue="1"
          >
            <option value="1">New</option>
            <option value="0">Sale</option>
          </select>
        </div>

        {watch("status") === "0" && (
          <div className="form-group">
            <input
              className="form-input"
              placeholder="%"
              type="number"
              {...register("percent", { required: "Vui lòng không để trống" })}
            />
            <p className="form-error">{errors.percent?.message}</p>
          </div>
        )}

        <div className="form-group">
          <input
            className="form-input"
            placeholder="Company profile"
            {...register("company", { required: "Vui lòng không để trống" })}
          />
          <p className="form-error">{errors.company?.message}</p>
        </div>

        <div className="form-group">
          <input
            className="form-file"
            type="file"
            accept="image/*"
            multiple
            {...register("images", { validate: validateImages })}
          />
          <p className="form-error">{errors.images?.message}</p>
        </div>

        {images.length > 0 && (
          <div className="old-images-section">
            <ul className="form-file-list">
              {images.map((img, index) => (
                <li key={index} className="old-image-item">
                  <label>
                    <input type="checkbox" value={img} />
                    <img
                      src={`http://localhost:8080/web/laravel8/public/upload/product/${userID}/${img}`}
                      alt={`Ảnh ${index}`}
                      style={{ width: "50px", marginLeft: "8px" }}
                    />
                  </label>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="form-group">
          <textarea
            className="form-textarea"
            id="detail"
            placeholder="Nhập mô tả chi tiết..."
            rows={5}
            {...register("detail", {
              required: "Vui lòng nhập chi tiết sản phẩm",
            })}
          />
          <p className="form-error">{errors.detail?.message}</p>
        </div>

        <button type="submit" className="form-button">
          Update
        </button>
      </form>
    </div>
  );
};
export default EditProductForm;
