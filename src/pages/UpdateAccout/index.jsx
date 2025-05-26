import { useForm } from "react-hook-form";
import { useEffect } from "react";

const UpdateAccountPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const storedUser = localStorage.getItem("auth");
    if (storedUser) {
      const userData = JSON.parse(storedUser);

      // reset form với dữ liệu user
      reset({
        name: userData.name || "",
        email: userData.email || "",
        phone: userData.phone || "",
        address: userData.address || "",
        avatar: userData.avatar || "",
      });
    }
  }, [reset]);

  const validateAvatar = (fileList) => {
    const file = fileList[0];
    if (!file) return "Vui lòng chọn ảnh đại diện";

    const validTypes = ["image/jpeg", "image/png", "image/gif", "image/webp"];
    if (!validTypes.includes(file.type)) {
      return "File không đúng định dạng hình ảnh";
    }

    if (file.size > 1024 * 1024) {
      return "Dung lượng ảnh phải <= 1MB";
    }

    return true;
  };

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (err) => reject(err);
    });

  const onSubmit = async (data) => {
    // try {
    //   const file = data.avatar[0];
    //   const base64Avatar = await toBase64(file);

    //   const userData = {
    //     name: data.name,
    //     email: data.email,
    //     password: data.password,
    //     confirmPass: data.confirmPass,
    //     phone: data.phone,
    //     address: data.address,
    //     level: 0,
    //     avatar: base64Avatar,
    //   };

    //   await post("register", userData);
    //   reset();
    //   alert("Tạo tài khoản thành công!");
    // } catch (error) {
    //   console.error("Lỗi khi tạo tài khoản:", error);
    //   alert("Đăng ký thất bại!");
    // }
    console.log(data);
  };

  return (
    <div className="col-sm-9">
      <form onSubmit={handleSubmit(onSubmit)} className="register_form">
        <h2>User Update!</h2>

        <div>
          <input
            placeholder="Name"
            {...register("name", { required: "Vui lòng nhập tên" })}
          />
          <p style={{ color: "red" }}>{errors.name?.message}</p>
        </div>

        <div>
          <input
            placeholder="Email"
            {...register("email", {
              required: "Vui lòng nhập email",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Email không hợp lệ",
              },
            })}
          />
          <p style={{ color: "red" }}>{errors.email?.message}</p>
        </div>

        <div>
          <input
            type="password"
            placeholder="Password"
            {...register("password")}
          />
          <p style={{ color: "red" }}>{errors.password?.message}</p>
        </div>

        <div>
          <input
            type="number"
            placeholder="Phone"
            {...register("phone", { required: "Vui lòng nhập số điện thoại" })}
          />
          <p style={{ color: "red" }}>{errors.phone?.message}</p>
        </div>

        <div>
          <input
            placeholder="Address"
            {...register("address", { required: "Vui lòng nhập địa chỉ" })}
          />
          <p style={{ color: "red" }}>{errors.address?.message}</p>
        </div>

        <div>
          <input
            type="file"
            {...register("avatar", {
              validate: validateAvatar,
            })}
          />
          <p style={{ color: "red" }}>{errors.avatar?.message}</p>
        </div>

        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateAccountPage;
