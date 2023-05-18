import './Authorization.css';

export const Authorization = () => {
  return (
    <div className="authorization">
      <div className="authorization-title">Sign In</div>
      <form className="authorization-form">
        <input type="text" className="authorization-input" placeholder="Email*" />
        <input type="text" className="authorization-input" placeholder="Password*" />
        <div className="authorization-question">Forgot password?</div>
        <button className="authorization-submit" type="submit">Sign In</button>
        <div className="input-wrapper">
          <input type="checkbox" id="2" className="authorization-agree" />
          <label htmlFor="remember" className="authorization-label">Remember password</label>
        </div>
      </form>
    </div>
  );
}