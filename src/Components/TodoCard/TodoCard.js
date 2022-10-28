import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Dialog } from '@mui/material';
import './TodoCard.css';

export default function TodoCard(props) {

  const info = props.todoInfo;

  return (
    <div className='card'>
      <div className='container'>
        <h3>{info.name}</h3>
        <h4>{info.status}</h4>
      </div>
    </div>
  );
}
