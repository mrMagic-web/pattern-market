import * as React from "react";
import { connect } from "react-redux";
import PostForm from "./PostForm";
import PostFeed from "./PostFeed";
import Spinner from "../Spinner";
import { getPosts } from "../../actions/postActions";

class Posts extends React.Component<any, any> {
	public componentDidMount() {
		this.props.getPosts();
	}
	public render() {
		const { loading, posts } = this.props.post;
		const postContent = posts === null || loading ? <Spinner /> : <PostFeed posts={posts} />;

		return (
			<div className="posts">
				<div className="container">
					<div className="row">
						<div className="col-12">
							{postContent}
							<PostForm />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state: any) => ({
	post: state.post
});

export default connect(
	mapStateToProps,
	{ getPosts }
)(Posts);
