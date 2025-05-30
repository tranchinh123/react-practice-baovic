import { useForm } from "react-hook-form";
import { parsePath } from "react-router-dom";
const AddProductForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    console.log("Hello");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Create Product!</h2>
      <div>
        <input
          placeholder="Name"
          {...register("name", { required: "Vui lòng không để trống" })}
        />
        <p style={{ color: "red" }}>{errors.name?.message}</p>
      </div>

      <div>
        <input
          placeholder="Price"
          type="number"
          {...register("price", { required: "Vui lòng không để trống" })}
        />
        <p style={{ color: "red" }}>{errors.price?.message}</p>
      </div>

      <div>
        <input
          placeholder="Please choose category"
          {...register("category", { required: "Vui lòng không để trống" })}
        />
        <p style={{ color: "red" }}>{errors.category?.message}</p>
      </div>

      <div>
        <input
          placeholder="Please choose brand"
          {...register("brand", { required: "Vui lòng không để trống" })}
        />
        <p style={{ color: "red" }}>{errors.brand?.message}</p>
      </div>

      <button type="submit">Create</button>
    </form>
  );
};
export default AddProductForm;
