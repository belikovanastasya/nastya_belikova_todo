
import './login.scss';
export const Login = ({ onLogin }) => {
  const submit = (e) => {
    const value = e.target.name.value;
 
    e.preventDefault();
 
    setTimeout(() => {
      onLogin(true, value);
    }, 0);
  };
  return (
    <div className="form_wrap">
      <form onSubmit={submit}>
        <input
          type="text"
          placeholder="Name" 
          name="name"
          required
        />
        <input
          type="password"
          placeholder="Password" 
          required
        />
        <input
          type="submit"
          value="Log in"
        />
        </form>
      </div>  
  );
};
 