import { useState, useEffect } from 'react';

import 'modern-normalize';

import { nanoid } from 'nanoid';

import { ContactForm } from 'Components/ContactForm/ContactForm';
import { SearchBox } from 'Components/SearchBox/SearchBox';
import { ContactList } from 'Components/ContactList/ContactList';

const initialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const App = () => {
  const [contactList, setContactList] = useState(() => {
    const savedFeetBack = window.localStorage.getItem('local-Contacts');

    return savedFeetBack !== null ? JSON.parse(savedFeetBack) : initialState;
  });

  const [serchFilter, setSearchFilter] = useState('');

  const filteredContacts = contactList.filter(contactLists =>
    contactLists.name.toLowerCase().includes(serchFilter.toLowerCase())
  );

  const handleSubmit = (values, actions) => {
    setContactList(contactList => [
      ...contactList,
      { id: nanoid(), name: values.name, number: values.number },
    ]);
    actions.resetForm();
  };

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === 'search') {
      setSearchFilter(value);
    }
  };

  const deleteContact = id => {
    const updatedContacts = contactList.filter(contactLists => contactLists.id !== id);
    setContactList(updatedContacts);
    localStorage.setItem('local-Contacts', JSON.stringify(updatedContacts));
  };

  useEffect(() => {
    localStorage.setItem('local-Contacts', JSON.stringify(contactList));
  }, [contactList]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm handleSubmit={handleSubmit} />
      <SearchBox serchFilter={serchFilter} handleChange={handleChange} />
      <ContactList contactList={filteredContacts} onDelete={deleteContact} />
    </div>
  );
};
