import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: '#f5f5f5', // cor cinza
    padding: theme.spacing(6),
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '60px', // Altura do footer
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          SESCOMP 2023
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Microfrontends + Single-SPA 
        </Typography>
      </Container>
    </footer>
  );
}