import React from "react";
import { Field, reduxForm, Form, submit } from "redux-form";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
//import Button from '@material-ui/core/Button'
import { Button } from "@material-ui/core";
//import asyncValidate from './asyncValidate'

/* import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle"; */

import { connect } from "react-redux";
import { addPost, ADD_POST } from "./action/actions";
import { createStore } from "./store";

import MaterialUiForm from "./MaterialUiForm";

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (event) => {
    //event.preventDefault()
    alert('99999')
    //const person = JSON.stringify(personInfo)
    //
    const person = { firstName: 'jan'}

    

    this.props.dispatch({ type: ADD_POST, payload: {prop: 'firstName', value:'janpol'} });

    //this.dispatch(addPost({firstName: personInfo.firstName}))
    //dispatch(addPost({firstName: personInfo.firstName}))
    //this.props.dispatch(addPost({firstName: 'Janpol'}))
  };

  render() {
    return <MaterialUiForm onSubmit={this.handleSubmit}/>;
  }
}

const mapStateToProps = state => {
  return { person: state.person };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatch //,
    //addToPost: () => dispatch(addPost({firstName: this.props.person.firstName}))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterForm)
