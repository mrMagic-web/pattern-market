import * as React from "react";

interface ICompany {
	company: string;
}

const Company = (props: ICompany) => {
	return <div>{props.company}</div>;
};

export default Company;
