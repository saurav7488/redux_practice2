import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const createUser = createAsyncThunk("user/createUser", async (data) => {
    const response = await fetch('https://660108b387c91a116419ee12.mockapi.io/crud', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    try {
        const res = await response.json();
        return res;
    } catch (error) {
        throw new Error("Something went wrong");
    }
});

export const showUser = createAsyncThunk("user/showUser", async () => {
    const response = await fetch("https://660108b387c91a116419ee12.mockapi.io/crud");

    try {
        const res = await response.json();
        return res;
    } catch (error) {
        throw new Error("Something went wrong");
    }
});

export const deleteUser = createAsyncThunk("user/deleteUser", async (id) => {
    const response = await fetch(`https://660108b387c91a116419ee12.mockapi.io/crud/${id}`, {
        method: "DELETE"
    });

    try {
        const res = await response.json();
        return res;
    } catch (error) {
        throw new Error("Something went wrong");
    }
});

export const updateUser = createAsyncThunk("user/updateUser", async (data) => {
    console.log(data)
    const response = await fetch(`https://660108b387c91a116419ee12.mockapi.io/crud/${data.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    try {
        const res = await response.json();
        return res;
    } catch (error) {
        throw new Error("Something went wrong");
    }
});

export const userDetails = createSlice({
    name: "userDetails",
    initialState: {
        users: [],
        loading: false,
        error: null,
        searchData:[]
    },
    reducers: {
        searchUser:(state,action)=>{
             state.searchData = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(createUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(createUser.fulfilled, (state, action) => {
                state.loading = false;
                state.users.push(action.payload);
            })
            .addCase(createUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(showUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(showUser.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
            })
            .addCase(showUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(deleteUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(deleteUser.fulfilled, (state, action) => {
                state.loading = false;
                // Assuming you want to update the state after deleting a user
                // console.log(action.payload)
                state.users = state.users.filter(user => user.id !== action.payload.id);
            })
            .addCase(updateUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(updateUser.fulfilled, (state, action) => {
                state.loading = false;
                state.users.push(action.payload);
            })
            .addCase(updateUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            
    },
});

export const {searchUser} = userDetails.actions

export default userDetails.reducer;
