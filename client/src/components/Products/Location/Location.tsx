import * as React from "react";

interface ILocation {
	location: string;
}

const Location = (props: ILocation) => {
	return <small>{props.location}</small>;
};

export default Location;
