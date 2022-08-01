import {ListStyled,ListItem,ParagraphStyled,ButtonDeleteStyled } from 'components'

export const ContactsList = ({contacts, onBtnDelet }) => {
    return <>
    <ListStyled>
          {contacts.map(({ id, name, number }) => (
            <ListItem key={id}>
              <ParagraphStyled>Name: {name}</ParagraphStyled>
              <ParagraphStyled>Nubmer: {number}</ParagraphStyled>
              <ButtonDeleteStyled onClick={() => onBtnDelet(id) }type='button'>Delete</ButtonDeleteStyled>
            </ListItem> 
          ))}
        </ListStyled>
    </>
}