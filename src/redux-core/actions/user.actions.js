export const onChangeEmail = email => {
  return {
    type: "CHANGE_EMAIL",
    payload: email,
  };
};

const fetchingUser = () => {
  return {
    type: "FETCHING_USER",
  };
};
const fetchSuccess = data => {
  return {
    type: "FETCH_SUCCESS",
    payload: data,
  };
};

const fetchFail = () => {
  return {
    type: "FETCH_FAIL",
    payload: data,
  };
};

export const fetchUser = () => {
  return (dispatch, getState) => {
    dispatch(fetchingUser());

    fetch("https://randomuser.me/api/?results=2")
      .then(results => {
        return results.json();
      })
      .then(data => {
        dispatch(fetchSuccess(data.results));
        // console.log(data);
        // Access your data here
      })
      .catch(error => {
        dispatch(fetchSuccess(error));
        // console.log(error);
      });
  };
};
