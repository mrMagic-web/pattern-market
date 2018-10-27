import * as React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import TextField from "../../FormComponents/TextField";
import SelectList from "../../FormComponents/SelectList";
import TextArea from "../../FormComponents/TextArea";
import InputGroup from "../../FormComponents/InputGroup";
// import isEmpty from "../../../validation/is-empty";

import {
  createProfile,
  getCurrentProfile
} from "../../../actions/profileActions";

class ManageProfile extends React.Component<any, any> {
  public constructor(props: any) {
    super(props);
    this.state = {
      displaySocialInputs: false,
      handle: "",
      company: "",
      website: "",
      location: "",
      skills: "",
      status: "",
      bio: "",
      youtube: "",
      twitter: "",
      facebook: "",
      linkedin: "",
      instagram: "",
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.showSocialMedia = this.showSocialMedia.bind(this);
  }
  public componentDidMount() {
    this.props.getCurrentProfile();
  }
  public componentWillReceiveProps(nextProps: any) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
    if (nextProps.profile.profile) {
      const { skills, social, ...profile } = nextProps.profile.profile;
      this.setState(() => ({
        ...profile,
        ...social,
        skills: skills ? skills.join(",") : null
      }));
    }
  }
  public onSubmit = (e: any): void => {
    e.preventDefault();
    const profileData = {
      handle: this.state.handle,
      company: this.state.company,
      website: this.state.website,
      location: this.state.location,
      skills: this.state.skills,
      status: this.state.status,
      bio: this.state.bio,
      youtube: this.state.youtube,
      twitter: this.state.twitter,
      facebook: this.state.facebook,
      linkedin: this.state.linkedin,
      instagram: this.state.instagram
    };
    this.props.createProfile(profileData, this.props.history);
  };
  public onChange = (e: any) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  public showSocialMedia = (e: any) => {
    this.setState((prevState: any) => ({
      displaySocialInputs: !prevState.displaySocialInputs
    }));
  };

  public render() {
    const { errors, displaySocialInputs } = this.state;
    let socialInputs;

    if (displaySocialInputs) {
      socialInputs = (
        <div>
          <InputGroup
            placeholder="Twitter Profile URL"
            name="twitter"
            icon="fab fa-twitter"
            value={this.state.twitter}
            onChange={this.onChange}
            error={errors.twitter}
          />
          <InputGroup
            placeholder="Facebook Profile URL"
            name="facebook"
            icon="fab fa-facebook"
            value={this.state.facebook}
            onChange={this.onChange}
            error={errors.facebook}
          />
          <InputGroup
            placeholder="YouTube Profile URL"
            name="youtube"
            icon="fab fa-youtube"
            value={this.state.youtube}
            onChange={this.onChange}
            error={errors.youtube}
          />
          <InputGroup
            placeholder="LinkedIn Profile URL"
            name="linkedin"
            icon="fab fa-linkedin"
            value={this.state.linkedin}
            onChange={this.onChange}
            error={errors.linkedin}
          />
          <InputGroup
            placeholder="Instagram Profile URL"
            name="instagram"
            icon="fab fa-instagram"
            value={this.state.instagram}
            onChange={this.onChange}
            error={errors.instagram}
          />
        </div>
      );
    }

    // Select options for status
    const options = [
      {
        label: "* Select Professional Status",
        value: "0"
      },
      {
        label: "Designer",
        value: "Designer"
      },
      {
        label: "Manager",
        value: "Manager"
      },
      {
        label: "Other",
        value: "Other"
      }
    ];
    const edit = this.props.location.state;
    return (
      <div className="create-profile">
        <div className="container m-4">
          <div className="row">
            <div className="col-md-8 m-auto text-light">
              <h2 className="mt-4">{edit ? "Edit" : "Create"} Your Profile</h2>
              <small className="d-block pb-3">* = required fields</small>
              <form onSubmit={this.onSubmit}>
                <TextField
                  placeholder="* Profile handle"
                  name="handle"
                  value={this.state.handle}
                  onChange={this.onChange}
                  error={errors.handle}
                  info="A unique handle for your profile URL."
                />
                <SelectList
                  placeholder="Status"
                  name="status"
                  value={this.state.status}
                  onChange={this.onChange}
                  error={errors.status}
                  options={options}
                  info="Let us know who you are"
                />
                <TextField
                  placeholder="Company"
                  name="company"
                  value={this.state.company}
                  onChange={this.onChange}
                  error={errors.company}
                  info="Name of the company"
                />
                <TextField
                  placeholder="Website"
                  name="website"
                  value={this.state.website}
                  onChange={this.onChange}
                  error={errors.website}
                  info="Your website address"
                />
                <TextField
                  placeholder="Location"
                  name="location"
                  value={this.state.location}
                  onChange={this.onChange}
                  error={errors.location}
                  info="Your location"
                />
                <TextField
                  placeholder="skills"
                  name="skills"
                  value={this.state.skills}
                  onChange={this.onChange}
                  error={errors.skills}
                  info="Your skills, comma separated"
                />
                <TextArea
                  placeholder="Short Bio"
                  name="bio"
                  value={this.state.bio}
                  onChange={this.onChange}
                  error={errors.bio}
                  info="Tell us more about yourself"
                />
                <div className="mb-3">
                  <button
                    type="button"
                    onClick={this.showSocialMedia}
                    className="btn btn-light"
                  >
                    Add Social Network Links
                  </button>
                  <br />
                  <span className="text-muted">optional</span>
                  {socialInputs}
                  <input
                    type="submit"
                    value={edit ? "Update Profile" : "Create Profile"}
                    className="btn btn-info btn-block mt-4"
                  />
                </div>
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
  { createProfile, getCurrentProfile }
)(withRouter(ManageProfile));
