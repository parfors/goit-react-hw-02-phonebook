import { ListStyled, ContactItem } from 'components';
import PropTypes from 'prop-types';

export const ContactsList = ({ contacts, onBtnDelet }) => {
  return (
    <>
      <ListStyled>
        {contacts.map(({ id, name, number }) => (
          <ContactItem
            key={id}
            name={name}
            number={number}
            onBtnDelet={() => onBtnDelet(id)}
          />
        ))}
      </ListStyled>
    </>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.array,
  onBtnDelet: PropTypes.func,
};
