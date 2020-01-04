import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';

class FormsPage extends React.Component {
    state = {
        name: "",
        email: "",
        password: "",
    };

    submitHandler = event => {
        event.preventDefault();
        event.target.classList.add('was-validated');
        let err = false;
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
                    console.log(response);
                    // przekierowanie albo alert
                    alert('rejestracja zakończone powodzeniem :P')
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
                        </form>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        );
    }



}

// const FormPage = () => {
//     return (
//         <MDBContainer>
//             <MDBRow>
//                 <MDBCol md="6">
//                     <form>
//                         <p className="h4 text-center mb-4">Sign up</p>
//                         <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
//                             Your login
//                         </label>
//                         <input
//                             type="text"
//                             id="defaultFormRegisterNameEx"
//                             className="form-control"
//                         />
//                         <br />
//                         <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
//                             Your email
//                         </label>
//                         <input
//                             type="email"
//                             id="defaultFormRegisterEmailEx"
//                             className="form-control"
//                         />
//                         <br />
//                         <label
//                             htmlFor="defaultFormRegisterPasswordEx"
//                             className="grey-text"
//                         >
//                             Your password
//                         </label>
//                         <input
//                             type="password"
//                             id="defaultFormRegisterPasswordEx"
//                             className="form-control"
//                         />
//                         <div className="text-center mt-4">
//                             <MDBBtn color="unique" type="submit">
//                                 Register
//                             </MDBBtn>
//                         </div>
//                     </form>
//                 </MDBCol>
//             </MDBRow>
//         </MDBContainer>
//     );
// };

export default FormsPage;