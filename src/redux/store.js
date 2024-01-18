import { configureStore } from '@reduxjs/toolkit'
import { filterSlice } from './filterSlice'
import { accountsSlice } from './accounts/accountsSlice'

export const store = configureStore({
    reducer: {
        accounts: accountsSlice.reducer,
        filter: filterSlice.reducer,
    },
});