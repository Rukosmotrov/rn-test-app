import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IPicture} from "../../components/pages/Feed/Feed";
import axios from "axios";

interface IPicturesState {
    pictures: IPicture[],
    nextPage: number,
    loading: boolean,
    refreshing: boolean
}

const initialState = {
    pictures: [],
    nextPage: 1,
    loading: false,
    refreshing: false
} as IPicturesState;

export const fetchPictures = createAsyncThunk(
    'pictures/fetchPictures',
    async (page: number) => {
        const response = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=20`);
        return response.data;
});

const picturesSlice = createSlice({
    name: 'pictures',
    initialState,
    reducers: {
        refreshPage(state) {
            state.refreshing = true;
            state.pictures = [];
            state.nextPage = 1;
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchPictures.pending, (state, action) => {
            state.loading = true;
        })
        builder.addCase(fetchPictures.fulfilled, (state: IPicturesState, action: PayloadAction<IPicture[]>) => {
            state.pictures = state.pictures.concat(action.payload);
            state.nextPage += 1;
            state.loading = false;
            state.refreshing = false;
        })
    }
});

export const picturesActions = picturesSlice.actions;
export const picturesReducer = picturesSlice.reducer;