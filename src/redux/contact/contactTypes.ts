// src/types.ts
export interface Contact {
  id: number;
  firstName: string;
  lastName: string;
  status: "active" | "inactive" | string;
}

export const ADD_CONTACT = "ADD_CONTACT";
export const DELETE_CONTACT = "DELETE_CONTACT";
export const UPDATE_CONTACT = "UPDATE_CONTACT";

interface AddContactAction {
  type: typeof ADD_CONTACT;
  payload: Contact;
}

interface DeleteContactAction {
  type: typeof DELETE_CONTACT;
  payload: number;
}

interface UpdateContactAction {
  type: typeof UPDATE_CONTACT;
  payload: Contact;
}

export type ContactAction =
  | AddContactAction
  | DeleteContactAction
  | UpdateContactAction;
