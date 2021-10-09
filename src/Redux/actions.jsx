import { SCORE_DETAILS, UPDATE_RESULTS_ARRAY, RESET_ALL_DATA } from "./actionTypes";


export const scoreDetails = (payload) => ({
    type: SCORE_DETAILS,
    payload
})

export const updateResultsArray = (payload) => ({
    type: UPDATE_RESULTS_ARRAY,
    payload
})

export const resetAllData = (payload) => ({
    type: RESET_ALL_DATA,
    payload
})