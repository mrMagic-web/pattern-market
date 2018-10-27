import * as React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import TextField from "../../FormComponents/TextField";
import TextArea from "../../FormComponents/TextArea";

import { createProduct } from "../../../actions/profileActions";

class ManageProduct extends React.Component<any, any> {
  public constructor(props: any) {
    super(props);
    this.state = {
      title: "",
      company: "",
      location: "",
      description: "",
      errors: {},
      published: false
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  public componentWillReceiveProps(nextProps: any) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
    // if (nextProps.profile.profile) {
    //   const { skills, social, ...profile } = nextProps.profile.profile;
    //   this.setState(() => ({
    //     ...profile,
    //     ...social,
    //     skills: skills ? skills.join(",") : null
    //   }));
    // }
  }

  public onSubmit = (e: any): void => {
    e.preventDefault();
    const productData = {
      title: this.state.title,
      company: this.state.company,
      location: this.state.location,
      description: this.state.description,
      errors: this.state.errors
    };
    this.props.createProduct(productData, this.props.history);
  };
  public onChange = (e: any) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  public render() {
    const { errors } = this.state;
    return (
      <div className="manage-product">
        <div className="container m-4">
          <div className="row">
            <div className="col-md-8 m-auto">
              <Link to="/dashboard" className="btn btn-dark mt-4 mb-4">
                Go Back
              </Link>
              <h1>Add Product</h1>
              <p className="lead">Add your product here</p>
              <small className="d-block pb-3">* = required fields</small>
              <form onSubmit={this.onSubmit}>
                <TextField
                  placeholder="Product title"
                  name="title"
                  value={this.state.title}
                  onChange={this.onChange}
                  error={errors.title}
                  info="Product title"
                />
                <TextField
                  placeholder="Your company"
                  name="company"
                  value={this.state.company}
                  onChange={this.onChange}
                  error={errors.company}
                  info="Where do you work"
                />
                <TextField
                  placeholder="Your location"
                  name="location"
                  value={this.state.location}
                  onChange={this.onChange}
                  error={errors.location}
                  info="Location"
                />
                <TextArea
                  placeholder="Product long description"
                  name="description"
                  value={this.state.description}
                  onChange={this.onChange}
                  error={errors.description}
                  info="Describe your product nicely so everyone will want to buy it"
                />
                <input
                  type="submit"
                  value={false ? "Update Profile" : "Create Profile"}
                  className="btn btn-info btn-block mt-4 mb-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state: any) => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { createProduct }
)(withRouter(ManageProduct));
