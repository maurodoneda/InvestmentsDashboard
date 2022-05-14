import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
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

const MonthlyReturnChart = ({ theme, darkMode }) => {
  const classes = useStyles();

  const [chartData, setChartData] = useState({});

  const chart = () => {
    setChartData({
      labels: ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug"],
      datasets: [
        {
          label: "Monthly return - %",
          data: ["10", "8", "-12", "20", "11", "10", "2", "5"],
          backgroundColor: "rgba(75,192,192)",
          borderWidth: 2,
          pointBackgroundColor: 'yellow'
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
        <h2 className={classes.title}>Portfolio Return - 2020</h2>
        <Bar
         
          data={chartData}
          height={460}
          width={400}
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
