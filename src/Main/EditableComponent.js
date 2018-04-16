export class EditableComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVisible: false,
      spanVisible: true,
      spanValue: 'Click to edit'
    };
  }
  edit = () => {
    this.setState({ spanVisible: false, inputVisible: true });
  }
  onBlur = (e) => {
    this.setState({ spanVisible: true, inputVisible: false, spanValue: e.target.value });
    this.props.onLoose(e.target.value);
  }
  render() {
    return (
      <div className="editBox" >
        {this.state.spanVisible && <span onClick={this.edit}>{this.state.spanValue}</span>}
        {this.state.inputVisible && <input type="text" onBlur={this.onBlur} />}
      </div>
    );
  }
}
