import * as React from "react";
import PostItem from "../PostItem";

const PostFeed = (props: any) => {
	const { posts } = props;
	return posts.map((post: any) => <PostItem key={post._id} post={post} />);
};

export default PostFeed;
