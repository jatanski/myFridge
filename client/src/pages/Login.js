import React from 'react';
import LoginForm from '../components/LoginForm';

class Login extends React.Component {
    handleSuccessfulAuth = (data) => {
        this.props.handleLogin("data");
        this.props.history.push("/");
    }
    render() {
        return (
            <LoginForm handleSuccessfulAuth={this.handleSuccessfulAuth} />
        )
    }
}
export default Login;