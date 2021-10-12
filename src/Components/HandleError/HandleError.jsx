// import s from "./HandleError.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

export default function HandleError({ error }) {
  useEffect(() => {
    if (!error) {
      return null;
    } else {
      return toast.error(`${error}`, {
        theme: "dark",
      });
    }
  }, [error]);

  return (
    <div>
      <ToastContainer />
    </div>
  );
}
