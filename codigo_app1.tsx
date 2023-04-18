import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#f5f5f5', // cor cinza
    padding: theme.spacing(3),
  },
  textField: {
    marginBottom: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));

export default function Form() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TextField
        id="outlined-basic"
        label="Nome"
        variant="outlined"
        fullWidth
        className={classes.textField}
      />
      <TextField
        id="outlined-basic"
        label="E-mail"
        variant="outlined"
        fullWidth
        className={classes.textField}
      />
      <TextField
        id="outlined-basic"
        label="Mensagem"
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        className={classes.textField}
      />
      <Button variant="contained" color="primary" className={classes.button}>
        Enviar
      </Button>
    </div>
  );
}