import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    post: [],
    error: "",
};

const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
        setLoading: (state,action) => {
            state.loading = action.payload  ;
            state.error = "";
        },

        setError: (state, action) => {
            state.error = action.payload;
            state.loading = false;
            state.users = [];
        },

        setUsers: (state, action) => {
            state.error = "";
            state.loading = false;
            state.post = action.payload;
        },
    }
})

const postReducer = postSlice.reducer;

export const { setError, setLoading, setUsers }  = postSlice.actions;
export default postReducer;