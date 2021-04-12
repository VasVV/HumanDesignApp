import React, { Component } from "react";
import firebaseConfig from "./firebaseconfig";

export default class Forgotpassword extends Component {
    constructor() {
        super();
        this.state = {
            email: null,
            error: false
        };
        this.emailCatch = this.emailCatch.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    emailCatch(e) {
        let email = e.target.value;
        this.setState({
            email: email
        })
        console.log(this.state);
    }

    handleSubmit(e) {
        e.preventDefault();
        firebaseConfig.auth().sendPasswordResetEmail(
            this.state.email, null)
            .catch( (error) => {
             this.setState({
                 error: true
             })   
             console.log(error)
            });
    }

    render() {
        return (
            <div className='loginsigninext'>
                <div className='loginsigninint'>
                    <form>
                    <h3>Olvidaste tu contraseña?</h3>
                    { this.state.error &&
    <h4 className="errorMessage"> Por favor comprueba tu e-mail y trata otra vez </h4> }
                    <div className='form-group'>
                        <label>Email</label>
                        <input type="email" className="form-control" placeholder="Enter email" onChange={this.emailCatch}/>
                        <button type="submit" className="btn btn-primary btn-block" onClick={this.handleSubmit}>Reestablecer contraseña</button>
                    </div>
                </form>
                </div>
                </div>
            
        )
    }
}