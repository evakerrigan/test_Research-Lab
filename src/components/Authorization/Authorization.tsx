import './Authorization.css';
import { useDispatch, useSelector } from 'react-redux';
import { AuthState, authSlice, selectorAuth } from '../../store/auth';
import { FormEvent } from 'react';
import { Formik, Field, Form, FormikHelpers, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Box, Button, TextField, Typography } from '@mui/material';

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
    <Box pt={19.5}>
      {!isAuth ? (
        <Box >
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
              <Typography component="div" fontSize={24} fontWeight={500} pb={2.5}>Sign In</Typography>
              <Box ></Box>
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
              <Typography component="div" fontSize={12} className="authorization-question">Forgot password?</Typography>

              <Button
                type="submit"
                variant="contained"
                sx={{
                  padding: '10px 55px',
                  fontSize: '16px',
                  borderRadius: '4px',
                  marginTop: '22px',
                  textTransform: 'capitalize',
                  '&:hover': {
                    backgroundColor: 'primary.main',
                    boxShadow: '0px 8px 8px rgba(0, 0, 0, 0.6)',
                  }
                }}
              >
                Sign In
              </Button>

              <div className="input-wrapper">
                <input type="checkbox" id="2" className="authorization-agree" />
                <label htmlFor="remember" className="authorization-label">Remember password</label>
              </div>
            </Form>

          </Formik>

        </Box>
      ) :

        <button onClick={e => handleClick(e)} className="authorization-submit" type="submit">Sign Out</button>

      }
    </Box>
  );
}