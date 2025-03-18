const fs = require("fs").promises;
const path = require("path");

const contactsPath = path.join(__dirname, "db/contacts.json");

async function listContacts() {
  try {
    const contacts = await fs.readFile(contactsPath);

    return JSON.parse(contacts);
  } catch (error) {
    throw error;
  }
}

async function getContactById(contactId) {
  const contacts = await listContacts();

  return contacts?.find((contact) => contact.id === contactId) || null;
}

async function removeContact(contactId) {
  const contacts = await listContacts();

  for (const contact of contacts) {
    if (contact.id === contactId) {
      const removedContact = contact;
      const updatedContacts = contacts.filter(
        (contact) => contact.id !== contactId
      );
      try {
        await fs.writeFile(
          contactsPath,
          JSON.stringify(updatedContacts, null, 2)
        );
      } catch (error) {
        throw error;
      }
      return removedContact;
    }
  }
  return null;
}

async function addContact(name, email, phone) {
  const contacts = await listContacts();

  const newContact = {
    id: Date.now().toString(),
    name,
    email,
    phone,
  };

  contacts.push(newContact);

  try {
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  } catch (error) {
    throw error;
  }

  return newContact;
}

module.exports = { listContacts, getContactById, removeContact, addContact };
