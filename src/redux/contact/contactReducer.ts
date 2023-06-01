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
  contacts: [],
};

const contactsReducer: Reducer<ContactsState, ContactAction> = (
  state = initialState,
  action
) => {
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
