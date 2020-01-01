import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Redirect } from 'react-router-dom';

const axios = require('axios');

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const classes = useStyles();

  function handleUserNameChange(event) {
    setUserName(event.target.value);
    console.log(userName);
  }
  function handlePasswordChange(event) {
    setPassword(event.target.value);
    console.log(password);
  }
  function handleSubmit(event) {
    console.log(userName, password);
    let userData = { username: userName, password: password };
    axios.post('http://localhost:8080/user/signin', userData)
      .then(function (res) {
        console.log(res.status);
        if (res.status === 422) {
          throw new Error('Validation failed');
        }
        if (!(res.status === 200 || res.status === 201)) {
          console.log('Error');
          throw new Error("Could'n validate");
        }
        console.log(res);
        localStorage.setItem('token', res.data.token);
        return res.json();
      })
      .then(resData => {
        console.log(resData);
        localStorage.setItem('token', resData.data.token);
      })
      .catch(function (error) {
        console.log('error');
        // console.log(error);
      });
    event.preventDefault();
  }


  function isAuthenticated() {
    const token = localStorage.getItem('token');
    return token && token.length > 8;

  }
  const isAllreadyAuthenticated = isAuthenticated();
  return (
    isAllreadyAuthenticated ? <Redirect to={{ pathname: '/loggeduser' }} /> : (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
        </Typography>
          <ValidatorForm
            onSubmit={handleSubmit}
            className={classes.form}
          >
            <TextValidator
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="userName"
              label="Username"
              name="userName"
              autoFocus
              validators={['required']}
              value={userName}
              onChange={handleUserNameChange}
            />
            <TextValidator
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={handlePasswordChange}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleSubmit}
            >
              Sign In
          </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
              </Link>
              </Grid>
              <Grid item>
                <Link href="./register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </ValidatorForm>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    )
  );
}
