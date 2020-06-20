export const types = {
  SIGN_IN: 'SIGN_IN',
  SIGN_OUT: 'SIGN_OUT'
}

export const signIn = userId => {
  return {
    type: types.SIGN_IN,
    payload: userId
  };
}

export const signOut = () => {
  return {
    type: types.SIGN_OUT
  };
};
