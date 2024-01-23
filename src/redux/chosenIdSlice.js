import { createSlice } from '@reduxjs/toolkit'

const chosenIdInitialState = {
    profileId: null,
    accountId: null,
    isLoading: false,
    error: null,
};;

export const chosenIdSlice = createSlice({
    name: 'chosenId',
    initialState: chosenIdInitialState,
    reducers: {
        profileIdSet(state, {payload}) {
            state.profileId = payload;
        },
        accountIdSet(state, {payload}) {
            state.accountId = payload;
        }
    }
});

export const selectProfileId = state => state.chosenId.profileId;
export const selectAccountId = state => state.chosenId.accountId;

export const { profileIdSet, accountIdSet } = chosenIdSlice.actions;