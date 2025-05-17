import { useState } from "react";
import { useNavigate } from "react-router-dom";

import useForm from "../../../hooks/useForm";
import { post } from "../../../service/api";

const initialValues = {
  email: "",
  password: "",
  level: 0,
};

const LoginForm = () => {
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();

  const validate = (form) => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!form.email) {
      errors.email = "Vui lòng nhập email";
    } else if (!emailRegex.test(form.email)) {
      errors.email = "Email không hợp lệ";
    }

    if (!form.password) {
      errors.password = "Vui lòng nhập password";
    }

    return errors;
  };

  const onSubmit = async (form) => {
    const formData = new FormData();
    formData.append("email", form.email);
    formData.append("password", form.password);
    formData.append("level", form.level);

    try {
      const res = await post("login", formData);

      if (!res.success) {
        // nếu API không báo lỗi HTTP nhưng trả về { success: false }
        setLoginError(res.message || "Email hoặc mật khẩu không đúng");
        return;
      }

      localStorage.setItem("token", res.token);
      localStorage.setItem("auth", JSON.stringify(res.Auth));

      setLoginError("");
      resetForm();
      navigate("/");
    } catch (error) {
      setLoginError(error?.message || "Email hoặc mật khẩu không đúng");
      console.error("Login failed:", error?.message);
    }
  };

  const { errors, form, handleSubmit, handleInput, resetForm } = useForm(
    initialValues,
    validate,
    onSubmit
  );
  return (
    <div className="login_form">
      <h2>Login</h2>
      <div>
        <form onSubmit={handleSubmit}>
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
            {<p style={{ color: "red" }}>{errors.password}</p>}
          </div>
          {loginError && <p style={{ color: "red" }}>{loginError}</p>}
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};
export default LoginForm;
