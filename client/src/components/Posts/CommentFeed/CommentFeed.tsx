import * as React from "react";
import CommentItem from "../CommentItem";

class CommentFeed extends React.Component<any, any> {
	public render() {
		const { comments, postId } = this.props;
		const commentList =
			comments !== null
				? comments.map((comment: any) => <CommentItem key={comment._id} comment={comment} postId={postId} />)
				: null;
		return { commentList };
	}
}

export default CommentFeed;
