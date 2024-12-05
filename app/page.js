'use client'

import React, { useState } from 'react';

const InputRows = () => {
 
  const [rows, setRows] = useState([{ id: 1, value: '' }]);


  const addRow = () => {
    setRows([...rows, { id: rows.length + 1, value: '' }]);
  };

  
  const removeRow = (id) => {
    setRows(rows.filter(row => row.id !== id));
  };

 
  const logValues = () => {
    const values = rows.map(row => row.value);
    console.log(values);
  };

  const handleInputChange = (e, id) => {
    const updatedRows = rows.map(row =>
      row.id === id ? { ...row, value: e.target.value } : row
    );
    setRows(updatedRows);
  };

  return (
    <div>
      
      
      {rows.map((row) => (
        <div key={row.id} style={{ marginBottom: '10px' }}>
          <input
            type="text"
            value={row.value}
            onChange={(e) => handleInputChange(e, row.id)}
            placeholder="Enter Input Here"
            style={{ padding: '8px', fontSize: '14px',color: 'black',marginRight: '30px' }} 
          />
          <button 
           style={{ padding: '8px'}}
            onClick={() => removeRow(row.id)} 
          >
            Remove
          </button>
        </div>
      ))}

      <button onClick={addRow} style={{ marginRight: '30px' }}>
        Add 
      </button>

      <button onClick={logValues}>
        Log Values
      </button>
    </div>
  );
};

export default InputRows;
