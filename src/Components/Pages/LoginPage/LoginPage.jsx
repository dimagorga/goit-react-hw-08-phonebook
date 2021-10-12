import s from "./LoginPage.module.css";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../../redux/auth/authOperations";
import Button from "../../Button/Button";
import TextField from "@mui/material/TextField";
import { getAuthError } from "../../../redux/auth/authSelectors";
import HandleError from "../../HandleError/HandleError";

export default function LoginPage() {
  const [dataForm, setDataForm] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const error = useSelector(getAuthError);

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
        <label className={s.input}>
          <TextField
            size="small"
            required
            id={uuidv4()}
            name="email"
            label="Email"
            onChange={handleChange}
            variant="filled"
          />
        </label>
        <label className={s.input}>
          <TextField
            onChange={handleChange}
            required
            size="small"
            id={uuidv4()}
            label="Password"
            type="password"
            name="password"
            autoComplete="current-password"
            variant="filled"
          />
        </label>
        <Button type="submit" buttonName="Login" />
      </form>
      <p className={s.registration}>
        Or sign up here <Link to="/users/signup">Sign Up</Link>{" "}
      </p>
      <HandleError error={error} />
    </div>
  );
}
