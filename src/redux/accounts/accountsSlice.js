import { createSlice, isAnyOf } from '@reduxjs/toolkit'
import { getAllAccountsThunk, getAccountsThunk, getProfilesByAccountIdThank, postAccountThunk, delAccountThunk } from './operationAccounts';

const accountsInitialState = {
    allAccounts: [],
    accountsByPage: [],
    selectedAccountById: [],
    isLoading: false,
    error: null,
};

const onPending = (state) => {
    state.isLoading = true;
    state.error = null;

};

const onRejected = (state, { payload }) => {
    state.isLoading = false;
    state.error = payload;
};

const arrOfActs = [getAllAccountsThunk, getAccountsThunk, getProfilesByAccountIdThank, postAccountThunk, delAccountThunk];

const addStatusToActs = status =>
    arrOfActs.map((el) => el[status]);

export const accountsSlice = createSlice({
    name: 'accounts',
    initialState: accountsInitialState,
    extraReducers: builder => {
        builder
            .addCase(getAllAccountsThunk.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.allAccounts = payload;
                state.error = null;
            })
            .addCase(getAccountsThunk.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.accountsByPage = payload;
                state.error = null;
            })
            .addCase(getProfilesByAccountIdThank.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.selectedAccountById = payload;
                state.error = null;
            })
            .addCase(postAccountThunk.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.accounts = [...state.accounts, payload]
                state.error = null;
            })
            .addCase(delAccountThunk.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.accounts = state.accounts.filter(account => account.accountId !== payload.id)
                state.error = null;
            })
            .addMatcher(isAnyOf(...addStatusToActs('pending')), onPending)
            .addMatcher(isAnyOf(...addStatusToActs('rejected')), onRejected)
    }
});
