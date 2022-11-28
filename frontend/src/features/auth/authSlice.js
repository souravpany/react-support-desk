import { createSlice, createAsyncThunk, createAction } from '@reduxjs/toolkit'


const initialState = {
    user: null,
    isSuccess: false,
    isError: false,
    isLoading: false,
    message: ''
}


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {

    }
})


export default authSlice.reducer