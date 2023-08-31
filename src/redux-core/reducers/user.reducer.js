const initialState = {
  token: "",
  email: "",
  isFetching: false,
  error: null,
  user: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_EMAIL":
      return {
        ...state,
        email: action.payload,
      };
      break;
    case "FETCHING_USER":
      return {
        ...state,
        isFetching: true,
      };
      break;
    case "FETCH_FAIL":
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
      break;
    case "FETCH_SUCCESS":
      return {
        ...state,
        isFetching: false,
        user: action.payload,
      };
      break;
    default:
      return state;
  }
};
