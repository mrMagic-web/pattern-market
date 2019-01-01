import * as React from "react";

interface ILocation {
	location: string;
}

const Location = (props: ILocation) => {
	return <div>{props.location}</div>;
};

export default Location;
