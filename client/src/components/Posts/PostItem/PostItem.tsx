import * as React from "react";
import { connect } from "react-redux";
import classnames from "classnames";
import { Link } from "react-router-dom";
import { deletePost, addLike, removeLike } from "../../../actions/postActions";

class PostItem extends React.Component<any, any> {
	public onDeleteClick(id: string) {
		this.props.deletePost(id);
	}
	public onLikeClick(id: string) {
		this.props.addLike(id);
	}
	public onUnlikeClick(id: string) {
		this.props.removeLike(id);
	}
	public findUserLike(likes: any) {
		const { auth } = this.props;
		const userLikes = likes.filter((like: any) => like.user === auth.user.id).length;
		return userLikes > 0;
	}

	public render() {
		const { post, auth } = this.props;
		return (
			<div className="card card-body mb-3">
				<div className="row">
					<div className="col-md-2">
						<a href="profile.html">
							<img className="rounded-circle d-none d-md-block" src={post.avatar} alt={post.name} />
						</a>
						<br />
						<p className="text-center">{post.name}</p>
					</div>
					<div className="col-md-10">
						<p className="lead">{post.text}</p>
						<button onClick={this.onLikeClick.bind(this, post._id)} type="button" className="btn btn-light mr-1">
							<i className={classnames("fas fa-thumbs-up", { "text-info": this.findUserLike(post.likes) })} />
							<span className="badge badge-light">{post.likes.length}</span>
							{console.log(this.findUserLike(post.likes))}
						</button>
						<button onClick={this.onUnlikeClick.bind(this, post._id)} type="button" className="btn btn-light mr-1">
							<i className="text-secondary fas fa-thumbs-down" />
						</button>
						<Link to={`/post/${post._id}`} className="btn btn-info mr-1">
							Comments
						</Link>
						{post.user === auth.user.id && (
							<button onClick={this.onDeleteClick.bind(this, post._id)} type="button" className="btn btn-danger mr-1">
								<i className="fas fa-times" />
							</button>
						)}
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state: any) => ({
	auth: state.auth
});

export default connect(
	mapStateToProps,
	{ deletePost, addLike, removeLike }
)(PostItem);
