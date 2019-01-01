import * as React from "react";

interface IDescription {
	description: string;
}

const Description = (props: IDescription) => {
	return <div>{props.description}</div>;
};

export default Description;
