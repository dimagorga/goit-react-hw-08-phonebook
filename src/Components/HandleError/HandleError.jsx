import s from "./HandleError.module.css";

export default function HandleError({ error }) {
  if (!error) return null;
  return <h2 className={s.errorMessage}>{error}</h2>;
}
