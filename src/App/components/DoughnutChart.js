import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    display:"flex",
    justifyContent: 'center',
  },

  box: {
    position:'relative',
    top: '-15px',
    minWidth: 400
  },


}));



const DoughnutChart = ({ openPositions }) => {
  const classes = useStyles();
  
   console.log('openPositionsIn', openPositions);

   const assets = openPositions.map((position) => position.asset);
    console.log('assets',assets);
    
    const portfolioDivision = [];
    let total = openPositions.map(({ totalInvested }) => totalInvested).reduce((sum, i) => sum + i, 0);
    console.log(total);
   
  
    openPositions.map((position)=>{
      if(position.qty < 0){
        total -= position.totalInvested; 
        portfolioDivision.push(Math.ceil(-position.totalInvested/total*100));
      } else {
        total += position.totalInvested; 
        portfolioDivision.push(Math.ceil(position.totalInvested/total*100));
      }
  
    })
    
  
  // const [chartData, setChartData] = useState({});
  

  //const chart = () => {
    
    const alocatedPercentual = portfolioDivision.reduce((sum, i)=> sum+ i,0);
    console.log(alocatedPercentual);
    const cash = `${100 - alocatedPercentual} + %)`;
    portfolioDivision.push(cash);
    console.log(portfolioDivision);
    
    const chartData = ({
      datasets: [{
        data: portfolioDivision,
        backgroundColor: ['#FF6384','#36A2EB','#FFCD56','#74c69d','#5a189a']
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels:assets,
      
  

    });
  //};

  // useEffect(() => {
  //   chart();
  // }, []);

  return (
    <div>
      <Paper  className={classes.box}>
        <h2 className={classes.title}>Portfolio</h2>
        <Doughnut
         
          data={chartData}
          height={460}
          width={400}
          options={{
            responsive: false,
            maintainAspectRatio: true,
            legend: {
              display: true,
              labels: {
                fontColor: "black",
              },
              align: "center",
              position: "bottom",
            },

            cutoutPercentage: 60,


          }}
        />
      </Paper>
    </div>
  );
};

export default DoughnutChart;
