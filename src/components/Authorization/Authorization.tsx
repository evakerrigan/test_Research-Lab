import { useDispatch, useSelector } from 'react-redux';
import { AuthState, authSlice, selectorAuth } from '../../store/auth';
import { FormEvent } from 'react';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { Avatar, Box, Button, Checkbox, FormControlLabel, Link, Typography } from '@mui/material';
import { TextField } from 'formik-mui';
import AvatarImage from '../../assets/image/avatar.png';
import ArrowIcon from '../../assets/icon/icon.svg';

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
              values;
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
              }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="checkedB"
                      color="primary"
                    />
                  }
                  label="Remember password"
                />
              </Box>
            </Form>

          </Formik>

        </Box>

      ) : (

        <Box >

          <Box
            pt={14.5}
            pl={3}
            sx={{
              display: 'flex',
            }}>
            <Avatar variant="square" src={AvatarImage} sx={{
              width: '50px',
              height: '50px',
            }} />
            <Link href="#" color="#fff" underline="none" pl={3} sx={{}}>
              <Typography
                color='primary.main'
                fontSize={24}
                fontWeight={500}
                fontFamily={'Roboto, sans-serif'}
                sx={{

                }}
              >
                User/1
              </Typography>
            </Link>
          </Box>

          <Box sx={{
            position: 'relative',
            marginLeft: '90px',
            marginTop: '3px',
          }}>
            <Avatar variant="square" src={ArrowIcon} sx={{
              position: 'absolute',
              top: '13px',
              left: '5px',
              width: '12px',
              height: '12px',
            }} />
            <Button
              onClick={e => handleClick(e)}
              type="submit"
              sx={{
                textTransform: 'capitalize',
                fontSize: '14px',
                fontWeight: '300',
                paddingLeft: '23px',
              }}
            >
              Logout
            </Button>

          </Box>

        </Box>
      )
      }
    </Box>
  );
}