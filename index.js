import { Command } from "commander";
import {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} from "./contacts.js";

const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const list = await listContacts();
      console.table(list);
      break;

    case "get":
      if (id) {
        const contact = await getContactById(id);
        console.table(contact);
      }
      break;

    case "add":
      if (name && email && phone) {
        await addContact(name, email, phone);
        console.log("contact added");
      }
      break;

    case "remove":
      if (id) {
        await removeContact(id);
        console.log("contact removed");
      }
      break;

    default:
      console.warn(`\x1B[31m ${action} - Unknown action type!`);
  }
}

invokeAction(argv);
