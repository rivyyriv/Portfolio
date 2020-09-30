import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import { Divider } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import { grey } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';


const theme = createMuiTheme({
  palette: {
    primary: {
      lightgrey: '#e0e0e0',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 1000,
  },
  paper: {
    padding: '6px 16px',
  },
  heading : {
    backgroundColor : theme.palette.primary.lightgrey,
    padding: '6px 16px',
    width: '100%',

  },
 
});



export default function Experiance() {

  const classes = useStyles();

  return (
    <Box display="flex"  flexDirection="row" justifyContent="space-around" flexWrap="wrap">

      <div className={classes.root}>
        <Timeline>
        <Typography align="center" className={classes.heading} variant="h4" gutterBottom>Work Experiance</Typography>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.paper}>
                <Typography variant="h6" component="h1">Vivint Solar</Typography>
                <Typography> • Became an expert in renewable energy and smart home products and their benefits to the consumer• Helped families save money through consumer-focused sales practice• Closed contracts confidently with new homes and families while gaining outside business development expertise</Typography>
            </Paper>
            </TimelineContent>
              <TimelineOppositeContent>
              <Typography color="textSecondary">Jul 2015 – Feb 2020</Typography>
            </TimelineOppositeContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.paper}>
                <Typography variant="h6" component="h1"> Freelance Web Developer</Typography>
                <Typography> Experienced Freelance Web Developer with a demonstrated history of working in JavaScript and React to build elegant front end interaction through components.</Typography>
            </Paper>
            </TimelineContent>
              <TimelineOppositeContent>
              <Typography color="textSecondary">Jul 2019 - Present</Typography>
            </TimelineOppositeContent>
          </TimelineItem>
        
        </Timeline>
        </div>

        <div className={classes.root}>
        <Timeline>
        <Typography align="center" className={classes.heading} variant="h4" gutterBottom>Education</Typography>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.paper}>
                <Typography variant="h6" component="h1"> Utah Valley University</Typography>
                <Typography>General Studies</Typography>
                <Typography> After completing my general studies at UVU, I began to become fascinated with web development. As such, I switched to Lambda School to pursue my interests in a more efficient manner. This General Education is not a formal degree or certificate of completion. I have completed 40 CR hours.</Typography>
            </Paper>
            </TimelineContent>
              <TimelineOppositeContent>
              <Typography color="textSecondary">2018 - 2019</Typography>
            </TimelineOppositeContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.paper}>
                <Typography variant="h6" component="h1">Lambda School</Typography>
                <Typography> An immersive, online program with rigorous studies in all things web development! This course is preparing me for successful a career in web development. These skills include, JavaScript, HTML, CSS, Node, React, Python, Redux, SQL</Typography>
            </Paper>
            </TimelineContent>
              <TimelineOppositeContent>
              <Typography color="textSecondary">April 2019 - Present</Typography>
            </TimelineOppositeContent>
          </TimelineItem> 
        </Timeline>
        </div>
    </Box>

  );
}