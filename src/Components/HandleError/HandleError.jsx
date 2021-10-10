import { useSelector } from "react-redux";
import { getHandleError } from "../../redux/phonebook/contacts-selectors.js";
import s from "./HandleError.module.css";

export default function HandleError() {
  const error = useSelector(getHandleError);
  if (!error) return null;
  return <h2 className={s.errorMessage}>{error}</h2>;
}
