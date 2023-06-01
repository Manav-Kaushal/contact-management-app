import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/rootReducer";
import { Contact } from "../redux/contact/contactTypes";
import {
  addContact,
  deleteContact,
  updateContact,
} from "../redux/contact/contactActions";
import Button from "../components/Button";
import { ContactViews } from "../utils/enums";
import Modal from "../components/Modal";
import AddContactForm from "./Forms/AddContactForm";
import EditContactForm from "./Forms/EditContactForm";
import Table from "../components/Table";

type Props = {};

const Home = (props: Props) => {
  const [addContactModal, setAddContactModal] = useState<boolean>(false);
  const [editContactModal, setEditContactModal] = useState<boolean>(false);
  const [contactToEdit, setContactToEdit] = useState<Contact | null>(null);
  const contacts = useSelector(
    (state: RootState) => state.contactsList.contacts
  );
  const dispatch = useDispatch();

  const triggerAddContactModal = () => {
    setAddContactModal((prevState) => !prevState);
  };

  const triggerEditContactModal = () => {
    setEditContactModal((prevState) => !prevState);
  };

  const onEdit = (contact: Contact) => {
    setContactToEdit(contact);
    triggerEditContactModal();
  };

  const onDelete = (id: number) => {
    dispatch(deleteContact(id));
  };

  return (
    <div className="text-center">
      <div className="flex items-center justify-between mb-2">
        {contacts?.length > 0 && <p>Total Contacts: {contacts.length}</p>}
        <Button size="sm" onClick={triggerAddContactModal}>
          Add Contact
        </Button>
      </div>

      <Table
        columns={["First Name", "Last Name", "Status", "Actions"]}
        data={contacts}
        onEdit={onEdit}
        onDelete={onDelete}
      />

      {/* Add Contact Modal */}
      <Modal
        title="Add Contact"
        isOpen={addContactModal}
        onClose={() => {
          triggerAddContactModal();
        }}
      >
        <AddContactForm triggerAddContactModal={triggerAddContactModal} />
      </Modal>

      {/* Edit Contact Modal */}
      <Modal
        title="Edit Contact"
        isOpen={editContactModal}
        onClose={() => {
          triggerEditContactModal();
        }}
      >
        <EditContactForm
          contactToEdit={contactToEdit}
          triggerEditContactModal={triggerEditContactModal}
        />
      </Modal>
    </div>
  );
};

export default Home;
