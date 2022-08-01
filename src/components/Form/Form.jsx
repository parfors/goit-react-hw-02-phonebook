import { Component } from "react";
import { nanoid } from 'nanoid';
import {FormStyled,LabelStyled,ButtonStyled, InputStyled} from 'components'

export class Form extends Component {
    state = {
    name: '',
    number: '',
    }
    
      hendleChange = (event) => {
    const { value, name } = event.currentTarget;
    this.setState({ [name]: value });
    }
    
    createContact = () => {
        const contact = this.state;
        contact.id = nanoid();
        return contact
    }

    hendleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.createContact())
        this.reset();
    }

      reset = () => {
    this.setState({
        name: '',
        number: '',
    })
  }

    render() {
        const { name, number } = this.state;
        return <>
        <FormStyled onSubmit={this.hendleSubmit}>
          <LabelStyled>
            Name
            <InputStyled
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.hendleChange}
              value={name}
            ></InputStyled>
          </LabelStyled>
          <LabelStyled>
            Tel
            <InputStyled
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.hendleChange}
              value={number}
            ></InputStyled>
          </LabelStyled>
          <ButtonStyled type="submit">Add contact</ButtonStyled>
        </FormStyled>
        </>
    }
}