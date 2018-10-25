import * as React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import TextField from "../TextField";
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
      userName: this.state.userName
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
                  errors={errors.userName}
                  name="userName"
                  placeholder="Username"
                  onChange={this.onChange}
                  type="text"
                  value={this.state.userName}
                />
                <TextField
                  errors={errors.email}
                  name="email"
                  placeholder="Email Address"
                  onChange={this.onChange}
                  type="email"
                  value={this.state.email}
                />
                <TextField
                  errors={errors.password}
                  name="password"
                  placeholder="Password"
                  onChange={this.onChange}
                  type="password"
                  value={this.state.password}
                />
                <TextField
                  errors={errors.password2}
                  name="password2"
                  placeholder="Repeat password"
                  onChange={this.onChange}
                  type="password2"
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
