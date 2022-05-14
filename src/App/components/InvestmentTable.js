import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";


const StyledTableCell = withStyles((theme) => ({
  body: {
    fontSize: 14,
  },

}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, type, price, quantity, market) {
  return { name, type, price, quantity, market };
}

const rows = [
  createData("PETR4", 159, 6.0, 24, 4.0),
  createData("BOVA11", 237, 9.0, 37, 4.3),
  createData("WEGE3", 262, 16.0, 24, 6.0),
  createData("PBR", 305, 3.7, 67, 4.3),
  createData("SP500", 356, 16.0, 49, 3.9),
];

const useStyles = makeStyles({
  table: {
    minWidth: 500,
  },

  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
    marginTop: 2,
  },

  collumn: {
    minWidth: 120,
  }
});

const InvestmentTable = ({investments, keyNames}) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.content}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            {keyNames.map((name) => (
              <StyledTableCell key={name} align="center" className={classes.collumn}>
                {name.toUpperCase()}
              </StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {investments.map((investment) => (
            <StyledTableRow key={investment.id}>
              {Object.values(investment).map((value) => (
                <StyledTableCell align='center'>
                  {value}
                </StyledTableCell>
              ))}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default InvestmentTable;
