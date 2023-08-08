/* eslint-disable */
import React from "react"
import ContactRow from './ContactRow';
import { useState, useEffect } from 'react';

const SelectedContact = ({selectedContactId, setSelectedContactId}) => {
    const [contact, setContact] = useState(null);

    useEffect(() => {
        async function fetchContact() {
            try {
                const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`)
                const result = await response.json()
                setContact(result)

            } catch(error) {
                console.error(error)
            } 
        }
        fetchContact()
    }, [selectedContactId])

    
return (

    <>

    <table>
    <thead>
        <tr>
            <th colSpan="6">Contact List</th>
        </tr>
        <tr>
            <td>name</td>
            <td>Email</td>
            <td>Phone</td>
            <td>Website</td>
            <td>Username</td>
            <td>address</td>
        </tr>
    </thead>
    <tbody>
        
        {/* <ContactRow key={contact.id} contact={contact} setSelectedContactId={setSelectedContactId}/> */}
    </tbody>
    <tbody>
        <tr className="list">
            <td>{contact?.name}</td>
            <td>{contact?.email}</td>
            <td>{contact?.phone}</td>
            <td>{contact?.website}</td>
            <td>{contact?.username}</td>
            <td>{contact?.address.city}</td>
        </tr>
    </tbody>
    </table>
        <button onClick={() => setSelectedContactId(null)}>Back to List</button>

    </>
)
}

export default SelectedContact


