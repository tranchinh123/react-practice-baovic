import useForm from "../../hooks/useForm";

const UpdateAccountPage = () => {
  const auth = JSON.parse(localStorage.getItem("auth"));

  const initialValues = {
    name: auth.name,
    email: auth.email,
    password: "",
    phone: auth.phone,
    address: auth.address,
    avatar: auth.avatar,
  };

  const validate = (form) => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!form.email) {
      errors.email = "Vui lòng nhập email";
    } else if (!emailRegex.test(form.email)) {
      errors.email = " Email không hợp lệ";
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
  };

  const { errors, form, handleSubmit, handleFile, handleInput } = useForm(
    initialValues,
    validate,
    onSubmit
  );

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

          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
};
export default UpdateAccountPage;
