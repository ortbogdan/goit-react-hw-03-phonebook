import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '..';
import { Contacts } from './ContactList.styled';
export const ContactsList = ({ contacts, onDeleteContact }) => {
  return (
    <Contacts>
      {contacts.map(({ name, id, number }) => (
        <Contact
          key={id}
          name={name}
          number={number}
          id={id}
          onDeleteContact={onDeleteContact}
        ></Contact>
      ))}
    </Contacts>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};
