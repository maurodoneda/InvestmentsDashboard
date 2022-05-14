import React from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Switch } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },

  appBar: {
    zIndex: theme.zIndex.drawer + 1,

  },
}));

export default function NavBar({theme, setDarkMode, darkMode}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar} color ={ darkMode ? "secondary" : "primary"} >
        <Toolbar>
          <Typography variant="h6" noWrap>
            My InvestmentsApp
         <Switch checked = {!darkMode} onChange ={()=> setDarkMode(!darkMode)}/>
          </Typography>
        </Toolbar>
      </AppBar>
      </ThemeProvider>
    </div>
  );
}