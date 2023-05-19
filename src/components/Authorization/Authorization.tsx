import './Authorization.css';
import { useDispatch, useSelector } from 'react-redux';
import { AuthState, authSlice, selectorAuth } from '../../store/auth';
import { FormEvent } from 'react';
import { Formik, Field, Form, FormikHelpers, ErrorMessage } from 'formik';
import * as Yup from 'yup';

interface Values {
  email: string;
  password: string;
}

const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .min(3, 'Too Short! Minimum 3')
    .max(70, 'Too Long! Maximum 70')
    .email('Invalid email')
    .required('Required'),
  password: Yup.string()
    .min(3, 'Too Short! Minimum 3')
    .max(70, 'Too Long! Maximum 70')
    .required('Required'),
});

export const Authorization = () => {

  const dispatch = useDispatch();

  const validateSubmit = () => {
    dispatch(authSlice.actions.setAuth(true));
  }

  const handleClick = (e: FormEvent) => {
    e.preventDefault();
    dispatch(authSlice.actions.setAuth(false));
  };

  const isAuth = useSelector<AuthState>(selectorAuth);

  return (
    <div className="authorization">
      {!isAuth ? (
        <div>

          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            validationSchema={SignupSchema}
            onSubmit={(
              values: Values,
              { setSubmitting }: FormikHelpers<Values>
            ) => {
              validateSubmit();
              setSubmitting(false);
            }}
          >

            <Form>
              <div className="authorization-title">Sign In</div>
              <Field
                id="email"
                name="email"
                placeholder="Email*"
                type="email"
                className="authorization-input"
              />
              <ErrorMessage
                component="div"
                name="email"
                className="invalid-feedback"
              />
              <Field
                id="password"
                name="password"
                placeholder="Password*"
                className="authorization-input"
              />
              <ErrorMessage
                component="div"
                name="password"
                className="invalid-feedback"
              />
              <div className="authorization-question">Forgot password?</div>

              <button type="submit" className="authorization-submit">Sign In</button>

              <div className="input-wrapper">
                <input type="checkbox" id="2" className="authorization-agree" />
                <label htmlFor="remember" className="authorization-label">Remember password</label>
              </div>
            </Form>

          </Formik>

        </div>
      ) :

        <button onClick={e => handleClick(e)} className="authorization-submit" type="submit">Sign Out</button>

      }
    </div>
  );
}