import firebase from 'firebase';
import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER,
} from './types';
import {Actions} from 'react-native-router-flux';

export const emailChanged = (text) => {
    return{
        type: EMAIL_CHANGED,
        payload: text,
    }
};

export const passwordChanged = (text) => {
    return{
        type: PASSWORD_CHANGED,
        payload: text,
    }
};

export const loginUser =({email,password}) => {
    return(dispatch) => {
        dispatch({type:LOGIN_USER});
        
        firebase.auth().signInWithEmailAndPassword(email,password) //Success
        .then(user => loginUserSuccess(dispatch,user))
        .catch((error) => {
            console.log(error);
            
            firebase.auth().createUserWithEmailAndPassword(email,password)  //Create User
            .then(user => loginUserSuccess(dispatch,user))
            .catch(() => loginUserFail(dispatch));
        });
    };
}; 

const loginUserSuccess = (dispatch,user) => {
 
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user,
    });
    Actions.main();
}

const loginUserFail = (dispatch) => {
    dispatch({
        type: LOGIN_USER_FAIL,
    });
}
