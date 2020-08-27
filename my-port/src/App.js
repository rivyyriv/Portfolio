import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Projects from './Components/Projects.js'
import About from './Components/About.js'
import Education from './Components/Education.js'
import Experiance from './Components/Experiance.js'
import Resume from './Components/Resume.js'


const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function Menu() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
  <Router>
    <Paper className={classes.root} >
        <Tabs value={value} onChange={handleChange} indicatorColor="primary" textColor="primary" centered>
        <Tab component={Link} label="About" to={'/About'}/>
        <Tab component={Link} label="Projects" to={'/Projects'}/>
        <Tab component={Link} label="Experiance" to={'/Experiance'}/>
        <Tab component={Link} label="Education" to={'/Education'}/>
        <Tab component={Link} label="Resume" to={'/Resume'}/>

      </Tabs>
    </Paper>
      <Switch>
        <Route path="/About">
          <About />
        </Route>
        <Route path="/Projects">
          <Projects />
        </Route> 
        <Route path="/Experiance">
          <Experiance />
        </Route>
        <Route path="/Education">
          <Education />
        </Route>
        <Route path="/Resume">
          <Resume />
        </Route>
      </Switch>
  </Router>
  );
}