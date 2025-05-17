import { useState } from "react";

const useForm = (initialValues, validateForm, onSubmit) => {
  const [form, setForm] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleInput = (e) => {
    const { name, value } = e.target;
    setForm((pre) => ({
      ...pre,
      [name]: value,
    }));
  };

  const handleFile = (e) => {
    const file = e.target.files[0];
    setForm((prev) => ({
      ...prev,
      avatar: file,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm(form);
    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
    } else {
      setErrors({});
      onSubmit(form);
    }
  };

  const resetForm = () => {
    setForm(initialValues);
    setErrors({});
  };

  return {
    form,
    errors,
    handleInput,
    handleFile,
    handleSubmit,
    resetForm,
  };
};
export default useForm;
