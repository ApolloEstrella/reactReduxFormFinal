import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
//import MaterialUiForm from "./MaterialUiForm";
import showResults from './showResults'
import modalform from "./modalform.js";
import RegisterForm from "./modalform.js";
//import InitializeFromStateForm from "./InitializeFromStateForm";'

import TabPanel from "./component/subscriber/subscriberTab"
import color from "@material-ui/core/colors/yellow";
import { yellow } from "@material-ui/core/colors";

import SubscriberTab from "./component/subscriber/subscriberTab"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  }
}));

const style = {

  background : "blue"
};

export default function DenseAppBar() {
  const classes = useStyles();

  return (
    <Router>
    <div className={classes.root}>
      <AppBar position="static" style={style}>
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            SSC
          </Typography>
          <div className={classes.root}>
           
            <Toolbar variant="dense">
               
               
              <ul className="App-ul">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li>
              </ul>
            </Toolbar>
           
        </div>

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        
        </Toolbar>
      </AppBar>
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
    </div>
    </Router>
  );
}

 


// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

 

// You can think of these components as "pages"
// in your app.

function Home() {
  return (
    <div>   
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

/* function Dashboard() {
  return (
    <div className="form">
        <MaterialUiForm   />
    </div>
  );
} */

function Dashboard() {
  return (
    <div>
        <SubscriberTab />
    </div>
  );
}
