import {
  TitleStyled,
  FormStyled,
  LabelStyled,
  InputStyled,
  ButtonStyled,
  SectionStyled,
  ListStyled,
  ListItem,
  ParagraphStyled,
} from 'components';

export const Phonebook = ({ contacts, onFilter }) => {
  return (
    <>
      <SectionStyled>
        <TitleStyled>Phonebook</TitleStyled>
        <FormStyled>
          <LabelStyled>
            Name
            <InputStyled
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            ></InputStyled>
          </LabelStyled>
          <LabelStyled>
            {' '}
            Tel
            <InputStyled
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            ></InputStyled>
          </LabelStyled>
          <ButtonStyled type="submit">Add contact</ButtonStyled>
        </FormStyled>
        <TitleStyled>Contacts</TitleStyled>
        <ParagraphStyled>Find contact by name</ParagraphStyled>
        <InputStyled onChange={onFilter}></InputStyled>
        <ListStyled>
          {' '}
          {contacts.map(({ id, name, number }) => (
            <ListItem key={id}>
              Name: {name} Nubmer: {number}
            </ListItem>
          ))}
        </ListStyled>
      </SectionStyled>
    </>
  );
};
