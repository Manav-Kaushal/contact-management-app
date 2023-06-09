import { Reducer } from "redux";
import { RootState } from "../store";
import {
  Contact,
  ContactAction,
  ADD_CONTACT,
  DELETE_CONTACT,
  UPDATE_CONTACT,
} from "./contactTypes";

interface ContactsState {
  contacts: Contact[];
}

const initialState: ContactsState = {
  contacts: [
    { id: 1, firstName: "Manav", lastName: "Kaushal", status: "inactive" },
    { id: 2, firstName: "Rodney", lastName: "Wilkinson", status: "active" },
    { id: 3, firstName: "Kylie", lastName: "Grant", status: "active" },
  ],
};

const contactsReducer: Reducer<ContactsState, ContactAction> = (
  state = initialState,
  action
) => {
  console.log({ action });
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact.id === action.payload.id ? action.payload : contact
        ),
      };
    default:
      return state;
  }
};

export const selectContacts = (state: RootState) => state.contactsList.contacts;

export default contactsReducer;
