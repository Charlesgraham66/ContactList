import React from 'react';
import {useState, useEffect} from 'react';
import ContactRow from './ContactRow.jsx'

export default function SelectedContact({selectedContactId, setSelectedContactId}) {
    const [contact, setContact] = useState([]);
    console.log(contact);
    useEffect(()=>{
        async function fetchContact() {
          try {
            const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
            );
            const result = await response.json();
            setContact(result);
          } catch (error) {
            console.error(error);
          }
        }
        fetchContact()
      },[]);
      return (
        <>
        <table>
        <thead>
          <tr>
            <th colSpan="3">Selected User</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Phone</td>
          </tr>
        <ContactRow key={contact.id} contact={contact} setSelectedContactId={setSelectedContactId}/>
        </tbody>
      </table>
    <button onClick={() => {
        setSelectedContactId(null)
        }}>BACK</button>
        </>
    );
} 