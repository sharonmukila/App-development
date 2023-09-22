
import React from 'react';
import './Signupcss.css';

import { Link } from 'react-router-dom';
class RegisterForm extends React.Component {
    constructor() {
      super();
      this.state = {
        fields: {},
        errors: {}
      }

      this.handleChange = this.handleChange.bind(this);
      this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);

    };

    handleChange(e) {
      let fields = this.state.fields;
      fields[e.target.name] = e.target.value;
      this.setState({
        fields
      });
    

    }

    submituserRegistrationForm(e) {
      console.log(this.validateForm());
      
      e.preventDefault();
      if (this.validateForm()) {
          console.log(this.state);
          let fields = {};
          fields["username"] = "";
          fields["emailid"] = "";
          fields["mobileno"] = "";
          fields["password"] = "";
          this.setState({fields:fields});
          console.log(this.state);
          alert("Form submitted");
      }

    }

    validateForm() {

      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;

      if (!fields["username"]) {
        formIsValid = false;
        errors["username"] = "*Please enter your username.";
      }

      if (typeof fields["username"] !== "undefined") {
        if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
          formIsValid = false;
          errors["username"] = "*Please enter alphabet characters only.";
        }
      }

      if (!fields["emailid"]) {
        formIsValid = false;
        errors["emailid"] = "*Please enter your email-ID.";
      }

      if (typeof fields["emailid"] !== "undefined") {
        //regular expression for email validation
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(fields["emailid"])) {
          formIsValid = false;
          errors["emailid"] = "*Please enter valid email-ID.";
        }
      }

      if (!fields["mobileno"]) {
        formIsValid = false;
        errors["mobileno"] = "*Please enter your mobile no.";
      }

      if (typeof fields["mobileno"] !== "undefined") {
        if (!fields["mobileno"].match(/^[0-9]{10}$/)) {
          formIsValid = false;
          errors["mobileno"] = "*Your mobile no must only contain numbers.";
        }
      }

      if (!fields["password"]) {
        formIsValid = false;
        errors["password"] = "*Please enter your password.";
      }

      if (typeof fields["password"] !== "undefined") {
        if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
          formIsValid = false;
          errors["password"] = "*Your Password must contain more than 8 letters including symbols.";
        }
      }

      this.setState({
        errors: errors
      });
      return formIsValid;


    }



  render() {
    return (
      <>
      <div className='final3'>
      <div className='bgg'>
    <div id="main-registration-container3">
      
     <div id="register3">
        <form method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >
        <label id='name3'>Name:</label>
        <br></br>
        <br></br>
        <input type="text" name="username" placeholder="Enter your name" value={this.state.fields.username} onChange={this.handleChange} />
        <div className="errorMsg3">{this.state.errors.username}</div>
        <label id='email3'>Email ID:</label>
        <br></br>
        <br></br>
        <input type="text" name="emailid" placeholder="Enter your email ID" value={this.state.fields.emailid} onChange={this.handleChange}  />
        <div className="errorMsg3">{this.state.errors.emailid}</div>
        <label id='mobile3'>Mobile No:</label>
        <br></br>
        <br></br>
        <input type="text" name="mobileno" placeholder="Enter your Mobile no" value={this.state.fields.mobileno} onChange={this.handleChange}   />
        <div className="errorMsg3">{this.state.errors.mobileno}</div>
        <label id='pass3'>Password:</label>
        <br></br>
        <br></br>
        <input type="password" name="password"placeholder="Enter your Password" value={this.state.fields.password} onChange={this.handleChange} />
        <div className="errorMsg3">{this.state.errors.password}</div>
        <Link to='/'><input id='t3' type="submit" className="button"  value="Register"/></Link>
        </form>
        <h4>Already have an Account?   <Link to='/'>Login here </Link></h4>
    </div>
</div>
</div>

<h1 className='p3'></h1>

<h1 className='pa3'></h1>
</div>
</>
      );
  }


}

export default RegisterForm;