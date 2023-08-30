const initialState = {
  token: "",
  email: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_EMAIL":
      return {
        ...state,
        email: action.payload,
      };

    default:
      return state;
  }
};
