import {
  Contact,
  ADD_CONTACT,
  DELETE_CONTACT,
  UPDATE_CONTACT,
} from "./contactTypes";

export const addContact = (contact: Contact) => {
  return {
    type: ADD_CONTACT,
    payload: contact,
  };
};

export const deleteContact = (id: number) => {
  return {
    type: DELETE_CONTACT,
    payload: id,
  };
};

export const updateContact = (contact: Contact) => {
  return {
    type: UPDATE_CONTACT,
    payload: contact,
  };
};
