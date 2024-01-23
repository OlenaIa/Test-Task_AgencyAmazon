import { createSlice } from '@reduxjs/toolkit'

const filterInitialState = {
    filterByEmail: '',
    filterByDate: '',
    isCheckedAllAccounts: false,
    filteredAccounts: [],
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
        },
        filteredAccountsSet(state, {payload}) {
            state.filteredAccounts = payload;
        }
    }
});

export const { filterByEmailSet, filterByDateSet, isCheckedAllAccountsSet, filteredAccountsSet } = filterSlice.actions;