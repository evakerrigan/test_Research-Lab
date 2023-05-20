import { useDispatch, useSelector } from 'react-redux';
import { AuthState, authSlice, selectorAuth } from '../../store/auth';
import { FormEvent } from 'react';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { Box, Button, Checkbox, FormControlLabel, Typography } from '@mui/material';
import { TextField } from 'formik-mui';

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
              <Typography component="div" fontSize={24} fontWeight={500} fontFamily={'Roboto, sans-serif'} pb={2.5}>Sign In</Typography>
              <Box mb={1} >
                <Field
                  component={TextField}
                  id="email"
                  name="email"
                  placeholder="Email*"
                  type="email"
                  sx={{
                    width: '298px',
                    border: '1px solid #414549',
                    borderRadius: '4px',
                  }}
                />
              </Box>
              <Box >
                <Field
                  component={TextField}
                  id="password"
                  name="password"
                  placeholder="Password*"
                  sx={{
                    width: '298px',
                    border: '1px solid #414549',
                    borderRadius: '4px',
                    color: '#000',
                  }}
                />
              </Box>
              <Typography component="div" fontSize={12} pt={1} >Forgot password?</Typography>

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
              <Box sx={{
                paddingTop: '15px',
                fontSize: 5,
              }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="checkedB"
                      color="primary"
                      sx={{
                        fontSize: 5,
                      }}
                    />
                  }
                  label="Remember password"
                  sx={{
                    fontSize: 5,
                  }}
                />
              </Box>
            </Form>

          </Formik>

        </Box>
      ) :

        <button onClick={e => handleClick(e)} className="authorization-submit" type="submit">Sign Out</button>

      }
    </Box>
  );
}