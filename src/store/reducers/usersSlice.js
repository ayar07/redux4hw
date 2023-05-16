import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    users: [],
    error: "",
};

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        setLoading: (state) => {
            state.loading = true;
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
            state.users = action.payload;
        },
    }
})

const usersReducer = usersSlice.reducer;

export const { setError, setLoading, setUsers }  = usersSlice.actions;
export default usersReducer;