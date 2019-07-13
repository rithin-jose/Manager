import {
    EMPLOYEES_FETCH_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
    name:'',
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case EMPLOYEES_FETCH_SUCCESS:
            console.log(action);
            console.log("dekh");            
            return action.payload;
        default:
            return state;
    }
};