import React from 'react';
import RegisterForm from '../components/RegisterForm';

class Register extends React.Component {
    handleSuccessfulAuth = (data) => {
        this.props.handleLogin();
        this.props.history.push("/");
    }
    render() {
        return (
            <RegisterForm handleSuccessfulAuth={this.handleSuccessfulAuth} />
        )
    }
}
export default Register;