import React from 'react';
import{Scene,Router,Actions} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';
const RouterComponent = () => {
    return(
        <Router scenestyle={{paddingtop: 65}}>
            <Scene key="root" hideNavBar>
                <Scene key='auth'initial>
                    <Scene key='login' component={LoginForm} title='Please Login' ></Scene>
                </Scene>
                <Scene key='main'>
                    <Scene 
                    rightTitle='Add'
                    onRight={()=>Actions.employeeCreate()}
                    key='employeelist' 
                    component={EmployeeList} 
                    title='Employees'>
                    </Scene>
                    <Scene key='employeeCreate' component={EmployeeCreate} title='Create Emp'></Scene>
                </Scene>
                <Scene key ="employeeEdit" component={EmployeeEdit} title="Edit Employee"/>
            </Scene>
        </Router>
    );
};

export default RouterComponent;