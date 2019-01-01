// import { PROFILE_LOADING } from "../actions/types";

const initialState = {
	posts: [],
	post: {},
	loading: false
};
export default function(state = initialState, action: any) {
	switch (action.type) {
		// case PROFILE_LOADING:
		//   return {
		//     ...state,
		//   };

		default:
			return state;
	}
}
