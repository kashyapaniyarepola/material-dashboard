import React from 'react';
import MaterialTable from 'material-table';

export default function AddStaffMembers() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Name', field: 'name' },
      { title: 'Email', field: 'email' },
      { title: 'Position', field: 'position' },
      {
        title: 'Login ID',
        field: 'loginid',
        lookup: { 34: 'comrade', 63: 'hbhashana',18:'mahee' },

      },
    ],
    data: [
      { name: 'Bhashana Elikewela', email: 'hbhashana@gmail.com', position: 'junior memeber', loginid: 63 },
      {
        name: 'Kashyapa Niyarrepola',
        email: 'kashyapaniyarepola@gmail.com',
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
