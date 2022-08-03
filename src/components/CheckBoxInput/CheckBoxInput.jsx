import { Component } from 'react';
import { InputCheckStyled, LabeleRadio } from 'components';

export class CheckBoxInput extends Component {
  state = {
    agreenment: false,
  };
  changeHandler = () => {
    this.setState(prevState => {
      return {
        agreenment: !prevState.agreenment,
      };
    });
    this.props.onChange();
  };

  render() {
    return (
      <>
        <LabeleRadio>
          <InputCheckStyled
            onChange={this.changeHandler}
            type="checkBox"
            checked={this.state.agreenment}
          />
          I agree
        </LabeleRadio>
      </>
    );
  }
}
