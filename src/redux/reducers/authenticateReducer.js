import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  id: "",
  password: "",
  authenticate: false,
};

const authenticateSlice = createSlice({
  name: "authenticate",
  initialState,
  reducers: {
    login(state, action) {
      state.id = action.payload.id;
      state.password = action.payload.password;
      state.authenticate = true;
    },

    logout(state, action){
      state.authenticate = false;
    }
  },
});
// function authenticateReducer(state = initialState, action) {
//   let { type, payload } = action;

//   switch (type) {
//     case "LOGIN_SUCCESS":
//       return {
//         ...state,
//         id: payload.id,
//         password: payload.password,
//         authenticate: true,
//       };

//     default:
//       return { ...state };
//   }
// }

export const authenticateActions = authenticateSlice.actions
export const authenticateReducer = authenticateSlice.reducer;
