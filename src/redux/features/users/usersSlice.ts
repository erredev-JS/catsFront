import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../../types/IUser";

interface UsersState {
  usersArray: IUser[];
  activeUser: IUser;
}

const initialState: UsersState = {
  usersArray: [],
  activeUser: {
    id: 0,
    name: "",
    email: "",
    role: "",
  },
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<IUser[]>) => {
      state.usersArray = action.payload;
    },
    setActiveUser: (state, action: PayloadAction<IUser>) => {
      state.activeUser = action.payload;
    },
  },
});


export const {setUsers, setActiveUser} = usersSlice.actions;

export default usersSlice.reducer