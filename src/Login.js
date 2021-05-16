import React, { Component } from "react";
import {Link} from 'react-router-dom';
import firebaseConfig from "./firebaseconfig";
import firebase from 'firebase';
import SocialLogin from "./SocialLogin";




export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            error: false,
            isLoggedIn: false,
            userId: null,
            firstName: '',
            lastName: '',
                    email: '',
                    hasCompletedInitialTest: false,
                    autoridad: '',
                    perfil: '',
                    definicion: '',
                    variables: '',
                    cruzIncarnacion: '',
                    estrategia: '',
                    centros: '',
                    canales: '',
                    puertas: '',
                    codigoDeVida: '',
                    productsBought: {
                        orientacion: false,
                        personalBasico: false,
                        personalCompleto: false,
                        personalSeguimiento: false,
                        parejaBasico:false,
                        parejaCompleto: false,
                        familia: {
                            numero: '',
                            familiaBasico: false,
                            familiaCompleto: false
                        },
                        empresarialBasico: false,
                        empresarialCompleto: false,
                        relacionesEmpresariales: false
                    }
              

        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.isLoggedIn = this.isLoggedIn.bind(this);
        
      }

      isLoggedIn(isLoggedIn){
        if(isLoggedIn) {
          this.setState({
            isLoggedIn: true
          })
        }
      }
      
      onChange(e) {
          let name = e.target.name;
          let value = e.target.value;
          this.setState({
           [name]: value
          })
      }
      
      handleSubmit(e) {
          e.preventDefault();
          (async () => {
            const userCredential = await firebaseConfig.auth().signInWithEmailAndPassword(this.state.email, this.state.password).catch(e => console.log(e));
            const uid = userCredential.user.uid;
            this.setState({
                isLoggedIn: true,
            });
            console.log('IN!!!!')
            let db = firebase.database().ref('users/' + uid);
            db.on('value', (snapshot) => {
                const data = snapshot.val();
                this.setState({
                     firstName: data.firstName,
                     lastName: data.lastName,
                     autoridad: data.autoridad
                })
            });

          })();
    
        }
    render() {
        
        return (
            
            <div className='loginsigninext'>
                
                <div className='loginsigninint'>
            <form onSubmit={this.handleSubmit}>
                <h3>Log In</h3>
                { this.state.error &&
  <h4 className="errorMessage"> Please check your username and password and try again </h4> }
                <SocialLogin isLoggedIn={this.isLoggedIn} />
                

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" name = 'email' onChange = {this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" name = 'password' onChange = {this.onChange} />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit {this.state.isLoggedIn === true ? <>{this.state.autoridad}</> : '' } </button>
                <p className="forgot-password text-right">
                    Forgot <Link to={'/forgotpassword'}>password?</Link>
                </p>
            </form>
            </div>
            </div>
        );
    }
}