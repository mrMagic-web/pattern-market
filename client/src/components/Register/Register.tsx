import * as React from "react";
import * as classnames from "classnames";
import axios from "axios";

class Register extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      email: "",
      errors: {},
      password: "",
      password2: "",
      userName: ""
    };
  }

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
      .catch(err => this.setState({ errors: err.response.data }));
  };
  public onChange = (e: any) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  public render() {
    const { userName, email, password, password2 } = this.state.errors;
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
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": userName
                    })}
                    placeholder="Name"
                    name="userName"
                    value={this.state.userName}
                    onChange={this.onChange}
                  />
                  {userName && (
                    <div className="invalid-feedback">{userName}</div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": email
                    })}
                    placeholder="Email Address"
                    name="email"
                    onChange={this.onChange}
                    value={this.state.email}
                  />
                  {email && <div className="invalid-feedback">{email}</div>}
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": password
                    })}
                    placeholder="Password"
                    name="password"
                    onChange={this.onChange}
                    value={this.state.password}
                  />
                  {password && (
                    <div className="invalid-feedback">{password}</div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": password2
                    })}
                    placeholder="Confirm Password"
                    name="password2"
                    onChange={this.onChange}
                    value={this.state.password2}
                  />
                  {password2 && (
                    <div className="invalid-feedback">{password2}</div>
                  )}
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
