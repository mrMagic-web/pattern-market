import * as React from "react";

interface ITitle {
	title: string;
}

const Title = (props: ITitle) => {
	return <h3>{props.title}</h3>;
};

export default Title;
