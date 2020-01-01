import React from 'react';
import MaterialTable from 'material-table';
const axios = require('axios');

export default function AddStaffMembers() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Name', field: 'name' },
      { title: 'Username', field: 'username' },
      { title: 'Position', field: 'position' },
      {
        title: 'Login ID',
        field: 'loginid',
        lookup: { 34: 'comrade', 63: 'hbhashana',18:'mahee' },

      },
    ],
    data: [
      { name: 'Bhashana Elikewela', username: 'hbhashana', position: 'junior memeber', loginid: 63 },
      {
        name: 'Kashyapa Niyarrepola',
        username: 'kashyapaniyarepola',
        position: 'senior staff member',
        loginid: 34,
      },
    ],
  });
 return (
    <MaterialTable
      title="Add Staff Members"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.push(newData);
                let userData={username : newData.username , password : newData.loginid , city : newData.area}
                axios.post('http://localhost:8080/user/registerWholeSeller', userData)
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState(prevState => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
  );
}
