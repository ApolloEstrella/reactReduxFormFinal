import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import store from './store';
 
 


const rootEl = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Grid container direction="row" justify="center" alignItems="center">
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Grid>
      </div>
    </Router>
  </Provider>,
  rootEl
);

//<Values form="initializeFromState" />
//<InitializeFromStateForm onSubmit={showResults} />
