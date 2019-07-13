import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk'
import reducers from './reducers';
import Router from './Router';

export default class App extends Component{
    componentWillMount(){  
        // firebase config goes here
}

    render(){
        return(
            <Provider store={createStore(reducers,{},applyMiddleware(ReduxThunk))}>
                <Router></Router>
            </Provider>
        );
    }
}