import { Component } from 'react';
import {Form, SectionStyled, ContactsList, Filter, TitleStyled, RadioInput} from 'components'

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

  deleteContact = (id) => {
    this.setState(prevState => { return {
      contacts: prevState.contacts.filter(el => el.id !== id)}
    })
  }

  formSubmitHandler = (data) => {
    const normilizedData = data.name.toLowerCase()
    if (this.state.contacts.some(el => el.name.toLowerCase() === normilizedData)) {
      alert(`${data.name} is already in contacts`)
      return
    }
    this.setState((prevState) => {
      return { contacts: [data, ...prevState.contacts] }
    })
}

  filterChangeHandler = (event) => {
    this.setState({ filter: event.currentTarget.value})
  }
  
  render() {
    const { contacts, filter } = this.state;
    const normilizedFilter = filter.toLowerCase();
    const visibleContacts = contacts.filter(el => el.name.toLowerCase().includes(normilizedFilter));

    return (
      <>
        <SectionStyled>
          <TitleStyled>Phonebook</TitleStyled>
          <Form onSubmit={this.formSubmitHandler}/>
          <TitleStyled>Contacts</TitleStyled>
          <Filter
            value={filter}
            onChange={ this.filterChangeHandler} />
          <ContactsList
            contacts={visibleContacts}
            onBtnDelet={this.deleteContact} />
        </SectionStyled>
        <RadioInput/>

      </>
    );
  }
}
