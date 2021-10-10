import s from "./AuthPage.module.css";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { userRegister } from "../../../redux/auth/authOperations";

import Button from "../../Button/Button";

export default function AuthPage() {
  const [dataForm, setDataForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (dataForm.password.length < 8) {
      alert("Password must be at least 8 characters");
    }
    dispatch(userRegister(dataForm));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setDataForm((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>Sign up</h2>
      <form className={s.form} onSubmit={handleSubmit}>
        <label htmlFor={uuidv4()}>
          Name
          <input
            className={s.input}
            type="text"
            name="name"
            onChange={handleChange}
          />
        </label>
        <label htmlFor={uuidv4()}>
          Email
          <input
            className={s.input}
            type="text"
            name="email"
            onChange={handleChange}
          />
        </label>
        <label htmlFor={uuidv4()}>
          Password
          <input
            className={s.input}
            type="password"
            name="password"
            onChange={handleChange}
            title="Password must be at least 8 characters"
          />
        </label>

        <Button type="submit" buttonName="Sign Up" />
      </form>
    </div>
  );
}
