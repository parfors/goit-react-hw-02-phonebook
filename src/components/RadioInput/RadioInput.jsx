// import { Component } from 'react';
// import { InputRadioStyled, LabeleRadio } from 'components';

// export class RadioInput extends Component {
//   state = {
//     color: 'red',
//   };
//   onChange = event => {
//     this.setState({
//       [event.currentTarget.name]: event.currentTarget.value,
//     });
//   };
//   render() {
//     return (
//       <>
//         <LabeleRadio>
//           <InputRadioStyled
//             name="color"
//             type="radio"
//             checked={this.state.color === 'green'}
//             onChange={this.onChange}
//             value="green"
//           />{' '}
//           Green
//         </LabeleRadio>
//         <LabeleRadio>
//           <InputRadioStyled
//             name="color"
//             type="radio"
//             checked={this.state.color === 'red'}
//             onChange={this.onChange}
//             value="red"
//           />
//           Red
//         </LabeleRadio>
//         <LabeleRadio>
//           <InputRadioStyled
//             name="color"
//             type="radio"
//             checked={this.state.color === 'grey'}
//             onChange={this.onChange}
//             value="grey"
//           />
//           Grey
//         </LabeleRadio>
//       </>
//     );
//   }
// }
