import './Authorization.css';
import { useDispatch, useSelector } from 'react-redux';
import { AuthState, authSlice, selectorAuth } from '../../store/auth';
import { FormEvent } from 'react';

export const Authorization = () => {

  const dispatch = useDispatch();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    dispatch(authSlice.actions.setAuth(true));

  };

  const handleClick = (e: FormEvent ) => {
    e.preventDefault();

    dispatch(authSlice.actions.setAuth(false));

  };

  const isAuth = useSelector<AuthState>(selectorAuth);

  return (
    <div className="authorization">
      <div className="authorization-title">Sign In</div>

      <form onSubmit={e => handleSubmit(e)} className="authorization-form">

        <input type="text" className="authorization-input" placeholder="Email*" />
        <input type="text" className="authorization-input" placeholder="Password*" />
        <div className="authorization-question">Forgot password?</div>

        <button className="authorization-submit" type="submit">Sign In</button>

        <div className="input-wrapper">
          <input type="checkbox" id="2" className="authorization-agree" />
          <label htmlFor="remember" className="authorization-label">Remember password</label>
        </div>

      </form>

      <button onClick={e => handleClick(e)} className="authorization-submit" type="submit">Sign Out</button>


    </div>
  );
}