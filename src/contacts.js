import fs from 'fs/promises';
import path from 'path';
import { nanoid } from 'nanoid';

 const pathContacts = path.resolve("src","db", "contacts.json");

const update = contacts => fs.writeFile(pathContacts, JSON.stringify(contacts, null, 2));


export const listContacts = async () => {
    const data = await fs.readFile(pathContacts);
    return JSON.parse(data);
}

export const getContactById = async (id) => {
    const contacts = await listContacts();
    const result = contacts.find(item => item.id === id);
    return result || null;
}

export const addItem = async (data) => {
const contacts = await listContacts();
const newContact = {
    id: nanoid(),
    ...data,
}
contacts.push(newContact);
await update(contacts);
return newContact;
}

export const removeContact = async(id) => {
    const contacts = await listContacts();
    const index = contacts.findIndex(item => item.id === id);
    if(index === -1) {
  return null;
    }
    
    const [result] = contacts.splice(index, 1);
    await update(contacts);
    return result;

}

