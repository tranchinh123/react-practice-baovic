import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { get, post } from "../../../service/api";
import { API } from "../../../constants/api";
import "../AddProductForm/index.css";

const AddProductForm = () => {
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: "Bearer " + token,
      Accept: "application/json",
    },
  };

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

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

      if (data.images && data.images.length > 0) {
        for (let i = 0; i < data.images.length; i++) {
          formData.append("file[]", data.images[i]);
        }
      }
      const response = await post(
        `${API.CREATEPRODUCT_ENDPOINT}`,
        formData,
        config
      );
      console.log(response);

      reset();
      alert("Tạo sản phẩm thành công!");
    } catch (err) {
      console.error("Lỗi khi tạo product:", err);
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Create Product!</h2>
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
            defaultValue=""
          >
            <option value="">Please choose category</option>
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
            defaultValue=""
          >
            <option value="">Please choose brand</option>
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
          Create
        </button>
      </form>
    </div>
  );
};
export default AddProductForm;
