import React,{useState} from 'react';
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
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
//import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select'
//import { Redirect } from 'react-router-dom';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

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
    marginTop: theme.spacing(3),
    
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    width: '100%',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));


export default function Register(props) {
  const [username, setUserName] = useState('');
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [nic, setNIC] = useState('');
  const [custype, setcustype] = useState('');
  const [streetname, setStreetName] = useState('');
  const [streetno, setStreetNo] = useState('');
  const [city, setCity] = useState('');
  const [phonenumber, setPhoneNumber] = useState('');
  const [repassword, setRePassword] = useState('');
  const classes = useStyles();

  function handleUserNameChange(event){
    setUserName(event.target.value);
  }
  function handleFirstNameChange(event){
    setFirstName(event.target.value);
  }
  function handleLastNameChange(event){
    setLastName(event.target.value);
  }
  function  handleCustomerType(event){
    setcustype(event.target.value);
  }
  function  handlePhoneNumberChange(event){
    setPhoneNumber(event.target.value);
  }
  function  handleCityChange(event){
    setCity(event.target.value);
  }
  function  handleStreetNameChange(event){
    setStreetName(event.target.value);
  }
  function  handleStreetNoChange(event){
    setStreetNo(event.target.value);
  }
  function handleNICChange(event){
    setNIC(event.target.value);
  }
  function handlePasswordChange(event){
    setPassword(event.target.value);
  }
  function handleRePasswordChange(event){
    setRePassword(event.target.value);
  }
  function handleSubmit(event)  {
    if (handlePassword(event)){
      let userData = { username:username,firstname: firstname, lastname: lastname , password: password, nic: nic , city: city, streetname: streetname, streetno: streetno, phonenumber: phonenumber};
      if (custype==="Wholeseller"){
        axios.post('http://localhost:8080/user/registerWholeSeller', userData)
        .then(function (res) {

          localStorage.setItem('token', res.data.token);
          props.history.push('/loggeduser');
        })
      }
      else if (custype==="registerRetailer"){
        axios.post('http://localhost:8080/user/registerWholeSeller', userData)
        .then(function (res) {

          localStorage.setItem('token', res.data.token);
          props.history.push('/loggeduser');
        })
      }
      else if (custype==="Retailer"){
        axios.post('http://localhost:8080/user/registerRetailer', userData)
        .then(function (res) {

          localStorage.setItem('token', res.data.token);
          props.history.push('/loggeduser');
        })
      }
      else if (custype==="EndCustomer"){
        axios.post('http://localhost:8080/user/registerEndCustomer', userData)
        .then(function (res) {

          localStorage.setItem('token', res.data.token);
          props.history.push('/loggeduser');
        })
      }
      else{
        axios.post('http://localhost:8080/user/register', userData)
        .then(function (res) {

          localStorage.setItem('token', res.data.token);
          props.history.push('/loggeduser');
        })
      }
      console.log(userData);
      //props.history.push('/loggeduser');
      event.preventDefault();
    }
    else {
      alert('password didnt match');
    }
    
  }
  function handlePassword(event){
    if (password===repassword){
      return true;
    }
    else{
      return false;
    }
  }
  

  return (
    <Container component="main" maxWidth="xs" >
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <ValidatorForm
                onSubmit={handleSubmit}
                className={classes.form}
            >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextValidator
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                validators={['required']}
                value={firstname} 
                onChange={handleFirstNameChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextValidator
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                validators={['required']}
                value={lastname}
                onChange={handleLastNameChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextValidator
                variant="outlined"
                required
                fullWidth
                id="nic"
                label="NIC"
                name="nic"
                validators={['required']}
                value={nic}
                onChange={handleNICChange}
              />
            </Grid>
            <Grid item xs={12} >
              <TextValidator
                variant="outlined"
                required
                fullWidth
                id="city"
                label="City"
                name="city"
                validators={['required']}
                value={city}
                onChange={handleCityChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextValidator
                variant="outlined"
                required
                fullWidth
                id="streetno"
                label="Street Number"
                name="streetno"
                validators={['required']}
                value={streetno}
                onChange={handleStreetNoChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextValidator
                variant="outlined"
                required
                fullWidth
                id="streetname"
                label="Street Name"
                name="streetname"
                validators={['required']}
                value={streetname}
                onChange={handleStreetNameChange}
              />
            </Grid>

            <Grid item xs={12}>
              <TextValidator
                variant="outlined"
                required
                fullWidth
                id="phonenumber"
                label="Phone Number"
                name="phonenumber"
                validators={['required']}
                value={phonenumber}
                onChange={handlePhoneNumberChange}
              />
            </Grid>
            <Grid item xs={12} >
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">User Type</InputLabel>
                <Select
                  variant="outlined"
                  required
                  fullWidth
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={custype}
                  validators={['required']}
                  onChange={handleCustomerType}
                >
                  <MenuItem value={'Wholeseller'}>Wholeseller</MenuItem>
                  <MenuItem value={'Retailer'}>Retailer</MenuItem>
                  <MenuItem value={'EndCustomer'}>EndCustomer</MenuItem>
                </Select>
            </FormControl>
            </Grid>
            <Grid item xs={12} >
              <TextValidator
                variant="outlined"
                required
                fullWidth
                id="username"
                label="UserName"
                name="username"
                validators={['required']}
                value={username}
                onChange={handleUserNameChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextValidator
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                validators={['required','matchRegexp:^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>])[0-9a-zA-Z].{8,}$']}
                errorMessages={['Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters']}
                value={password}
                onChange={handlePasswordChange}
              />
            </Grid>           
            <Grid item xs={12} sm={6}>
              <TextValidator
                variant="outlined"
                required
                fullWidth
                name="re-password"
                label="Re-Password"
                type="password"
                id="repassword"
                validators={['required']} 
                autoComplete="current-password"
                value={repassword}
                onChange={handleRePasswordChange}
              />
            </Grid>

            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" required/>}
                label="Agree to our terms and conditions."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="./login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </ValidatorForm>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
