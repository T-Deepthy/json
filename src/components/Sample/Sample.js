import React from "react";
import "./Sample.css";
class Sample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      formErrors: { firstName: "", lastName: "", email: "", password: "" },
      firstNameValid: false,
      lastNameValid: false,
      emailValid: false,
      passwordValid: false,
      formValid: false
    };
  }
  handleUserInput = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  };
  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let firstNameValid = this.state.firstNameValid;
    let lastNameValid = this.state.lastNameValid;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;

    switch (fieldName) {
      case "firstName":
        firstNameValid = value.match(/^[a-zA-Z]+$/);
        fieldValidationErrors.firstName = firstNameValid
          ? ""
          : " First Name must be alphabet";
        break;
      case "lastName":
        lastNameValid = value.match(/^[a-zA-Z]+$/);
        fieldValidationErrors.lastName = lastNameValid
          ? ""
          : "Last Name must be alphabet";
        break;
      case "email":
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? "" : " Invalid email format";
        break;
      case "password":
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid
          ? ""
          : " Password is too short";
        break;
      default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        firstNameValid: firstNameValid,
        lastNameValid: lastNameValid,
        emailValid: emailValid,
        passwordValid: passwordValid
      },
      this.validateForm
    );
  }
  validateForm() {
    this.setState({
      formValid:
        this.state.emailValid &&
        this.state.passwordValid &&
        this.state.firstNameValid &&
        this.state.lastNameValid
    });
  }
  errorClass(error) {
    return error.length === 0 ? "" : "has-error";
  }
  render() {
    console.log("fffff", this.state.formErrors.firstName);

    return (
      <div className="col-md-6 mx-auto thick">
        <h1>Sample Form</h1>
        <form>
          <div
            className={`form-group ${this.errorClass(
              this.state.formErrors.firstName
            )}`}
          >
            <label>First Name</label>
            <input
              type="name"
              className="form-control"
              id="exampleInputfirstname1"
              placeholder="first name"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleUserInput}
            />
          </div>
          <p className="error"> {this.state.formErrors.firstName} </p>
          <div
            className={`form-group ${this.errorClass(
              this.state.formErrors.lastName
            )}`}
          >
            <label>Last Name</label>
            <input
              type="name"
              className="form-control"
              id="exampleInputlastname1"
              placeholder="last name"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleUserInput}
            />
          </div>
          <p className="error"> {this.state.formErrors.lastName} </p>
          <label>Gender</label>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios1"
              value="option1"
              defaultChecked
            />
            <label className="form-check-label normal">Female</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios1"
              value="option1"
              defaultChecked
            />
            <label className="form-check-label normal">Male</label>
          </div>
          <div
            className={`form-group ${this.errorClass(
              this.state.formErrors.email
            )}`}
          >
            <label className="mt-2">Email address</label>
            <input
              type="email"
              className="form-control "
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              required
              name="email"
              value={this.state.email}
              onChange={this.handleUserInput}
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <p className="error"> {this.state.formErrors.email} </p>
          <label>Marital Status</label>
          <div className="form-check">
            <input
              className="form-check-input "
              type="checkbox"
              value=""
              id="defaultCheck1"
            />
            <label className="form-check-label normal">Married</label>
          </div>
          <div className="form-group mt-2">
            <label>Department</label>
            <select className="form-control" id="exampleFormControlSelect1">
              <option>Development</option>
              <option>Testing</option>
              <option>Devops</option>
              <option>Management</option>
              <option>Human Resource</option>
            </select>
          </div>
          <div
            className={`form-group ${this.errorClass(
              this.state.formErrors.password
            )}`}
          >
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control "
              id="exampleInputPassword1"
              placeholder="Password"
              name="password"
              value={this.state.password}
              onChange={this.handleUserInput}
            />
          </div>
          <p className="error">{this.state.formErrors.password}</p>
          <button
            type="submit"
            className="btn btn-primary mt-2"
            disabled={!this.state.formValid}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}
export default Sample;
