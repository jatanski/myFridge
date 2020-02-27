import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import '../scss/components/login.scss';

class FormsPage extends React.Component {
    state = {
        name: "",
        password: "",
    };

    submitHandler = async (event) => {
        event.preventDefault();
        event.target.classList.add('was-validated');
        let err = false;
        let disabled = false;

        let fd = new FormData(event.target);
        fd = Array.from(fd);
        const obj = {};
        fd.forEach((el) => { obj[el[0]] = el[1] });

        fetch('http://localhost:8000/api/auth',
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
                return response.json();
            })
            .then((response) => {
                if (err) {
                    let errContainer = document.getElementsByClassName('form-error')[0];
                    if (!disabled) {
                        disabled = true;
                        errContainer.innerHTML = response;
                        setTimeout(() => { errContainer.classList.add('closed') }, 2000)
                        setTimeout(() => { errContainer.innerHTML = ''; errContainer.classList.remove('closed'); disabled = false }, 3000)
                    }

                }
                else {
                    localStorage.setItem('x-auth-token', response);
                    // przekierowanie albo alert
                    // alert('logowanie zakończone powodzeniem :P')
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
                            <h1 className="h4 text-center mb-4">Sign in</h1>
                            <p className="h4 text-center mb-4 form-error"></p>
                            <label htmlFor="FormLogin" className="grey-text">
                                Login
                            </label>
                            <input
                                value={this.state.name}
                                name="name"
                                onChange={this.changeHandler}
                                type="text"
                                id="FormLogin"
                                className="form-control"
                                minLength="6"
                                required
                            />
                            <br />
                            <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
                                Password
                            </label>
                            <input
                                value={this.state.password}
                                name="password"
                                onChange={this.changeHandler}
                                type="password"
                                id="defaultFormLoginPasswordEx"
                                className="form-control"
                                minLength="6"
                                required
                            />
                            <div className="text-center mt-4">
                                <MDBBtn color="indigo" type="submit">Login</MDBBtn>
                            </div>
                        </form>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        );
    }
}



export default FormsPage;