import * as React from "react";
import { Link } from "react-router-dom";
import Company from "../Company";
import Location from "../Location";
import Title from "../Title";
import Description from "../Description";

const ProfileContent = (profile: any) => {
	return (
		<div>
			{console.log(profile)}
			<div className="row">
				<div className="col-md-6">
					<Link to="/profiles" className="btn btn-light mb-3 float-left">
						Back to profiles
					</Link>
				</div>
				<div className="col-md-6" />
			</div>
			<Company />
			<Location />
			<Title />
			<Description />
		</div>
	);
};

export default ProfileContent;
