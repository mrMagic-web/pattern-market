import * as React from "react";

const PostItem = (props: any) => {
	const { post } = props;
	return <div>{post.text}</div>;
};

export default PostItem;
