import * as React from "react";

interface IDescription {
	description: string;
}

const Description = (props: IDescription) => {
	return <p>{props.description}</p>;
};

export default Description;
