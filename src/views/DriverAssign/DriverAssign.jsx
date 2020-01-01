import React from 'react';

import axios from 'axios';

export default class DriverAssign extends React.Component {
  state = {
    drivers: [],
    assistants:[]
  }

  componentDidMount() {
    axios.get('http://localhost:8080/worker/getworkerType')
      .then(res => {
        const drivers = res.data;
        this.setState({ drivers });
      })
      axios.get('http://localhost:8080/worker/getworkerType')
      .then(res => {
        const assistants = res.data;
        this.setState({ assistants });
      })
  }

  render() {
    return (
      <ul>
        <li>
        { this.state.drivers.map(driver => <li>{driver.username}</li>)}
        </li>
        <li>
        { this.state.assistants.map(assistant => <li>{assistant.username}</li>)}
      </li>
    </ul>
    )
  }
}