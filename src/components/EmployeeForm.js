import React, {Component} from 'react';
import {View,Text,Picker} from 'react-native';
import {CardSection,Input} from './common'; 
import {connect} from 'react-redux';
import {employeeUpdate} from '../actions';


class EmployeeForm extends Component{
    render(){
        return(
            <View>
                 <CardSection>
                    <Input
                    lable="Name"
                    placeholder="NINJAs"
                    value={this.props.name}
                    onChangeText={value => this.props.employeeUpdate({prop: 'name',value})}
                    // onChangeText={values => this.props.employeeUpdate({prop: 'name',value})} ES6
                    />
                </CardSection>
                  
                <CardSection>
                    <Input
                    lable="Phone"
                    placeholder="9999-999-999"
                    value={this.props.phone}
                    onChangeText={value => this.props.employeeUpdate({prop: 'phone',value})}
                    />
                </CardSection>

                <CardSection >
                    <Text style={{fontSize: 18,paddingLeft: 20,paddingTop:10,}}>Shift</Text>
                    <Picker 
                    selectedValue={this.props.shift}
                    onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}
                    style={{ flex: 1 }}
                    >
                        <Picker.Item label="Monday" value="Monday" />
                        <Picker.Item label="Tuesday" value="Tuesday" />
                        <Picker.Item label="Wednesday" value="Wednesday" />
                        <Picker.Item label="Thursday" value="Thursday" />
                        <Picker.Item label="Friday" value="Friday" />
                        <Picker.Item label="Saturday" value="Saturday" />
                        <Picker.Item label="Sunday" value="Sunday" />
                    </Picker>
                </CardSection>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    const {name,phone,shift} = state.employeeForm;
    return ({name,phone,shift});
}

export default connect(mapStateToProps,{employeeUpdate})(EmployeeForm)