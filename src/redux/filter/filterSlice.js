import { createSlice } from '@reduxjs/toolkit'

const filterInitialState = {
    filterByEmail: "",
filterByDate: '',
}    ;

export const filterSlice = createSlice({
    name: 'filter',
    initialState: filterInitialState,
    reducers: {
        filterByEmailSet(state, {payload}) {
            state.filterByEmail = payload;
        },
        filterByDateSet(state, {payload}) {
            state.filterByDate = payload;
        }
    }
});

export const selectFilterByEmail = state => state.filter.filterByEmail;
export const selectFilterByDate = state => state.filter.filterByDate;


export const { filterByEmailSet,filterByDateSet } = filterSlice.actions;