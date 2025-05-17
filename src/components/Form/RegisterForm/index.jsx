import { post } from "../../../service/api";
import useForm from "../../../hooks/useForm";

const RegisterForm = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPass: "",
    phone: "",
    address: "",
    avatar: null,
    level: 0,
  };

  const validate = (form) => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!form.email) {
      errors.email = "Vui lòng nhập email";
    } else if (!emailRegex.test(form.email)) {
      errors.email = "Email không hợp lệ";
    }

    if (!form.name) {
      errors.name = "Vui lòng nhập tên";
    }

    if (!form.phone) {
      errors.phone = "Vui lòng nhập số điện thoại";
    }
    if (!form.address) {
      errors.address = "Vui lòng nhập địa chỉ";
    }

    if (!form.password) {
      errors.password = "Vui lòng nhập mật khẩu";
    }

    if (!form.confirmPass) {
      errors.confirmPass = "Vui lòng xác nhận mật khẩu";
    } else if (form.confirmPass !== form.password) {
      errors.confirmPass = "Mật khẩu xác nhận không khớp";
    }

    if (!form.avatar) {
      errors.avatar = "Vui lòng chọn ảnh đại diện";
    } else {
      const { name, size, type } = form.avatar;

      const allowedTypes = ["jpg", "jpeg", "png", "gif", "webp"];
      const ext = name.split(".").pop().toLowerCase();

      if (!type.startsWith("image/") || !allowedTypes.includes(ext)) {
        errors.avatar =
          "File không đúng định dạng hình ảnh (chỉ chấp nhận JPG, PNG, GIF, WEBP)";
      } else if (size > 1024 * 1024) {
        errors.avatar = "File quá lớn. Chỉ chấp nhận <= 1MB";
      }
    }

    return errors;
  };

  const onSubmit = async (form) => {
    const toBase64 = (file) =>
      new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result); // chuỗi base64
        reader.onerror = (error) => reject(error);
      });

    try {
      const base64Avatar = await toBase64(form.avatar);

      const userData = {
        name: form.name,
        email: form.email,
        phone: form.phone,
        address: form.address,
        password: form.password,
        level: form.level,
        avatar: base64Avatar, // ảnh base64
      };

      await post("register", userData);
      resetForm();
      console.log("Tạo tài khoản thành công!");
    } catch (error) {
      console.error("Lỗi khi tạo tài khoản:", error);
    }
  };

  const { errors, form, handleSubmit, handleInput, handleFile, resetForm } =
    useForm(initialValues, validate, onSubmit);

  return (
    <div className="register_form">
      <h2>Register</h2>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleInput}
            />
            {<p style={{ color: "red" }}>{errors.name}</p>}
          </div>

          <div>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleInput}
            />
            {<p style={{ color: "red" }}>{errors.email}</p>}
          </div>

          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleInput}
            />
            {<p style={{ color: "red" }}>{errors.pass}</p>}
          </div>

          <div>
            <input
              type="password"
              name="confirmPass"
              placeholder="Confirm password"
              value={form.confirmPass}
              onChange={handleInput}
            />
            {<p style={{ color: "red" }}>{errors.confirmPass}</p>}
          </div>

          <div>
            <input
              type="number"
              name="phone"
              placeholder="Phone"
              value={form.phone}
              onChange={handleInput}
            />
            {<p style={{ color: "red" }}>{errors.phone}</p>}
          </div>

          <div>
            <input
              type="text"
              name="address"
              placeholder="address"
              value={form.address}
              onChange={handleInput}
            />
            {<p style={{ color: "red" }}>{errors.address}</p>}
          </div>

          <div>
            <input type="file" name="avatar" onChange={handleFile} />
            {errors.avatar && <p style={{ color: "red" }}>{errors.avatar}</p>}
          </div>

          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};
export default RegisterForm;
