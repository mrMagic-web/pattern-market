import * as React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Spinner from "../../Spinner";
import PostItem from "../PostItem";
import CommentForm from "../CommentForm";
import CommentFeed from "../CommentFeed";
import { getPost } from "../../../actions/postActions";

class Post extends React.Component<any, any> {
	public componentDidMount() {
		this.props.getPost(this.props.match.params.id);
	}
	public render() {
		const { post, loading } = this.props.post;
		if (post === null || loading) {
			return <Spinner />;
		}
		return (
			<div className="post">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<Link to="/posts" className="btn btn-light mb-3">
								Back to posts
							</Link>
							<PostItem post={post} showActions={false} />
							<CommentForm postId={post._id} />
							<CommentFeed postId={post._id} comments={post.comments} />
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
	{ getPost }
)(Post);
