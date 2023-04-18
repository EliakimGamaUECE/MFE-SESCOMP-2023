import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
  },
  number: {
    fontSize: 64,
    fontWeight: 'bold',
    marginBottom: theme.spacing(3),
  },
}));

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default function RandomNumberGenerator() {
  const classes = useStyles();
  const [number, setNumber] = useState(null);

  function handleGenerateNumber() {
    const newNumber = getRandomNumber(1, 100);
    setNumber(newNumber);
  }

  return (
    <div className={classes.root}>
      <Typography variant="h3" align="center" gutterBottom>
        Gerador de Números Aleatórios
      </Typography>
      <Typography variant="h1" align="center" className={classes.number}>
        {number || '-'}
      </Typography>
      <Button variant="contained" color="primary" onClick={handleGenerateNumber}>
        Gerar Número
      </Button>
    </div>
  );
}