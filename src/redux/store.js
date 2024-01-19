import { configureStore } from '@reduxjs/toolkit'
import { chosenIdSlice } from './chosenIdSlice'
import { accountsSlice } from './accounts/accountsSlice'

export const store = configureStore({
    reducer: {
        accounts: accountsSlice.reducer,
        chosenId: chosenIdSlice.reducer,
    },
});