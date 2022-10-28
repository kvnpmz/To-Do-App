import React, { useState } from 'react';

export default function IntegrationPanel(prop) {
  const options = prop.options.map(option => 
    <li key={option.id}>
        <div>
            <h3>{option.name}</h3>
        </div>
    </li>);

  return (
    <div>
        <h2>Select Integration</h2>
        <ul>
            {options}
        </ul>
    </div>
  );
}