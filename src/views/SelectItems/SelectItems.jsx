// <script src="https://unpkg.com/react-popper/dist/index.umd.js"></script>
import React, { Component } from "react";
// import ReactDOM from 'react-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
//import { Dropdown } from 'react-bootstrap';
// import { mysql } from "react";
import './SelectItems.css';

//import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
//import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
//import NativeSelect from '@material-ui/core/NativeSelect';
// const mysql = require('mysql');
// const connection = mysql.createPool({
//   host     : 'localhost',
//   user     : 'root',
//   password : '',
//   database : 'supply_chain_mgnt'
// });

// function connectDatabase() {
//   return (
//     <div>


//     </div>
//   );
// }
// function secondButton() {
//   return (
//     <Dropdown.Menu>
//       <Dropdown.Item value="1">Action</Dropdown.Item>
//       <Dropdown.Item value="2">Another action</Dropdown.Item>
//       <Dropdown.Item value="3">Something else</Dropdown.Item>
//     </Dropdown.Menu>

//   )
// }


/* <div>
  <select defaultValue={this.state.selectValue}
    onChange={this.handleChange}
  >
    <option value="Orange">Orange</option>
    <option value="Radish">Radish</option>
    <option value="Cherry">Cherry</option>
  </select>
  <p>{message}</p>
</div> */
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


class SelectItems extends Component {
  // var mysql = require('mysql');
  submit = (event) => {
    console.log('Selected value:', event.target.value);
  }
  render() {
    return (
      <div ><h1>Hey!</h1>
        <div className="selectButtons">
          {/* <div > */}
          <ul className="header">
            <li className="buttonCategoryList">
              {/* <Dropdown className="buttonCategory" id="dropdown" ref={(input) => this.menu = input}>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Item Category
        </Dropdown.Toggle>
              </Dropdown> */}
              {/* <select id = "dropdown" ref = {(input)=> this.menu = input}> */}
              <select id="dropdown" className="abc" onChange={this.submit.run}  >
                <option value="N/A" >N/A</option>
                <option value="1">1</option>
                <option value="2" >2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>

              {/* <Dropdown.Menu>
                  <Dropdown.Item value="1">Action</Dropdown.Item>
                  <Dropdown.Item value="2">Another action</Dropdown.Item>
                  <Dropdown.Item value="3">Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown> */}
            </li>
            {/* {hiddenButton(this.menu.value)}; */}
            {/* </div> */}
            {/* <div> */}
            {/* <li className="buttonItemsList">
              <Dropdown id="buttonItems">
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Item
        </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>

              </Dropdown>
            </li> */}
            <li>
              <div className="secBtn"></div>
              {/* <FormControl variant="filled" className={classes.formControl}> */}
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
              {/* {hiddenButton()} */}
              {/* <SecondButton/> */}
            </li>

          </ul>
          {/* </div> */}
        </div>
      </div>
    )
  }
}

export default SelectItems;