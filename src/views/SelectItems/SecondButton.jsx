import React, { Component } from "react";
// import ReactDOM from 'react-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown } from 'react-bootstrap';

class SecondButton extends Component {
  render() {
    return (
      < div >
        {/* <h1>test 1</h1> */}
        {/* <Dropdown.Menu>
        <Dropdown.Item value="1">Action</Dropdown.Item>
        <Dropdown.Item value="2">Another action</Dropdown.Item>
        <Dropdown.Item value="3">Something else</Dropdown.Item>
      </Dropdown.Menu> */}

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
      </div >

    );
  }
}

export default SecondButton;