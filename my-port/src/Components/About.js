import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Profile from '../about.jpg'; 
import Box from '@material-ui/core/Box';
import { CardMedia, Card } from '@material-ui/core';





const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',

  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
   

  },
  media: {
    height: 0,
    paddingTop: '100.25%', // 16:9
  },
  grid: {
  },
}));

export default function About() {

  const classes = useStyles();

  return (
    <div className={classes.root}>
        
      <Grid spacing={3} wrap="wrap" container direction="row" justify="space-evenly" alignItems="center">
        
        <Grid container={true} item xs={3} className={classes.grid}>
          <Paper className={classes.paper}>
            <Typography variant="h4" color='textPrimary' gutterBottom>River Smith</Typography> 
            <Typography variant="h5"  gutterBottom>Front End Web Developer</Typography> 
            <Typography variant="h6"  gutterBottom>Cell : 801.850.7012 rivyyriv@gmail.com</Typography> 
           <Card>
            <CardMedia className={classes.media} image={Profile} title="Paella dish"/>
           </Card>
          </Paper>
        </Grid>
   
        <Grid container={true} item xs={6} className={classes.grid}>
          <Paper className={classes.paper}>
          <Typography variant="h5" color='textPrimary' gutterBottom>Languages</Typography> 
            <Typography variant="h6" gutterBottom> JavaScript, HTML, CSS </Typography>
            <Typography variant="h5" color='textPrimary' gutterBottom>Frameworks</Typography> 
            <Typography variant="h6" gutterBottom>React, Redux, Axios, Restful APIs, Bootstrap, ReactStrap, Material-UI, SASS, LESS, Flexbox, NPM, Yarn, Git, GitHub.</Typography>
            <Typography variant="h5" color='textPrimary' gutterBottom> Professional Skills</Typography>
            <Typography variant="h6" gutterBottom> Problem Solver, Code Organization, Punctual, Analytical, Detail Oriented, Creative, Visual, Resourceful</Typography>
          </Paper>
        </Grid>
        

      </Grid>
    </div>
  );
}