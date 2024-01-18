import axios from 'axios';
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://65a93932219bfa371868d267.mockapi.io/api';

const getAccounts = async (_, thunkAPI) => {
    try {
        const response = await axios.get('/accounts');
        return response.data;
    }
    catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
};

const postAccount = async (newAccount, thunkAPI) => {
    try {
        const response = await axios.post('/accounts', newAccount);
        alert(`Contact added successfully`);
        return response.data;
    }
    catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
};

const delAccount = async (accountId, thunkAPI) => {
    try {
        const response = await axios.delete(`/accounts/${accountId}`);
        alert(`Contact delete successfully`);
        return response.data;
    }
    catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
};

export const getAccountsThunk = createAsyncThunk(
    'accounts/getAccounts',
    getAccounts
);

export const postAccountThunk = createAsyncThunk(
    'accounts/postAccount',
    postAccount
);
    
export const delAccountThunk = createAsyncThunk(
    'accounts/delAccount',
    delAccount
);
