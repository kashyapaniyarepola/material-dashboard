// <script src="https://unpkg.com/react-popper/dist/index.umd.js"></script>
import React, { Component } from "react";
// import ReactDOM from 'react-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { mysql } from "react";
import './SelectItems.css';

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
// import { test } from './test.jsx';


const axios = require('axios');
// const mysql = require('mysql');
// const connection = mysql.createPool({
//   host     : 'localhost',
//   user     : 'root',
//   password : '',
//   database : 'supply_chain_mgnt'
// })
{/* <div>
  <select defaultValue={this.state.selectValue}
    onChange={this.handleChange}
  >
    <option value="Orange">Orange</option>
    <option value="Radish">Radish</option>
    <option value="Cherry">Cherry</option>
  </select>
  <p>{message}</p>
</div> */}
// function hiddenButton() {
//   let res = 5;
//   if (res == "N/A") {
//     return (
//       <div>not</div>);
//   }
//   else {
//     return (
//       < div >
//       <h1>test 1</h1>
//       <Dropdown.Menu>
//         <Dropdown.Item value="1">Action</Dropdown.Item>
//         <Dropdown.Item value="2">Another action</Dropdown.Item>
//         <Dropdown.Item value="3">Something else</Dropdown.Item>
//       </Dropdown.Menu>
//   </div >
//     )
// }
// }



// function checkAlert(evt) {
//   if (evt.target.value === "2") {
//     alert('Hello');
//   }
// }
const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
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


export default function SelectItems() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const classes = useStyles();
  // const [setProduct, setAge] = React.useState('');
  const [myValue, setValue] = useState('');
  const [age, setAge] = React.useState('');
  // const inputRef = useRef(null);
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  // React.useEffect(() => {
  //   setLabelWidth(inputLabel.current.offsetWidth);
  // }, []);

  const handleChange = event => {
    setAge(event.target.value);
  };

  function handleSubmit(event) {
    console.log(event);
    // console.log(userName, password);
    let userData = { username: userName, password: password };
    axios.get('http://localhost:8080/product/getProduct')
      .then(function (res) {
        if (res.status === 422) {
          throw new Error('Validation failed');
        }
        if (res.status !== 200 || res.status !== 201) {
          console.log('Error');
          throw new Error("Could'n validate");
        }
        console.log(res);
        return res.json();
      })
      .then(resData => {
        console.log(resData);
        localStorage.setItem('token', resData.token);
      })
      .catch(function (error) {
        console.log('error');
        // console.log(error);
      });
    // event.preventDefault();
  }
  // var mysql = require('mysql');
  // function printOutput(myValue){
  //   // return(
  //       console.log(myValue)


  //   // )
  // }

  // testFunction=(a)=> {
  //   console.log(a);
  // }

  return (

    <div >
      {/* <h1>Hey!</h1> */}
      {/* <div className="selectButtons"> */}
      <div 
      // className="selectButtons"
      >
        <ul className="header">
          <li className="buttonCategoryList">


            <div ></div>
            <FormControl variant="filled" >
              <InputLabel htmlFor="filled-age-native-simple">Age</InputLabel>
              <Select
                native
                // value={state.age}
                // onChange={handleChange('age')}
                inputProps={{
                  name: 'age',
                  id: 'filled-age-native-simple',
                }}
              >
                <option value="" />
                <option value={10}>Ten</option>
                <option value={20}>Twenty</option>
                <option value={30}>Thirty</option>
              </Select>
            </FormControl>
            {/* <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={setProduct}
              // onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl> */}
            {/* <FormControl >
              <Select  */}
              {/* // value={age} 
              // onChange={handleChange} 
              // displayEmpty className={classes.selectEmpty} */}
              {/* > */}
                {/* <MenuItem 
                >
                  Placeholder
          </MenuItem> */}
                {/* <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
              <FormHelperText>Placeholder</FormHelperText>
            </FormControl> */}
            {/* {hiddenButton()} */}
            {/* <SecondButton/> */}
          </li>
          <li>
            <form className={classes.root} noValidate autoComplete="off">
              <TextField id="standard-basic" label="Product" value={myValue} onChange={(e) => setValue(e.target.value)} />
              {/* <TextField id="standard-basic" label="Product" value={myValue} onChange={(e) => setValue(e.target.value)}/> */}
              {/* <TextField id="filled-basic" label="Filled" variant="filled" />
              <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
            </form>
          {/* </li>
          <li> */}
            {/* <div><Button variant="contained" onClick={printOutput(myValue)}>Default</Button></div> */}
            {handleSubmit(myValue)}
          {/* </li> */}
          {/* <li> */}
            {/* {printOutput("asd")} */}
          </li>
        </ul>
        {/* </div> */}
        {/* {console.log(myValue)} */}
        {/* {this.testFunction("asg")} */}
      </div>

    </div>
  )

}

// export default SelectItems;