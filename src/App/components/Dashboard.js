import React, { useState } from "react";
import InvestmentTable from "./InvestmentTable";
import { makeStyles } from "@material-ui/core/styles";
import SideDrawer from "./SideDrawer";
import OpenPositions from "./OpenPositions";
import Grid from "@material-ui/core/Grid";
import DoughnutChart from "./DoughnutChart";
import MonthlyReturnChart from "./MonthlyReturnChart";
import EvolutionChart from "./EvolutionChart";

const useStyles = makeStyles((theme)=>({
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
    marginLeft: 245,
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },

  gridItem:{
    minWidth: 420
  },

  evolutionChart:{
    minWidth: 420

  },

}));

export default function Dashboard({keyNames, investments, openPositions}) {
  const classes = useStyles();
  const [toggle, setToggle] = useState(false);

  return (
    <div className={classes.content}>
      <SideDrawer setToggle={setToggle} toggle={toggle} />
      <Grid container spacing={2}>
      
      <Grid className={classes.gridItem} item xs={3}>
        <DoughnutChart openPositions = {openPositions}/>
        </Grid>

        <Grid className={classes.evolutionChart} item item xs={3}>
        <MonthlyReturnChart/>
        </Grid>

        <Grid className={classes.evolutionChart} item item xs={4}>
        <EvolutionChart/>
        </Grid>

        <Grid className={classes.gridItem} item xs={11}>
        {toggle ? (
          <InvestmentTable
            keyNames={keyNames}
            investments={investments}
          />
        ) : null}
        </Grid>
       

        <Grid className={classes.gridItem} item xs={11}>
        <OpenPositions
          investments={investments}
          openPositions = {openPositions}
        />
        </Grid>

       
      </Grid>
    </div>
  );
}
