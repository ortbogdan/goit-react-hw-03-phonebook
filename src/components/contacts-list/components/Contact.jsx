import React from 'react';
import { Button } from '../..';
import { ContactItem } from './Contact.styled';
import PropTypes from 'prop-types';
export const Contact = ({ id, name, number, onDeleteContact }) => {
  return (
    <ContactItem>
      {name}:<span>{number}</span>
      <Button contactId={id} onDeleteContact={onDeleteContact}>
        Delete
      </Button>
    </ContactItem>
  );
};
Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
