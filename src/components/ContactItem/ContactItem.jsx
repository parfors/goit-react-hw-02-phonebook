import {
  ParagraphStyled,
  ButtonDeleteStyled,
  ListItem,
  CheckBoxInput,
} from 'components';
import PropTypes from 'prop-types';
import { Component } from 'react';

export class ContactItem extends Component {
  state = {
    agreenment: false,
  };

  onChangeBox = data => {
    this.setState({
      agreenment: !this.state.agreenment,
    });
  };

  render() {
    const { name, number, onBtnDelet } = this.props;
    return (
      <>
        <ListItem>
          <ParagraphStyled>Name: {name}</ParagraphStyled>
          <ParagraphStyled>Nubmer: {number}</ParagraphStyled>
          <CheckBoxInput onChange={this.onChangeBox} />
          <ButtonDeleteStyled
            disabled={!this.state.agreenment}
            onClick={onBtnDelet}
            type="button"
          >
            Delete
          </ButtonDeleteStyled>
        </ListItem>
      </>
    );
  }
}

ContactItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  onBtnDelet: PropTypes.func,
};
