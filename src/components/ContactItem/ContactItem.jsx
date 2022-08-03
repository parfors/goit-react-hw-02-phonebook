import { ParagraphStyled, ButtonDeleteStyled, ListItem } from 'components';
import PropTypes from 'prop-types';

export const ContactItem = ({ name, number, onBtnDelet }) => {
  return (
    <>
      <ListItem>
        <ParagraphStyled>Name: {name}</ParagraphStyled>
        <ParagraphStyled>Nubmer: {number}</ParagraphStyled>
        <ButtonDeleteStyled onClick={onBtnDelet} type="button">
          Delete
        </ButtonDeleteStyled>
      </ListItem>
    </>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  onBtnDelet: PropTypes.func,
};
