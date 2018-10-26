import * as React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import TextField from "../FormComponents/TextField";
class Register extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      email: "",
      errors: {},
      password: "",
      password2: "",
      name: ""
    };
  }
  public componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }
  public componentWillReceiveProps(nextProps: any) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  public onSubmit = (e: any): void => {
    e.preventDefault();
    const newUser = {
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
      name: this.state.name
    };
    this.props.registerUser(newUser, this.props.history);
  };
  public onChange = (e: any) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  public render() {
    const errors = this.state.errors;

    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center  text-light">Sign Up</h1>
              <p className="lead text-center text-light">
                Create your Sewing Pattern Market account
              </p>
              <form onSubmit={this.onSubmit}>
                <TextField
                  error={errors.name}
                  name="name"
                  placeholder="name"
                  onChange={this.onChange}
                  type="text"
                  value={this.state.name}
                />
                <TextField
                  error={errors.email}
                  name="email"
                  placeholder="Email Address"
                  onChange={this.onChange}
                  type="email"
                  value={this.state.email}
                />
                <TextField
                  error={errors.password}
                  name="password"
                  placeholder="Password"
                  onChange={this.onChange}
                  type="password"
                  value={this.state.password}
                />
                <TextField
                  error={errors.password2}
                  name="password2"
                  placeholder="Repeat password"
                  onChange={this.onChange}
                  type="password"
                  value={this.state.password2}
                />
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
