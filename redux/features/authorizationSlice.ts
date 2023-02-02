import {createSlice} from "@reduxjs/toolkit";

interface ILoginState {
    email: string,
    password: string,
    authorized: boolean,
    errorEmail: boolean,
    errorPassword: boolean
}

const initialState = {
    email: '',
    password: '',
    authorized: false,
    errorEmail: false,
    errorPassword: false
} as ILoginState

const authorizationSlice = createSlice({
    name: 'authorization',
    initialState,
    reducers: {
        setEmail(state, action) {
            state.email = action.payload;
        },
        setPassword(state, action) {
            state.password = action.payload;
        },
        setAuthorized(state, action) {
          state.authorized = action.payload;
        },
        setErrorEmail(state, action) {
          state.errorEmail = action.payload;
        },
        setErrorPassword(state, action) {
            state.errorPassword = action.payload;
        }
    }
});

export const authorizationActions = authorizationSlice.actions;
export const authorizationReducer = authorizationSlice.reducer;