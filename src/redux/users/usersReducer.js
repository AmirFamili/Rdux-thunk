import { FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAILURE } from './ActionTypes';

const initialState = {
    load: false,
    users: [],
    errorMessage: null
}
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USER_REQUEST:
            return { ...state, loading: true }
        case FETCH_USER_SUCCESS:
            return { ...state, loading: false, users: action.payload, errorMessage: null }
        case FETCH_USER_FAILURE:
            return { ...state, loading: false, users: [], errorMessage: action.payload }
        default:
            return state;
    }
}

export default usersReducer;