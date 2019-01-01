import * as React from "react";

interface ICompany {
	company: string;
}

const Company = (props: ICompany) => {
	return <p>{props.company}</p>;
};

export default Company;
