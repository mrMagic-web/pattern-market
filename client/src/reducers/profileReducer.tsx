import { GET_PROFILE, GET_PRODUCTS, PROFILE_LOADING, CLEAR_CURRENT_PROFILE } from "../actions/types";

const initialState = {
  profile: null,
  profiles: null,
  loading: false
};
export default function(state = initialState, action: any) {
  switch (action.type) {
    case PROFILE_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_PROFILE:
      return {
        ...state,
        profile: action.payload,
        loading: false
      };
    case GET_PRODUCTS:
      return {
        ...state,
        product: action.payload,
        loading: false
      };
    case CLEAR_CURRENT_PROFILE:
      return {
        ...state,
        profile: null
      };
    default:
      return state;
  }
}
