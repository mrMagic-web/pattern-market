import * as React from "react";
import { Link } from "react-router-dom";

const ProfileActions = () => {
  return (
    <div>
      <div className="btn-group mb-4" role="group">
        <Link
          to={{
            pathname: "/manage-profile",
            state: { edit: true }
          }}
          className="btn btn-dark"
        >
          <i className="fas fa-user-circle text-info mr-1" /> Edit Profile
        </Link>
        <Link to="/manage-product" className="btn btn-dark">
          <i className="fab fa-black-tie text-info mr-1" />
          Add Product
        </Link>
      </div>
    </div>
  );
};

export default ProfileActions;
