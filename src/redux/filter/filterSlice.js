import { createSlice } from '@reduxjs/toolkit'

const filterInitialState = {
    filterByEmail: "",
    filterByDate: '',
    isCheckedAllAccounts: false,
};

export const filterSlice = createSlice({
    name: 'filter',
    initialState: filterInitialState,
    reducers: {
        filterByEmailSet(state, {payload}) {
            state.filterByEmail = payload;
        },
        filterByDateSet(state, {payload}) {
            state.filterByDate = payload;
        },
        isCheckedAllAccountsSet(state, {payload}) {
            state.isCheckedAllAccounts = payload;
        }
    }
});

export const { filterByEmailSet, filterByDateSet, isCheckedAllAccountsSet } = filterSlice.actions;