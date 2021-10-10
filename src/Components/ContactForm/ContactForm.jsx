import { v4 as uuidv4 } from "uuid";
import * as contactsOperations from "../../redux/phonebook/operations";
import { getContacts } from "../../redux/phonebook/contacts-selectors.js";
import { useDispatch, useSelector } from "react-redux";
import s from "./ContactForm.module.css";
import Button from "../Button/Button";
import { useState } from "react";

function ContactForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();
  const items = useSelector(getContacts);

  const addContact = (nextContact) => {
    const sameName = items.some(
      (contact) =>
        contact.name.toLocaleLowerCase() ===
        nextContact.name.toLocaleLowerCase()
    );
    if (sameName) {
      alert(`${nextContact.name} is already in contacts`);
    } else {
      return dispatch(contactsOperations.postContacts(nextContact));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addContact({ name, number, id: uuidv4() });
    reset();
  };

  const reset = () => {
    setName("");
    setNumber("");
  };

  return (
    <form className={s.form} onSubmit={onSubmit}>
      <label htmlFor={uuidv4()}>
        Name
        <input
          className={s.input}
          type="text"
          onChange={handleChange}
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>
      <label htmlFor={uuidv4()}>
        Number
        <input
          className={s.input}
          type="tel"
          onChange={handleChange}
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </label>
      <Button type="submit" buttonName="Add contact" />
    </form>
  );
}

export default ContactForm;
