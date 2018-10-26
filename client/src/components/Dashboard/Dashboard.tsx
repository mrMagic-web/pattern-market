import * as React from "react";
// import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profileActions";

class Dashboard extends React.Component<any, any> {
  public componentDidMount() {
    this.props.getCurrentProfile();
  }

  public render() {
    // const { user } = this.props.auth;
    console.log(this.props);
    const { profile, loading } = this.props;
    const dashboardContent =
      profile === null || loading ? <h1>Profile</h1> : <h1>No profile</h1>;

    return (
      <div className="dashboard">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4">Dashboard</h1>
              {dashboardContent}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getCurrentProfile }
)(Dashboard);
