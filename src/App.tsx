import React, { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { Contact } from "./redux/contact/contactTypes";
import {
  addContact,
  deleteContact,
  updateContact,
} from "./redux/contact/contactActions";

function App() {
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

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Contact App</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Add Contact
        </button>
      </form>
      <ul className="mt-8 space-y-4">
        {contacts?.map((contact: any) => (
          <li key={contact.id} className="flex justify-between items-center">
            <div>
              <span className="font-medium">{contact.name}</span> -{" "}
              {contact.email}
            </div>
            <div>
              <button
                className="mr-2 text-blue-500 hover:text-blue-600 focus:outline-none"
                onClick={() => handleEdit(contact)}
              >
                Edit
              </button>
              <button
                className="text-red-500 hover:text-red-600 focus:outline-none"
                onClick={() => handleDelete(contact.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
