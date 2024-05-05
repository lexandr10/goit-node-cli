
import {  addItem, getContactById, listContacts, removeContact  } from "./src/contacts.js";
import { program } from "commander";
const invokeAction = async ({action , id, ...date}) => {
  switch (action) {
    case "list": 
    const contacts = await listContacts();
    return console.log(contacts);
    case "get":
      const contact = await getContactById(id);
      return console.log(contact);
      case "add":
        const addContact = await addItem(date);
        console.log(addContact);
        case "remove":
          const deleteContact = await removeContact(id);
          return console.log(deleteContact);
    default: 
    console.warn("\x1B[31m Unknown action type!");
  }
}
program
.option("-a, --action <type>", "choose action")
.option("-i, --id <type>", "user id")
.option("-n, --name <type>", "user name")
.option("-e, --email <type>", "user email")
.option("-p, --phone <type>", "user phone")


program.parse();
const options = program.opts();
invokeAction(options);