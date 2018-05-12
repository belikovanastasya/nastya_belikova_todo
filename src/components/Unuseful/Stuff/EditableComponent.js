// import PropTypes from 'prop-types';

// export class EditableComponent extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       spanVisible: true,
//       spanValue: 'Click to edit'
//     };
    
//   }
//   edit = () => {
//     this.setState({ spanVisible: false });
//   }
//   onBlur = (e) => {
//     this.setState({ spanVisible: true, spanValue: e.target.value });
//     this.props.onLoose(e.target.value);
//   }
//   render() {
//     return (
//       <div className="editBox" >
//         {this.state.spanVisible ? <span onClick={this.edit}>{this.state.spanValue}</span>
//         : <input type="text" onBlur={this.onBlur} /> }
//       </div>
//     );
//   }
// }
// EditableComponent.propTypes = {
//   onLoose: PropTypes.func
// };
// EditableComponent.defaultProps = {
//   onLoose: _ => _,
// };
