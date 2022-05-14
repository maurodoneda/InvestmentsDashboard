import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
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
    minWidth: 450
  },


}));

const montlhyReturns = [10, -15, 12, 20, 11, 10, 2, 5];

let count = 0;
const acummReturn = [];

montlhyReturns.map((value)=>{
    count = count + value;
    acummReturn.push(count);
})

const MonthlyReturnChart = ({ theme, darkMode }) => {
  const classes = useStyles();

  const [chartData, setChartData] = useState({});

  const chart = () => {
    setChartData({
      labels: ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug"],
      datasets: [
        {
          label: "Total Yearly Return - %",
          data: acummReturn,
          backgroundColor: "#72efdd",
          borderWidth: 2,
          pointBackgroundColor: '#caf0f8'
        },
      ],
    });
  };

  useEffect(() => {
    chart();
  }, []);

  return (
    <div>
      <Paper  className={classes.box}>
        <h2 className={classes.title}>Accumulated Return - 2020</h2>
        <Line
         
          data={chartData}
          height={460}
          width={450}
          options={{
            responsive: false,
            maintainAspectRatio: true,
            height: 500,
            legend: {
              display: false,
              labels: {
                fontColor: "white",
              },
              align: "center",
              position: "bottom",
            },

            scales: {
              yAxes: [
                {
                  ticks: {
                    autoSkip: true,
                    maxTicksLimit: 10,
                    beginAtZero: true,
                    callback: function(value) {
                      return  value + '%';
                  }
                  },
                  gridLines: {
                    display: false,
                  },
                },
              ],

              xAxes: [
                {
                  gridLines: {
                    display: false,
                  },
                  ticks: {
                    autoSkip: true,
                    maxTicksLimit: 10,
                    beginAtZero: true,
                  },
                },
              ],
            },
          }}
        />
      </Paper>
    </div>
  );
};

export default MonthlyReturnChart;
