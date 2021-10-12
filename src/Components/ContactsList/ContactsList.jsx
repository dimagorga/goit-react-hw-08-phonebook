// import { removeContact } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import * as contactsOperations from "../../redux/phonebook/operations";
import {
  getVisibleContacts,
  getIsLoading,
} from "../../redux/phonebook/contacts-selectors.js";
import { useEffect } from "react";
import PropTypes from "prop-types";
import s from "./ContactsList.module.css";
import DeleteIcon from "@mui/icons-material/Delete";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import Button from "../Button/Button";

function ContactsList() {
  const contacts = useSelector(getVisibleContacts);
  const isLoading = useSelector(getIsLoading);
  const dispatch = useDispatch();

  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);

  const handleRemove = (id) => dispatch(contactsOperations.deleteContacts(id));

  return (
    <ul className={s.list}>
      {isLoading ? (
        <Loader
          className={s.loader}
          type="ThreeDots"
          color="#3E9F85"
          height={50}
          width={50}
        />
      ) : (
        contacts.map(({ id, name, number }) => {
          return (
            <li className={s.item} key={id}>
              <p>
                {name}: {number}
              </p>
              <Button
                type="button"
                handleClick={(e) => {
                  handleRemove(e.currentTarget.id);
                }}
                buttonName={<DeleteIcon />}
                id={id}
              />
            </li>
          );
        })
      )}
    </ul>
  );
}
ContactsList.propTypes = {
  contactsList: PropTypes.array,
  handleRemove: PropTypes.func,
};

export default ContactsList;
