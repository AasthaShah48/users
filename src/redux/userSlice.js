import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    user: {}
  },
  reducers: {

    addUser: (state, action) => {
      return {
        ...state,
        users: [...state.users, action.payload]
      };

    },

    deleteUser: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload.id);
    },

    getUser: (state, action) => {
      return {
        ...state,
        user: state.users.find((user) => user.id === action.payload.id),
      };
    },

    updateUser: (state, action) => {

      const userData = []

      state.users.filter((item) => {
        if( item.id != action.payload.id){ 
          userData.push(item)
        } else {
          userData.push(action.payload)
        }
      })

      return {  
        users : userData
      };

    },
  },
});

export const { addUser, deleteUser, updateUser, getUser } = userSlice.actions;
export default userSlice.reducer;