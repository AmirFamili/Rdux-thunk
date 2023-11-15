import {FETCH_USER_REQUEST,FETCH_USER_SUCCESS,FETCH_USER_FAILURE} from './ActionTypes';
import axios from 'axios';


const fetchUsersRequest = () => {
    return {
        type:FETCH_USER_REQUEST,
        payload:[]
    };
}
 
const fetchUsersSuccess = (data) => {
    return {
        type:FETCH_USER_SUCCESS,
        payload:data
    };
}

const fetchUsersFailure = (errorMessage) => {
    return {
        type:FETCH_USER_FAILURE,
        payload:errorMessage
    };
}

const fetchUsers = () => {
    return (dispatch)=>{
        dispatch(fetchUsersRequest());
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response=>{
            dispatch(fetchUsersSuccess(response.data))
        })
        .catch(error=>{
            dispatch(fetchUsersFailure(error.message))
        })
    };
}
 
export default fetchUsers;