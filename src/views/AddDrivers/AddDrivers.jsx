import React from 'react';
import MaterialTable from 'material-table';

export default function AddStaffMembers() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Name', field: 'name' },
      { title: 'Email', field: 'email' },
      { title: 'Position', field: 'position' },
      { title: 'Area', field: 'area' },
      {
        title: 'Login ID',
        field: 'loginid',
        lookup: { 34: 'comrade', 63: 'hbhashana',18:'mahee' },

      },
    ],
    data: [
      { name: 'Hiruna Kumara', email:'umara@gmail.com', position: 'driver', area: 'Kandy',loginid: 63 },
      {
        name: 'Rukmal Senavirathana',
        email: 'rukmala@gmail.com',
        position: 'driver assistant',
        area :'Colombo',
        loginid: 34,
      },
    ],
  });
 return (
    <MaterialTable
      title="Add Drivers"
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
