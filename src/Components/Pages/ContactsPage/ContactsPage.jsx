import ContactForm from "../../ContactForm/ContactForm";
import ContactsList from "../../ContactsList/ContactsList";
import Filter from "../../Filter/Filter";
import HandleError from "../../HandleError/HandleError";
import s from "./ContactsPage.module.css";

export default function ContactsPage() {
  return (
    <div className={s.container}>
      <h1 className={s.mainTitle}>Phonebook</h1>
      <ContactForm />
      <h2 className={s.contactsTitle}>Contacts</h2>
      <Filter />
      <ContactsList />
      <HandleError />
    </div>
  );
}
