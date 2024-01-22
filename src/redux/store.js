import { configureStore } from '@reduxjs/toolkit'
import { chosenIdSlice } from './chosenIdSlice'
import { accountsSlice } from './accounts/accountsSlice'
import { filterSlice } from './filter/filterSlice';

export const store = configureStore({
    reducer: {
        accounts: accountsSlice.reducer,
        filter: filterSlice.reducer,
        chosenId: chosenIdSlice.reducer,
    },
});