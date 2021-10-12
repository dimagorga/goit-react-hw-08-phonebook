import s from "./AuthPage.module.css";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userRegister } from "../../../redux/auth/authOperations";
import TextField from "@mui/material/TextField";
import Button from "../../Button/Button";
import HandleError from "../../HandleError/HandleError";
import { getAuthError } from "../../../redux/auth/authSelectors";

export default function AuthPage() {
  const [dataForm, setDataForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const error = useSelector(getAuthError);

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
        <label className={s.input}>
          <TextField
            size="small"
            required
            id={uuidv4()}
            name="name"
            label="Name"
            onChange={handleChange}
            variant="filled"
          />
        </label>
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
            size="small"
            id={uuidv4()}
            label="Password"
            type="password"
            name="password"
            required
            autoComplete="current-password"
            variant="filled"
          />
        </label>

        <Button type="submit" buttonName="Sign Up" />
      </form>
      <HandleError error={error} />
    </div>
  );
}
