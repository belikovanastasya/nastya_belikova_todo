import './createUser.scss';
import {  createUser } from '../../servises/users'
// export class CreateUser extends Component {
//   render() {
//     return (
//       <div>
//         <p>something</p>
//       </div>
//     )
//   }
// }

export class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.fields = [
      { label: 'email', reg: /^\w+@\w+\.[a-z]{2,}$/ },
      { label: 'first name', reg: /^[^ ]{3,20}$/ },
      { label: 'last name', reg: /^[^ ]{3,20}$/ },
      { label: 'password', reg: /^[^ ]{6,20}$/, secure: true },
      { label: 'repeat password', reg: /^[^ ]{6,20}$/, secure: true },
    ];

    this.state = {success: true};
    this.fields.forEach(field => (this.state[field.label] = { value: '' }));
  }

  setValue = ({ target }) => {
    this.setState({
      [target.name]: { value: target.value }
    });
  }

  getValues() {
    const form = [];
      this.fields.forEach(field => {
      form[field.label] = this.state[field.label].value
    })
    return form;
  }

  validate = (index) => {
    const field = this.fields[index];
    let stateField = this.state[field.label]; 
    // this.state = { email: { value: 'text' } ...}
    // stateField = { value: 'text' }

    if (field.reg.test(stateField.value)) {
      stateField.error = '';
      // { value: 'text', error: '' }
    } else {
      stateField.error = `${field.label} is invalid`;
      // { value: 'text', error: '...' }
    }

    this.setState({
      [field.label]: stateField
    });
  }
  getDisabledState = () => {
    const { excluded, disabled } = this.props
    return this.fields
    .filter(({ label }) => !excluded.includes(label)&& !disabled.includes(label))    
      .some(({ label }) => {
      const { value, error } = this.state[label];
      return !value || error
    })
  }
  save = (event) => {
    event.preventDefault();
    const { state } = this;
    let error = '';
    if (state['password'].value !== state['repeat password'].value) {
      error = 'Pass should be same'
    }
    this.setState = ({ error });
    if (error) return
    const { firstname, lastname, email, password } =
      {
        firstname: state['first name'].value,
        lastname: state['last name'].value,
        email: state['email'].value,
        password: state['password'].value
      };
    createUser(firstname, lastname, email, password)
    .then((data) => this.props.onLogin(data))
    .catch(err => console.log('Can\'t login', err))
  }
  render() {
    const { state, fields } = this;
    const {  excluded = []} = this.props
    return (
      <form
        className="form"
      >
        <ul>{fields
          .filter(({ label }) => !excluded.includes(label))  
          .map(({ label, secure }, index) => {
          const stateField = state[label]; // this.state['email'] = { value: '' }

          return (
            <li key={label}>
              <input
                type={secure ? 'password' : 'text'}
                name={label}
                className={stateField.error ? 'error' : 'correct'}
                placeholder={label.toUpperCase()}
                value={stateField.value}
                onChange={this.setValue}
                onBlur={() => this.validate(index)}
              />
              {stateField.error && <span>{stateField.error}</span>}
            </li>
          );
        })}
        </ul>
        {state.error && <span className="errortext">Error</span>}
        <button type="submit" value="Save" disabled={this.getDisabledState()} onClick={this.save} >Save</button>
      </form>
    );
  }
}
