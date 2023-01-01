import * as fs from "fs/promises";
import path from "path";

const contactsPath = path.resolve("./db/contacts.json");

//get contacts JSON format from db
async function readConcats() {
  const data = await fs.readFile(contactsPath, "utf8");
  const contacts = JSON.parse(data);
  return contacts;
}

async function listContacts() {
  const db = await readConcats();
  return db;
}

async function getContactById(contactId) {
  fs.readFile(contactsPath, "utf8")
    .then((data) => {
      const contacts = JSON.parse(data);
      // console.log(data);
      contacts.map((contact) => {
        if (contactId === Number(contact.id)) {
          console.log(contact);
          return contact;
        }
      });
    })
    .catch((error) => console.error(error));
  return null;
}

async function removeContact(contactId) {
  // ...твой код
}

async function addContact(name, email, phone) {
  // ...твой код
}

export { listContacts, getContactById, removeContact, addContact };
