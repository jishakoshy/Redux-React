//userReducer.js

const initialState = {
  isAuthenticated: false,
  user: null,
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };
  
  export default userReducer;