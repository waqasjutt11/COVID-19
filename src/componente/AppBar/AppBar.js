import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import logo from '../AppBar/covid19.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    flexGrowColor: "red"
     
  },
  title: {
    flexGrow: 1,
    backgroundColor: "white"
  },
  logo: {
      height: "75px",
      width: "15%",
      marginTop: "0.5%"
     
  }
}));

 function Appbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" >
        <Toolbar>
          <Typography variant="h4" className={classes.title}>
            <img src= {logo} alt="Logo"  className={classes.logo} />
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default Appbar;