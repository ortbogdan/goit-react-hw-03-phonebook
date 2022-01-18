import React, { Component } from 'react';
import { Section, ContactsList, ContactForm, Filter } from './components/index';
import { nanoid } from 'nanoid';
const KEY = 'contacts';
export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  componentDidMount() {
    const savedContacts = localStorage.getItem(KEY);
    if (savedContacts) {
      this.setState({contacts: JSON.parse(savedContacts)})
    }
  }
  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem(KEY, JSON.stringify(this.state.contacts))
    }
  }
  generateId = () => nanoid();
  addContact = (name, number) => {
    const { contacts } = this.state;
    const checkContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );
    if (checkContact) {
      alert(`${name} is already in contacts.`);
      return;
    }
    this.setState({
      contacts: [{ name, id: this.generateId(), number }, ...contacts],
    });
  };

  filterContacts = event => {
    this.setState({ filter: event.currentTarget.value });
  };
  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };
  findContacts = () => {
    const { contacts, filter } = this.state;
    const normalizeFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter),
    );

    return filteredContacts;
  };

  render() {
    const findedContacts = this.findContacts();
    return (
      <>
        <Section title={'Phonebook'}>
          <ContactForm
            onSabmit={this.addContact}
            idGenerator={this.generateId}
          ></ContactForm>
        </Section>
        <Section title="Contacts">
          <Filter idGenerator={this.generateId} onChange={this.filterContacts}>
            Find contacts by name
          </Filter>
          <ContactsList
            contacts={findedContacts}
            onDeleteContact={this.deleteContact}
          ></ContactsList>
        </Section>
      </>
    );
  }
}
