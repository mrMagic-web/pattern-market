import axios from "axios";
import * as React from "react";

class Register extends React.Component<any, any> {
  public state = {
    email: "",
    errors: {},
    password: "",
    password2: "",
    userName: ""
  };

  public onSubmit = (e: any): void => {
    e.preventDefault();
    const newUser = {
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
      userName: this.state.userName
    };
    axios
      .post("/api/users/register", newUser)
      .then(res => console.log(res.data))
      .catch(err => console.log(err.response.data));
  };
  public onChange = (e: any) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  public render() {
    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center  text-light">Sign Up</h1>
              <p className="lead text-center text-light">
                Create your DevConnector account
              </p>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Name"
                    name="userName"
                    value={this.state.userName}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Email Address"
                    name="email"
                    onChange={this.onChange}
                    value={this.state.email}
                  />
                  <small className="form-text text-muted">
                    This site uses Gravatar so if you want a profile image, use
                    a Gravatar email
                  </small>
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="Password"
                    name="password"
                    onChange={this.onChange}
                    value={this.state.password}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="Confirm Password"
                    name="password2"
                    onChange={this.onChange}
                    value={this.state.password2}
                  />
                </div>
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
