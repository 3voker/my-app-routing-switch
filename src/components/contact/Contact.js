import React, { Component } from "react";

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      submitted: false,
      formData: {
        firstName: "",
        lastName: "",
      },
    };
  }

  //Use arrow functions to avoid 'this' bind issues.
  handleChange = (event) => {
    const formData = { ...this.state.formData };
    formData[event.target.name] = event.target.value; //What is happening here?

    this.setState({ formData });
  };

  handleSubmit = (event) => {
    event.preventDefault(); //What is .preventDefault?
    this.setState({ submitted: true });
  };

  resetForm = (event) => {
    this.setState({
      submitted: false,
      formData: {
        firstName: "",
        lastName: "",
      },
    });
  };

  render() {
    //If form is Submitted do this
    if (this.state.submitted) {
      return (
        <div className="Contact">
          <p>
            Thank you, {this.state.formData.firstName}{" "}
            {this.state.formData.lastName}, for submitting the form.
          </p>
          <button onClick={this.resetForm}>Reset Form</button>
        </div>
      );
    }
    //Otherwise default to this
    return (
      <div className="Contact">
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="firstName"
              value={this.state.formData.firstName}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={this.state.formData.lastName}
              onChange={this.handleChange}
            />
          </div>
          <button>Submit Form</button>
        </form>

        <div>
          {this.state.formData.firstName}
          <br />
          {this.state.formData.lastName}
        </div>
      </div>
    );
  }
}

export default Contact; //Always export
