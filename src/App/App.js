import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Dashboard from "./components/Dashboard";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import axios from "axios";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const theme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light",

      primary: {
        main: "#283593",
        contrastText: "#fff",
        light: "#000",
        dark: "#002884",
      },
      secondary: {
        main: "#aeea00",
        contrastText: "#000",
        light: "#ff7961",
        dark: "#ba000d",
      },
    },
  });

  function createRow(asset, qty, avgPrice, currentPrice) {
    const totalInvested = qty * avgPrice;
    const profit = (currentPrice - avgPrice) * qty;
    const percent = (profit / totalInvested) * 100;
    return {
      asset,
      qty,
      avgPrice,
      currentPrice,
      totalInvested,
      profit,
      percent,
    };
  }

  const [investments, setInvestments] = useState([]);
  const [keyNames, setKeyNames] = useState([]);
  const [openPositions, setOpenPositions] = useState([]);


  useEffect(() => {
    axios.get("http://localhost:5000/api/investments").then((response) => {
      let investments = [];
      response.data.forEach((investment) => {
        investment.date = investment.date.split("T")[0];
        investments.push(investment);
      });


      setInvestments(investments);
      let keys = Object.getOwnPropertyNames(response.data[0]);
      setKeyNames(keys);
      
      
      
      
      // Set and reduce openPositions array
      let positionRows = [];
      const uniqueValues = [...new Set(investments.map(investment => investment.asset))];
      
      console.log(uniqueValues);

      uniqueValues.forEach((value)=>{
        positionRows.push(
          createRow(
            value,
            0,
            0,
            25
          )
          );
      })
  
      // loop trough positions array, match with investment table asset, and sum the quantity and the avg price.
      
      investments.map((investment) => {
        positionRows.map((position)=>{
          if (position.asset === investment.asset) {
            if(investment.operationType.toUpperCase() === 'BUY'){
              position.qty += investment.quantity;
              position.totalInvested += investment.quantity*investment.price;
            } 
            if(investment.operationType.toUpperCase() === 'SELL'){
              position.qty -= investment.quantity;
              position.totalInvested -= investment.quantity*investment.price;
            }
            
            position.avgPrice = (position.totalInvested/position.qty);
            position.profit = (position.currentPrice - position.avgPrice) * position.qty;
            position.percent = (position.profit / position.totalInvested) * 100;
             if(position.qty < 0){
              position.percent = -(position.profit / position.totalInvested) * 100;
            }

          }
        })
        
      
      
      });

      
      console.log('positionsRow',positionRows);
      setOpenPositions(positionRows);
    
      
    });
  }, []);
  
console.log('openPositionsOut',openPositions);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <NavBar
          position="fixed"
          theme={theme}
          setDarkMode={setDarkMode}
          darkMode={darkMode}
        />
          <Dashboard
            darkMode={darkMode}
            investments={investments}
            openPositions={openPositions}
            keyNames = {keyNames}
            theme={theme}
          />
      </ThemeProvider>
    </div>
  );
}

export default App;
