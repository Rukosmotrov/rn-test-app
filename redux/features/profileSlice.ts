import {createSlice} from "@reduxjs/toolkit";

interface IUser {
    id: number,
    email: string,
    first_name: string,
    last_name: string,
    avatar: string
}

interface IProfileState {
    user: IUser
}

const initialState = {
    user: {}
} as IProfileState

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setUser(state, action) {
            state.user = action.payload;
        }
    }
})

export const profileActions = profileSlice.actions;
export const profileReducer = profileSlice.reducer;