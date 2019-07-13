import React,{Component} from 'react';
import {Text,View,StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {
    Card,
    CardSection,
    Input,
    Button,
    Spinner,
    Header,
} from './common';
import {emailChanged, passwordChanged,loginUser} from '../actions';  

 class LoginForm extends Component{
    onEmailChange(text){
        this.props.emailChanged(text);
    }
    onPasswordChange(text){
        this.props.passwordChanged(text);
    }

    onButtonPress(){
        const {email,password} = this.props;
        this.props.loginUser({email,password});
    }

    renderError(){
        if(this.props.error){
            return(
                <View style={{backgroundColor: 'white'}}>
                    <Text style={styles.errorTextStyle}>
                        {this.props.error}
                    </Text>
                </View>
            );
        }
    }

    renderButton(){
        if(this.props.loading){
            return <Spinner size='large'/>;
        }
        return(
            <Button onPress = {this.onButtonPress.bind(this)} >
                Login
            </Button>
        );
    }

    render(){
        return(
            <Card>
                <CardSection>
                    <Input
                        lable = "Email"
                        placeholder = "email@gmail.com"
                        onChangeText = {this.onEmailChange.bind(this)}
                        value ={this.props.email}
                    >
                    </Input>
                </CardSection> 
                
                <CardSection>
                    <Input
                        secureTextEntry
                        lable = "Password"
                        placeholder = "password"
                        onChangeText={this.onPasswordChange.bind(this)}
                        value ={this.props.password}
                    >
                    </Input>
                </CardSection> 
                {this.renderError()}
                <CardSection>
                    {this.renderButton()}
                </CardSection> 
            </Card>
        );
    }
}

const mapStateToProp = state => {
    
    return{
        email:state.auth.email,
        password:state.auth.password,
        error:state.auth.error,
        loading:state.auth.loading,
    };
};

export default connect(mapStateToProp, {
    emailChanged,passwordChanged,loginUser
})(LoginForm);


const styles = StyleSheet.create({
 errorTextStyle:{
    fontSize:20,
    color: 'red',
    alignSelf:'center',
 },
});