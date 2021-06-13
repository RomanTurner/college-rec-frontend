import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import CollegeSelect from "../../components/CollegeSelect";
import CollegePreview from "../../components/CollegePreview";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

function Home() {
 const classes = useStyles();
  return (
      <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
          <h1>Select Colleges</h1>
        <Grid container justify='center' spacing={2}>
          <CollegeSelect />
        </Grid>
      </Grid>
      <Grid item xs={12}>
              <h1>Results Go here</h1>
              <CollegePreview/>
      </Grid>
    </Grid>
  );
}



export default Home;