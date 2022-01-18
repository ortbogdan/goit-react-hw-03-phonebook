import React, { Component } from 'react';
import { Button } from '..';
import { Form, Input } from './ContactForm.styled';
import PropTypes from 'prop-types';
export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  handleSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;
    this.props.onSabmit(name, number);
    this.reset();
  };
  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };
  reset = () => {
    this.setState({ name: '', number: '' });
  };
  render() {
    const { idGenerator } = this.props;
    const nameInputId = idGenerator();
    const numberInputId = idGenerator();
    const { name, number } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <label htmlFor={nameInputId}>Name</label>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          id={nameInputId}
          onChange={this.handleChange}
          value={name}
        />

        <label htmlFor={numberInputId}>Number</label>
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          id={numberInputId}
          onChange={this.handleChange}
          value={number}
        />
        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}

ContactForm.propTypes = {
  onSabmit: PropTypes.func.isRequired,
  idGenerator: PropTypes.func.isRequired,
};
