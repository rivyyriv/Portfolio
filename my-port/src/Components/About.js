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
  about: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    width: '370px',

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
 
}));

export default function About() {

  const classes = useStyles();

  return (
    <div className={classes.root}>

      <Box display="flex"  flexDirection="row" justifyContent="space-evenly" flexWrap="wrap">
          
          
        <Box m={1.5}>

            <Paper m={3} className={classes.paper}>
              <Typography variant="h4" color='textPrimary' gutterBottom>River Smith</Typography> 
            <Card>
              <CardMedia className={classes.media} image={Profile} title="Paella dish"/>
            </Card>
            </Paper>
          </Box>

          <Box m={1.5}>

          <Paper m={3}  className={classes.about}>
          <Typography variant="h5" color='textPrimary' gutterBottom>About</Typography> 
            <Typography variant="h6" gutterBottom> I am an Experienced Freelance Web Developer with a demonstrated history of working in JavaScript and React to build elegant front end interaction through components. I enjoy using code to solve real problems! I thrive in environments that require constant learning and adapting.</Typography>
            <Typography variant="h6" gutterBottom> Before finding my passion for web development I was a motivated sales representative. I was in this line of work for many years, filing many different roles and responsibilities while learning to create quality business. 

          </Typography>

          </Paper>
          </Box>

          <Box m={1.5}>

            <Paper m={3}  className={classes.paper}>
            <Typography variant="h5" color='textPrimary' gutterBottom>Languages</Typography> 
              <Typography variant="h6" gutterBottom> JavaScript, HTML, CSS </Typography>
              <Typography variant="h5" color='textPrimary' gutterBottom>Frameworks</Typography> 
              <Typography variant="h6" gutterBottom>React, Redux, Axios, Restful APIs, Bootstrap, ReactStrap, Material-UI, SASS, LESS, Flexbox, NPM, Yarn, Git, GitHub.</Typography>
              <Typography variant="h5" color='textPrimary' gutterBottom> Professional Skills</Typography>
              <Typography variant="h6" gutterBottom> Problem Solver, Code Organization, Punctual, Analytical, Detail Oriented, Creative, Visual, Resourceful</Typography>
            </Paper>
          </Box>
      </Box>
    </div>
  );
}