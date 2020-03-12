import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import { LinkTo as Link, NavigationContainer } from '../components/fridge/form_items/link';


class FormsPage extends React.Component {
    constructor(props) {
        super();

        this.state = {
            name: "",
            email: "",
            password: "",
        };
    }


    submitHandler = event => {
        event.preventDefault();
        event.target.classList.add('was-validated');
        let err = false;
        let err404 = false;
        let disabled = false;

        const obj = {
            'name': this.state.name,
            'email': this.state.email,
            'password': this.state.password
        };

        fetch('http://localhost:8000/api/users',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(obj)
            }
        )
            .then((response) => {
                err = response.status !== 200 ? true : false;
                err404 = response.status === 404 ? true : false;
                // response.headers.entries();
                localStorage.setItem('x-auth-token', response.headers.get('x-auth-token'));
                return response.json();
            })
            .then((response) => {
                if (err) {
                    if (err404) {
                        alert("Problem z serwerem, skontaktuj się z administratorem strony.")
                    }
                    let errContainer = document.getElementsByClassName('form-error')[0];
                    if (!disabled) {
                        disabled = true;
                        errContainer.innerHTML = response;
                        setTimeout(() => { errContainer.classList.add('closed') }, 2000)
                        setTimeout(() => { errContainer.innerHTML = ''; errContainer.classList.remove('closed'); disabled = false }, 3000)
                    }

                }
                else {
                    // przekierowanie albo alert
                    this.props.handleSuccessfulAuth(response);
                }
            })
    };

    changeHandler = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        return (
            <MDBContainer>
                <MDBRow>
                    <MDBCol md="6">
                        <form
                            className="needs-validation"
                            onSubmit={this.submitHandler}
                            noValidate
                        >
                            <h1 className="h4 text-center mb-4">Sign up</h1>
                            <p className="h4 text-center mb-4 form-error"></p>
                            <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                                Login
                            </label>
                            <input
                                value={this.state.name}
                                name="name"
                                onChange={this.changeHandler}
                                type="text"
                                id="defaultFormRegisterNameEx"
                                className="form-control"
                                minLength="6"
                                required
                            />
                            <br />
                            <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
                                Your email
                            </label>
                            <input
                                value={this.state.email}
                                name="email"
                                onChange={this.changeHandler}
                                type="email"
                                id="defaultFormRegisterEmailEx"
                                className="form-control"
                                minLength="6"
                                required
                            />
                            <br />
                            <label htmlFor="defaultFormRegisterPasswordEx" className="grey-text">
                                Password
                            </label>
                            <input
                                value={this.state.password}
                                name="password"
                                onChange={this.changeHandler}
                                type="password"
                                id="defaultFormRegisterPasswordEx"
                                className="form-control"
                                minLength="6"
                                required
                            />
                            <div className="text-center mt-4">
                                <MDBBtn color="unique" type="submit">
                                    Register
                                </MDBBtn>
                            </div>
                            <NavigationContainer><p>Are you already registered? </p><Link to="/login"> Login in here</Link></NavigationContainer>
                        </form>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        );
    }
}
export default FormsPage;