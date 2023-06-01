import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/rootReducer";
import { Contact } from "../redux/contact/contactTypes";
import {
  addContact,
  deleteContact,
  updateContact,
} from "../redux/contact/contactActions";

type Props = {};

const Home = (props: Props) => {
  const contacts = useSelector(
    (state: RootState) => state.contactsList.contacts
  );
  const dispatch = useDispatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nameInput = event.currentTarget.elements.namedItem(
      "name"
    ) as HTMLInputElement;
    const emailInput = event.currentTarget.elements.namedItem(
      "email"
    ) as HTMLInputElement;
    const id = Date.now();

    const newContact: Contact = {
      id,
      name: nameInput.value,
      email: emailInput.value,
    };

    dispatch(addContact(newContact));

    nameInput.value = "";
    emailInput.value = "";
  };

  const handleDelete = (id: number) => {
    dispatch(deleteContact(id));
  };

  const handleEdit = (contact: Contact) => {
    const name = prompt("Enter new name:", contact.name);
    const email = prompt("Enter new email:", contact.email);

    if (name && email) {
      const updatedContact: Contact = {
        ...contact,
        name,
        email,
      };

      dispatch(updateContact(updatedContact));
    }
  };

  useEffect(() => {
    console.log({ contacts });
  }, [contacts]);

  return <div>Home</div>;
};

export default Home;
