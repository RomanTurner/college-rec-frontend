import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { GetServerSideProps } from "next";
const options = ["Option 1", "Option 2"];

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(6),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
}));

function CollegeSelect({posts}) {
    console.log(posts);
  const classes = useStyles();
  const [value, setValue] = React.useState(options[0]);
  const [inputValue, setInputValue] = React.useState("");
  const [valueOne, setValueOne] = React.useState(options[0]);
  const [inputValueOne, setInputValueOne] = React.useState("");
  const [valueTwo, setValueTwo] = React.useState(options[0]);
  const [inputValueTwo, setInputValueTwo] = React.useState("");

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} md={4} >
        <div>{`valueOne: ${valueOne !== null ? `'${valueOne}'` : "null"}`}</div>
        <div>{`inputValueOne: '${inputValueOne}'`}</div>
        <br />
        <Autocomplete
          value={valueOne}
          onChange={(event, newValue) => {
            setValueOne(newValue);
          }}
          inputValue={inputValueOne}
          onInputChange={(event, newInputValueOne) => {
            setInputValueOne(newInputValueOne);
          }}
          id='controllable-states-demo'
          options={options}
          style={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label='Controllable' variant='outlined' />
          )}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <div>{`valueTwo: ${valueTwo !== null ? `'${valueTwo}'` : "null"}`}</div>
        <div>{`inputValueTwo: '${inputValueTwo}'`}</div>
        <br />
        <Autocomplete
          value={valueTwo}
          onChange={(event, newValue) => {
            setValueTwo(newValue);
          }}
          inputValue={inputValueTwo}
          onInputChange={(event, newinputValueTwo) => {
            setInputValueTwo(newinputValueTwo);
          }}
          id='controllable-states-demo'
          options={options}
          style={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label='Controllable' variant='outlined' />
          )}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <div>{`value: ${value !== null ? `'${value}'` : "null"}`}</div>
        <div>{`inputValue: '${inputValue}'`}</div>
        <br />
        <Autocomplete
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          inputValue={inputValue}
          onInputChange={(event, newinputValue) => {
            setInputValue(newinputValue);
          }}
          id='controllable-states-demo'
          options={options}
          style={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label='Controllable' variant='outlined' />
          )}
        />
      </Grid>
    </Grid>
  );
}




export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://college-rec-system.herokuapp.com/colleges`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

export default CollegeSelect;