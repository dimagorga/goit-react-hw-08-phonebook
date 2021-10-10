import * as contactsApi from "../../api/contactsApi";
import * as actions from "./actions";

export const fetchContacts = () => async (dispatch) => {
  dispatch(actions.fetchContactsRequest());
  try {
    const contacts = await contactsApi.fetchContacts();
    dispatch(actions.fetchContactsSuccess(contacts));
  } catch (error) {
    dispatch(actions.fetchContactsError(error));
  }
};

export const postContacts = (contact) => async (dispatch) => {
  dispatch(actions.addContactsRequest());
  try {
    const newContact = await contactsApi.postContact(contact);
    dispatch(actions.addContactsSuccess(newContact));
  } catch (error) {
    dispatch(actions.addContactsError(error));
  }
};

export const deleteContacts = (id) => async (dispatch) => {
  dispatch(actions.deleteContactsRequest());
  try {
    await contactsApi.deleteContact(id);
    dispatch(actions.deleteContactsSuccess(id));
  } catch (error) {
    dispatch(actions.deleteContactsError(error));
  }
};
