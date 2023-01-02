import * as fs from "fs/promises";
import { nanoid } from "nanoid";
import path from "path";

const contactsPath = path.resolve("./db/contacts.json");

async function readContacts() {
  try {
    const data = await fs.readFile(contactsPath, "utf8");
    const contacts = JSON.parse(data);
    return contacts;
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

async function writeContacts(contacts) {
  try {
    await fs.writeFile(contactsPath, JSON.stringify(contacts, " ", 2));
  } catch (error) {
    console.log(error);
    process.exit(2);
  }
}

async function listContacts() {
  const contacts = await readContacts();
  return contacts;
}

async function getContactById(contactId) {
  const contacts = await readContacts();
  const contact = await contacts.filter((item) => item.id === contactId);
  return contact;
}

async function removeContact(contactId) {
  const db = await readContacts();
  const updatedDb = db.filter((contact) => contact.id !== contactId);
  await writeContacts(updatedDb);
}

async function addContact(name, email, phone) {
  const id = nanoid(10);
  const contact = { id, name, email, phone };

  const contacts = await readContacts();
  contacts.push(contact);

  await writeContacts(contacts);
}

export { listContacts, getContactById, removeContact, addContact };

// const test = await addContact("user", "user@mail.com", "893483489");
// console.log(test);
// await removeContact("Y82NGiMM19an9KJI2k9eu");
// console.log(await listContacts());
