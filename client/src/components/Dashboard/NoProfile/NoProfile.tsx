import * as React from "react";
import { Link } from "react-router-dom";

const NoProfile = () => {
  return (
    <div>
      <p>You have not yet setup a profile, please add some info</p>
      <Link to="/manage-profile" className="btn btn-lg btn-info">
        Create Profile
      </Link>
    </div>
  );
};

export default NoProfile;
