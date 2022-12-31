// import { info, log } from "./import.js";
// info("info function");
// log("log function");
// const argv = require("yargs").argv;

// TODO: рефакторить
// const { Command } = require("commander");
import { Command } from "commander";
const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

// TODO: рефакторить
function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      // ...
      break;

    case "get":
      // ... id
      break;

    case "add":
      // ... name email phone
      break;

    case "remove":
      // ... id
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
