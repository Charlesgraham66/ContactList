import { useState, useEffect } from 'react';
import ContactList from './components/ContactList.jsx';
import dummyContacts from './components/ContactList.jsx'
import './App.css';


export default function App() {
  // const [contacts, setContacts] = useState(dummyContacts)
  // console.log("Contacts: ", contacts);
  return (
    <>
      <ContactList />
    </>
  );
}
