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
import submitNow from "./submit";
import accountReducer from "./account";

const required = value =>
  value || typeof value === "number" ? undefined : "Required";
const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;
const maxLength15 = maxLength(15);
export const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined;
export const minLength2 = minLength(2);
const number = value =>
  value && isNaN(Number(value)) ? "Must be a number" : undefined;
const minValue = min => value =>
  value && value < min ? `Must be at least ${min}` : undefined;
const minValue13 = minValue(13);
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Invalid email address"
    : undefined;
const tooYoung = value =>
  value && value < 13
    ? "You do not meet the minimum age requirement!"
    : undefined;
const aol = value =>
  value && /.+@aol\.com/.test(value)
    ? "Really? You still use AOL for your email?"
    : undefined;
const alphaNumeric = value =>
  value && /[^a-zA-Z0-9 ]/i.test(value)
    ? "Only alphanumeric characters"
    : undefined;
export const phoneNumber = value =>
  value && !/^(0|[1-9][0-9]{9})$/i.test(value)
    ? "Invalid phone number, must be 10 digits"
    : undefined;

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
);

const renderTextField = ({
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}) => (
  <TextField
    label={label}
    placeholder={label}
    error={touched && invalid}
    helperText={touched && error}
    {...input}
    {...custom}
  />
);

const renderCheckbox = ({ input, label }) => (
  <div>
    <FormControlLabel
      control={
        <Checkbox
          checked={input.value ? true : false}
          onChange={input.onChange}
        />
      }
      label={label}
    />
  </div>
);

const radioButton = ({ input, ...rest }) => (
  <FormControl>
    <RadioGroup {...input} {...rest}>
      <FormControlLabel value="female" control={<Radio />} label="Female" />
      <FormControlLabel value="male" control={<Radio />} label="Male" />
      <FormControlLabel value="other" control={<Radio />} label="Other" />
    </RadioGroup>
  </FormControl>
);

const renderFromHelper = ({ touched, error }) => {
  if (!(touched && error)) {
    return;
  } else {
    return <FormHelperText>{touched && error}</FormHelperText>;
  }
};

const renderSelectField = ({
  input,
  label,
  meta: { touched, error },
  children,
  ...custom
}) => (
  <FormControl error={touched && error}>
    <Select native {...input} {...custom} inputProps={{}}>
      {children}
    </Select>
    {renderFromHelper({ touched, error })}
  </FormControl>
);

var MaterialUiForm = props => {
  const { pristine, reset, submitting, classes, valid, dispatch } = props;

  const handleSubmits = event => {
    event.preventDefault();

    dispatch({
      type: ADD_POST,
      payload: {
        prop: "firstName",
        value: document.getElementById("person.firstName").value
      }
    });
  };

  //alert(props.person.firstName)

  return (
    <form onSubmit={handleSubmits}>    
      <div>
        <Field
          id="person.firstName"
          name="person.firstName"
          component={renderTextField}
          label="First Name"
          validate={[required, maxLength15, minLength2]}
        />
      </div>
      <div>
        <Field
          name="person.lastName"
          component={renderTextField}
          label="Last Name"
          validate={[required, maxLength15, minLength2]}
        />
      </div>
      <div>
        <Field
          name="person.email"
          component={renderTextField}
          label="Email"
          validate={[email, required]}
        />
      </div>
      <div>
        <Field
          name="person.age"
          type="number"
          component={renderTextField}
          label="Age"
          validate={[required, number, minValue13]}
          warn={tooYoung}
        />
      </div>
      <div>
        <Field name="person.sex" component={radioButton}>
          <Radio value="male" label="male" />
          <Radio value="female" label="female" />
        </Field>
      </div>
      <div>
        <Field
          classes={classes}
          name="person.favoriteColor"
          component={renderSelectField}
          label="Favorite Color"
          validate={required}
        >
          <option value="" />
          <option value={"ff0000"}>Red</option>
          <option value={"00ff00"}>Green</option>
          <option value={"0000ff"}>Blue</option>
        </Field>
      </div>
      <div>
        <Field
          name="person.employed"
          component={renderCheckbox}
          label="Employed"
        />
      </div>
      <div />
      <div>
        <Field
          name="person.notes"
          component={renderTextField}
          label="Notes"
          multiline
          rowsMax="4"
          margin="normal"
        />
      </div>
      <div>
        <Button
          type="submit"
          disabled={!valid || pristine || submitting}
          variant="contained"
          color="primary"
        >
          Submit
        </Button>{" "}
        &nbsp; &nbsp;
        <Button
          type="button"
          disabled={pristine || submitting}
          onClick={reset}
          variant="contained"
          color="primary"
        >
          Clear Values
        </Button>
      </div>
      <div>
        <ul>
          {props.memberList.map(member => (
            <li>{member}</li>
          ))}
        </ul>
      </div>
    </form>
  );
};

const mapStateToProps = state => {
  return {
    person: state.accountReducer.person,
    memberList: state.accountReducer.memberList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  };
};

MaterialUiForm = connect(mapStateToProps, mapDispatchToProps)(MaterialUiForm);

export default reduxForm({
  form: "MaterialUiForm" //,
  //onSubmit: {handleSubmit}
  //, // a unique identifier for this form
  //validate
  //asyncValidate
})(MaterialUiForm);
