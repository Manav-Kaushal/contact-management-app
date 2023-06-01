import React, { useState } from "react";
import Button from "../../components/Button";
import { useDispatch } from "react-redux";
import { Contact } from "../../redux/contact/contactTypes";
import { updateContact } from "../../redux/contact/contactActions";
import Spinner from "../../components/Spinner";

type Props = {
  contactToEdit: Contact | null;
  triggerEditContactModal: () => void;
};

const EditContactForm = ({ contactToEdit, triggerEditContactModal }: Props) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    firstName: contactToEdit!.firstName || "",
    lastName: contactToEdit!.lastName || "",
    status: contactToEdit!.status || "active",
  });

  const handleEdit = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    const updatedContact: Contact = {
      id: contactToEdit!.id,
      ...form,
    };
    // Simulating asynchronous behavior
    const randomValue = Math.floor(Math.random() * 2000) + 1000; // Random value between 1 and 3 seconds
    const submitPromise = new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, randomValue);
    });

    submitPromise.then(() => {
      // Handle successful submission
      setIsSubmitting(false);
      dispatch(updateContact(updatedContact));
      triggerEditContactModal();
      console.log("Contact added successfully");
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" max-w-md mx-auto text-left"
      autoComplete="off"
    >
      <div className="mb-4">
        <label
          htmlFor="firstName"
          className="block text-sm font-medium text-gray-700"
        >
          First Name
        </label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          required
          className="p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full disabled:bg-gray-100"
          value={form.firstName}
          onChange={handleEdit}
          disabled={isSubmitting}
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="lastName"
          className="block text-sm font-medium text-gray-700"
        >
          Last Name
        </label>
        <input
          id="lastName"
          name="lastName"
          type="lastName"
          required
          className="p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full disabled:bg-gray-100"
          value={form.lastName}
          onChange={handleEdit}
          disabled={isSubmitting}
        />
      </div>
      <div className="mb-4 flex items-center justify-between">
        <label
          htmlFor="status"
          className="block text-sm font-medium text-gray-700"
        >
          Status:
        </label>
        <div className="flex items-center space-x-4">
          <label htmlFor="status-active" className="inline-flex items-center">
            <input
              id="status-active"
              name="status"
              type="radio"
              value="active"
              required
              className="mr-1 text-blue-500 focus:ring-blue-500 w-4 h-4"
              checked={form.status === "active"}
              onChange={handleEdit}
              disabled={isSubmitting}
            />
            <span className="text-base">Active</span>
          </label>
          <label htmlFor="status-inactive" className="inline-flex items-center">
            <input
              id="status-inactive"
              name="status"
              type="radio"
              value="inactive"
              required
              className="mr-1 text-blue-500 focus:ring-blue-500 w-4 h-4"
              checked={form.status === "inactive"}
              onChange={handleEdit}
              disabled={isSubmitting}
            />
            <span className="text-base">Inactive</span>
          </label>
        </div>
      </div>
      <div className="flex items-center justify-center space-x-2">
        <Button type="button" size="sm" onClick={triggerEditContactModal}>
          Cancel
        </Button>
        <Button type="submit" size="sm">
          {isSubmitting ? <Spinner /> : "Update"}
        </Button>
      </div>
    </form>
  );
};

export default EditContactForm;
