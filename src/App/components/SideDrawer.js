import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import TimelineIcon from '@material-ui/icons/Timeline';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import PieChartIcon from '@material-ui/icons/PieChart';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
}));

export default function SideDrawer({toggle,setToggle}) {
  const classes = useStyles();
  

  

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
        
        <Divider />
          <List>
         
         
              <ListItem button>
                <ListItemIcon><AccountBalanceIcon /></ListItemIcon>
                <ListItemText primary={'Open Positions'}  />
              </ListItem>
              <ListItem button>
                <ListItemIcon><MonetizationOnIcon /></ListItemIcon>
                <ListItemText primary={'Total Return'}  />
              </ListItem>
              <ListItem button>
                <ListItemIcon><TimelineIcon /></ListItemIcon>
                <ListItemText primary={'Performance'}  />
              </ListItem>
              <ListItem button>
                <ListItemIcon><PieChartIcon /></ListItemIcon>
                <ListItemText primary={'Portfolio'}  />
              </ListItem>
              <ListItem button key={'table'} onClick={()=> setToggle(!toggle)} >
                <ListItemIcon><FormatListBulletedIcon /></ListItemIcon>
                <ListItemText primary={'Investments Table'}  />
              </ListItem>

          </List>
          <Divider />
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
      </main>
    </div>
  );
}