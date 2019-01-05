import * as React from "react";
import { connect } from "react-redux";
import TextArea from "../../FormComponents/TextArea";
import { addComment } from "../../../actions/postActions";

class CommentForm extends React.Component<any, any> {
	public constructor(props: any) {
		super(props);
		this.state = {
			text: "",
			errors: ""
		};
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}
	public componentWillReceiveProps(newProps: any) {
		if (newProps.errors) {
			this.setState({ errors: newProps.errors });
		}
	}
	public onSubmit = (e: any) => {
		e.preventDefault();
		const { user } = this.props.auth;
		const { postId } = this.props;

		const newComment = {
			text: this.state.text,
			name: user.name,
			avatar: user.avatar
		};
		this.props.addComment(postId, newComment);
		this.setState({ text: "" });
	};
	public onChange = (e: any) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	public render() {
		const { errors, text } = this.state;
		return (
			<div className="post-form mb-3">
				<div className="card card-indo">
					<div className="card-header bg-info text-white">Make a comment...</div>
				</div>
				<div className="card-body">
					<form onSubmit={this.onSubmit}>
						<TextArea
							placeholder="Reply to post"
							name="text"
							value={text}
							onChange={this.onChange}
							error={errors.text}
						/>
						<button className="btn btn-dark">Submit</button>
					</form>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state: any) => ({
	errors: state.errors,
	auth: state.auth
});

export default connect(
	mapStateToProps,
	{ addComment }
)(CommentForm);
