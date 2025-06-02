// import { useParams } from "react-router-dom";
// import { useState, useEffect, useCallback, useMemo } from "react";
// import { useForm } from "react-hook-form";

// import { get } from "../../../service/api";
// import { API } from "../../../constants/api";

// const EditProductForm = () => {
//   const { id } = useParams();
//   const [product, setProduct] = useState("");
//   console.log(product);

//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors },
//   } = useForm();

//   const token = localStorage.getItem("token");
//   const config = useMemo(
//     () => ({
//       headers: {
//         Authorization: "Bearer " + token,
//         Accept: "application/json",
//       },
//     }),
//     [token]
//   );

//   const fetchProduct = useCallback(async () => {
//     try {
//       const response = await get(`${API.PRODUCT_ENDPOINT}/${id}`, config);
//       const data = Object.values(response);

//       setProduct(data[1]);
//     } catch (err) {
//       console.error("Đã có lỗi xảy ra", err);
//     }
//   }, [config, id]);

//   useEffect(() => {
//     fetchProduct();
//   }, [fetchProduct]);

//   const onSubmit = () => {
//     console.log("abc");
//   };

//   return (
//     <div className="form-container">
//       <h2 className="form-title">Edit Product!</h2>
//       <form onSubmit={handleSubmit(onSubmit)} className="form">
//         <div className="form-group">
//           <input
//             className="form-input"
//             placeholder="Name"
//             {...register("name", { required: "Vui lòng không để trống" })}
//           />
//           <p className="form-error">{errors.name?.message}</p>
//         </div>

//         <div className="form-group">
//           <input
//             className="form-input"
//             placeholder="Price"
//             type="number"
//             {...register("price", { required: "Vui lòng không để trống" })}
//           />
//           <p className="form-error">{errors.price?.message}</p>
//         </div>

//         <div className="form-group">
//           <select
//             className="form-select"
//             {...register("category", { required: "Vui lòng chọn danh mục" })}
//             defaultValue=""
//           >
//             <option value="">Please choose category</option>
//             {categories.map((category) => (
//               <option key={category.id} value={category.id}>
//                 {category.category}
//               </option>
//             ))}
//           </select>
//           <p className="form-error">{errors.category?.message}</p>
//         </div>

//         <div className="form-group">
//           <select
//             className="form-select"
//             {...register("brand", { required: "Vui lòng chọn danh mục" })}
//             defaultValue=""
//           >
//             <option value="">Please choose brand</option>
//             {brands.map((brand) => (
//               <option key={brand.id} value={brand.id}>
//                 {brand.brand}
//               </option>
//             ))}
//           </select>
//           <p className="form-error">{errors.brand?.message}</p>
//         </div>

//         <div className="form-group">
//           <select
//             className="form-select"
//             {...register("status")}
//             defaultValue="1"
//           >
//             <option value="1">New</option>
//             <option value="0">Sale</option>
//           </select>
//         </div>

//         {watch("status") === "0" && (
//           <div className="form-group">
//             <input
//               className="form-input"
//               placeholder="%"
//               type="number"
//               {...register("percent", { required: "Vui lòng không để trống" })}
//             />
//             <p className="form-error">{errors.percent?.message}</p>
//           </div>
//         )}

//         <div className="form-group">
//           <input
//             className="form-input"
//             placeholder="Company profile"
//             {...register("company", { required: "Vui lòng không để trống" })}
//           />
//           <p className="form-error">{errors.company?.message}</p>
//         </div>

//         <div className="form-group">
//           <input
//             className="form-file"
//             type="file"
//             accept="image/*"
//             multiple
//             {...register("images", { validate: validateImages })}
//           />
//           <p className="form-error">{errors.images?.message}</p>
//         </div>

//         <div className="form-group">
//           <textarea
//             className="form-textarea"
//             id="detail"
//             placeholder="Nhập mô tả chi tiết..."
//             rows={5}
//             {...register("detail", {
//               required: "Vui lòng nhập chi tiết sản phẩm",
//             })}
//           />
//           <p className="form-error">{errors.detail?.message}</p>
//         </div>

//         <button type="submit" className="form-button">
//           Create
//         </button>
//       </form>
//     </div>
//   );
// };
// export default EditProductForm;
