import React, { Component } from "react";
import PhoneInput from "react-phone-number-input";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import "../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css";

import "./Signup.css";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      phone_number: "",
      address_line_1: "",
      address_line_2: "",
      pincode: "",
      email: "",
      errorsUsername: "",
      errorsPhone_number: "",
      errorsAddress_line_1: "",
      errorsAddress_line_2: "",
      errorsPincode: "",
      errorsEmail: "",
      formIsValid: "",
      tabledata: [],
      formIsValid: "true"
    };
  }

  handleChange(e) {
    // If you are using babel, you can use ES 6 dictionary syntax
    // let change = { [e.target.name] = e.target.value }
    let change = {};
    change[e.target.name] = e.target.value;
    this.setState(change);
  }

  render() {
    return (
      <div>
        <div class="login-form">
          <form method="post">
            <div class="form-group">
              <input
                type="text"
                class="form-control input-lg"
                name="username"
                placeholder="Username"
                onChange={this.handleChange.bind(this)}
                value={this.state.username}
                required
              />
              <span style={{ color: "red" }}>{this.state.errorsUsername}</span>
            </div>
            <div class="form-group">
              <input
                type="tel"
                class="form-control input-lg"
                name="phone_number"
                placeholder="Phone number"
                onChange={this.handleChange.bind(this)}
                value={this.state.phone_number}
                pattern="^\d{4}\d{3}\d{4}$"
                required
              />
              <span style={{ color: "red" }}>
                {this.state.errorsPhone_number}
              </span>
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control input-lg"
                name="address_line_1"
                placeholder="Address Line 1"
                onChange={this.handleChange.bind(this)}
                value={this.state.address_line_1}
                required
              />
              <span style={{ color: "red" }}>
                {this.state.errorsAddress_line_1}
              </span>
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control input-lg"
                name="address_line_2"
                placeholder="Address Line 2"
                onChange={this.handleChange.bind(this)}
                value={this.state.address_line_2}
                required
              />
              <span style={{ color: "red" }}>
                {this.state.errorsAddress_line_2}
              </span>
            </div>
            <div class="form-group">
              <input
                type="number"
                class="form-control input-lg"
                name="pincode"
                placeholder="Pincode"
                onChange={this.handleChange.bind(this)}
                value={this.state.pincode}
                required
              />
              <span style={{ color: "red" }}>{this.state.errorsPincode}</span>
            </div>
            <div class="form-group">
              <input
                type="email"
                class="form-control input-lg"
                name="email"
                placeholder="Email"
                onChange={this.handleChange.bind(this)}
                value={this.state.email}
                required
              />
              <span style={{ color: "red" }}>{this.state.errorsEmail}</span>
            </div>

            <div class="form-group">
              <button
                type="button"
                onClick={this.onClick.bind(this)}
                class="btn btn-success btn-lg btn-block login-btn"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        <div>
          <BootstrapTable data={this.state.tabledata} striped hover>
            <TableHeaderColumn isKey dataField="username">
              Username
            </TableHeaderColumn>
            <TableHeaderColumn dataField="phone_number">
              Phone Number
            </TableHeaderColumn>
            <TableHeaderColumn dataField="pincode">Pincode</TableHeaderColumn>
            <TableHeaderColumn dataField="email">Email</TableHeaderColumn>
            <TableHeaderColumn dataField="address_line_1">
              Address 1
            </TableHeaderColumn>
            <TableHeaderColumn dataField="address_line_2">
              Address 2
            </TableHeaderColumn>
          </BootstrapTable>
        </div>
      </div>
    );
  }
  onClick(ev) {
    this.setState({ errorsEmail: "" });
    this.setState({ errorsPincode: "" });
    this.setState({ errorsAddress_line_1: "" });
    this.setState({ errorsAddress_line_2: "" });
    this.setState({ errorsUsername: "" });
    this.setState({ errorsPhone_number: "" });

    if (typeof this.state.username !== "undefined") {
      if (!this.state.username.match(/^[a-zA-Z]+$/)) {
        this.setState({ formIsValid: "false" });
        this.setState({ formIsValid: "This field can't be empty" });
        this.setState({ errorsUsername: "Only letters is required" });
      }
    }

    if (!this.state.username) {
      this.setState({ formIsValid: "false" });
      this.setState({ errorsUsername: "This field can't be empty" });
    }

    if (this.state.email !== "undefined") {
      let lastAtPos = this.state.email.lastIndexOf("@");
      let lastDotPos = this.state.email.lastIndexOf(".");

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          this.state.email.indexOf("@@") == -1 &&
          lastDotPos > 2 &&
          this.state.email.length - lastDotPos > 2
        )
      ) {
        this.setState({ formIsValid: "false" });
        this.setState({ errorsEmail: "Email is not valid" });
      }
    }

    if (!this.state.email) {
      this.setState({ formIsValid: "false" });
      this.setState({ errorsEmail: "This field can't be empty" });
    }
    if (isNaN(this.state.pincode)) {
      this.setState({ formIsValid: "false" });
      this.setState({ errorsPincode: "Only number is required" });
    }
    if (this.state.pincode.length !== 6) {
      this.setState({ formIsValid: "false" });
      this.setState({ errorsPincode: "length should be 6" });
    }
    if (isNaN(this.state.phone_number)) {
      this.setState({ formIsValid: "false" });
      this.setState({ errorsPhone_number: "Only number is required" });
    }
    if (this.state.phone_number.length !== 10) {
      this.setState({ formIsValid: "false" });
      this.setState({ errorsPhone_number: "length should be 10" });
    }
    if (this.state.address_line_1.length < 3) {
      this.setState({ formIsValid: "false" });
      this.setState({ errorsAddress_line_1: "Minimum length 3 is required" });
    }
    if (this.state.address_line_2.length < 3) {
      this.setState({ formIsValid: "false" });
      this.setState({ errorsAddress_line_2: "Minimum length 3 is required" });
    }
    console.log("data$$$$$$$$$$$$$$$", this.state.formIsValid);

    if (this.state.formIsValid === "true") {
      let data = [
        {
          username: this.state.username,
          phone_number: this.state.phone_number,
          pincode: this.state.pincode,
          email: this.state.email,
          address_line_1: this.state.address_line_1,
          address_line_2: this.state.address_line_2
        }
      ];
      this.setState({ tabledata: data });
    }
  }
}
export default Signup;
