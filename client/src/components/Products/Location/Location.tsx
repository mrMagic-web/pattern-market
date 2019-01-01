import * as React from "react";

interface ILocation {
	location: string;
}

const Location = (props: ILocation) => {
	return (
		<small>
			<i className="fas fa-map-marker-alt" /> {props.location}
		</small>
	);
};

export default Location;
