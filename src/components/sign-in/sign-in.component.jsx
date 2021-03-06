import React, {Component} from 'react';

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button-component";
import {signInWithGoogle} from "../../firebase/firebase.utils";
import './sign-in.style.scss';

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }


    handleSubmit = event => {
        event.preventDefault();
        this.setState({email: '', password: ''});
    };


    handleChange = event => {
        const {value, name} = event.target;

        this.setState({[name]: value})
    };


    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        type="email"
                        name='email'
                        value={this.state.email}
                        required={true}
                        handleChange={this.handleChange}
                        label='Email'
                    />

                    <FormInput
                        type="password"
                        name='password'
                        value={this.state.password}
                        required={true}
                        handleChange={this.handleChange}
                        label='Password'
                    />

                    <div className="buttons">
                        <CustomButton type="submit">SIGN IN</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>SIGN IN WITH GOOGLE</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}


export default SignIn;