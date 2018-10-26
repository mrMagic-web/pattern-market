import * as React from "react";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import TextField from "../FormComponents/TextField";
class Login extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      email: "",
      errors: {},
      password: ""
    };
  }

  public componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  public componentWillReceiveProps(nextProps: any) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  public onSubmit = (e: any): void => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(userData);
  };
  public onChange = (e: any) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  public render() {
    const errors = this.state.errors;

    return (
      <div className="login">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center text-light">Log In</h1>
              <p className="lead text-center text-light">
                Sign in to your Sewing Pattern Market account
              </p>
              <form onSubmit={this.onSubmit}>
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
  { loginUser }
)(Login);
