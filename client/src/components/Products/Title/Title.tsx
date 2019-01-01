import * as React from "react";

interface ITitle {
	title: string;
}

const Title = (props: ITitle) => {
	return <div>{props.title}</div>;
};

export default Title;
