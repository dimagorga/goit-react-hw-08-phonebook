import s from "./LoginPage.module.css";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { userLogin } from "../../../redux/auth/authOperations";
import Button from "../../Button/Button";
import HandleError from "../../HandleError/HandleError";

export default function LoginPage() {
  const [dataForm, setDataForm] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(userLogin(dataForm));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>Log in</h2>
      <form className={s.form} onSubmit={handleSubmit}>
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
          />
        </label>
        <Button type="submit" buttonName="Login" />
      </form>
      <p className={s.registration}>
        Or sign up here <Link to="/users/signup">Sign Up</Link>{" "}
      </p>
      <HandleError />
    </div>
  );
}
