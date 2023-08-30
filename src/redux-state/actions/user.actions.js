export const onChangeEmail = email => {
  return {
    type: "CHANGE_EMAIL",
    payload: email,
  };
};
