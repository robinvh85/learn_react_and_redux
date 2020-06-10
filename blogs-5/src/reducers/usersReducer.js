export default (state = [], action) => {
  console.log("userReducers", state);
  switch (action.type) {
    case 'FETCH_USER':
      return [...state, action.payload];
    default:
      return state;
  }
}
