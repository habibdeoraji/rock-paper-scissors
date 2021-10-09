import { SCORE_DETAILS, UPDATE_RESULTS_ARRAY, RESET_ALL_DATA } from "./actionTypes";

const initialState = {
    scoreCard: localStorage.getItem('userChoice') || { userChoice: '', computerChoice: '', totalGameCount: 0 },
    results: localStorage.getItem('results') || { userScore: 0, computerScore: 0 }

}

const reducers = (state = initialState, { type, payload }) => {
    console.log(payload);
    switch (type) {
        case SCORE_DETAILS:
            return { ...state, scoreCard: payload }
        case UPDATE_RESULTS_ARRAY:
            return { ...state, results: payload }
        default:
            return state
    }
}

export default reducers