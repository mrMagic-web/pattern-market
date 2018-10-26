import * as React from "react";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profileActions";

class Dashboard extends React.Component<any, any> {
  public componentDidMount() {
    this.props.getCurrentProfile();
  }
  public render() {
    return <div>Dashboard</div>;
  }
}

export default connect(
  null,
  { getCurrentProfile }
)(Dashboard);
