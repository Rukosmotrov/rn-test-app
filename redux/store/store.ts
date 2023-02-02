import {configureStore} from "@reduxjs/toolkit";
import {picturesReducer} from "../features/picturesSlice";
import thunk from "redux-thunk";
import {authorizationReducer} from "../features/authorizationSlice";
import {profileReducer} from "../features/profileSlice";

export const store = configureStore({
    reducer: {
        pictures: picturesReducer,
        authorization: authorizationReducer,
        profile: profileReducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(thunk)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;