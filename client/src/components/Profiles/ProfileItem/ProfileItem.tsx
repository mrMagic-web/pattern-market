import * as React from "react";
import { Link } from "react-router-dom";
import isEmpty from "../../../validation/is-empty";

class ProfileItem extends React.Component<any, any> {
	public render() {
		const { product } = this.props;
		return (
			<div className="card card-body bg-light mb-3">
				<div className="row">
					<div className="col-2">
						<img src={product.user.avatar} alt="" className="rounded-circle" />
					</div>
					<div className="col-lg-4 col-md-6 col-8">
						<h3>{product.user.name}</h3>
						<p>
							{product.status} {isEmpty(product.company) ? null : <span> at {product.company}</span>}{" "}
						</p>
						<p>{isEmpty(product.location) ? null : <span>{product.location}</span>} </p>
						<Link to={`/products/${product.handle}`} className="btn btn-info">
							View product
						</Link>
					</div>
					<div className="col-md-4 d-none d-md-block">
						<h4>Skill set</h4>
						<ul className="list-group">
							{product.skills.slice(0, 4).map((skill: string, index: number) => (
								<li key={`skill-${product._id}-${index}`} className="list-group-item">
									<i className="fa fa-check pr-1" /> {skill}
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		);
	}
}
export default ProfileItem;
