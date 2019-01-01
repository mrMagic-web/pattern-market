import * as React from "react";
import { connect } from "react-redux";
import PostForm from "./PostForm";
// import Spinner from "../Spinner";

class Posts extends React.Component<any, any> {
	public render() {
		// if (false) {
		// 	<Spinner />;
		// }
		return (
			<div className="posts">
				<div className="container">
					<div className="row">
						<div className="col-12">
							Posts
							<PostForm />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default connect()(Posts);
