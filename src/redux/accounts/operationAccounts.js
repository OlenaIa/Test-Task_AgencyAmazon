import axios from 'axios';
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://65a93932219bfa371868d267.mockapi.io/api';

export const LIMIT = 10;

const getAllAccounts = async (_, thunkAPI) => {
    try {
        const response = await axios.get('/accounts');
        return response.data;
    }
    catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
};

const getAccounts = async (page, thunkAPI) => {
    try {
        const response = await axios.get(`/accounts?page=${page}&limit=${LIMIT}`);
        return response.data;
    }
    catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
};
const getProfilesByAccountId = async (accountId, thunkAPI) => {
    try {
        const response = await axios.get(`/accounts/${accountId}/profiles`);
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

export const getAllAccountsThunk = createAsyncThunk(
    'accounts/getAllAccounts',
    getAllAccounts
);

export const getAccountsThunk = createAsyncThunk(
    'accounts/getAccounts',
    getAccounts
);

export const getProfilesByAccountIdThank = createAsyncThunk(
    'accounts/getProfilesByAccountId',
    getProfilesByAccountId
);
    
export const delAccountThunk = createAsyncThunk(
    'accounts/delAccount',
    delAccount
);

