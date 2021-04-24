import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {connect} from 'react-redux';
import Particles from 'react-particles-js';


import SignUp from "./Signup";
import Forgotpassword from './Forgotpassword';
import Dashboard from './Dashboard';
import firebaseConfig from './firebaseconfig';
import PaymentOptions from './PaymentOptions';
import PaymentOptionsPareja from "./PaymentOptionsPareja";
import PaymentOptionsFamilia from "./PaymentOptionsFamilia";
import PaymentOptionsEmpresa from "./PaymentOptionsEmpresa";
import LoginFunctional from './Loginfunctional';

import Result from './resultado';
import ResultadoCompleto from './resultadocompleto';


export class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
        isLoggedIn: false
    }
    this.signOut = this.signOut.bind(this);
  }


  componentDidUpdate(prevProps) {
    if(prevProps.isLoggedIn !== this.props.isLoggedIn){
      this.setState({isLoggedIn: this.props.isLoggedIn })
    }
  }

  signOut() {
    firebaseConfig.auth().signOut().then(() => {
      this.props.dispatch({type: 'HASLOGGEDIN'});
    }).catch((error) => {
      console.log(error);
    });
 
  }


  render() {
    return (
      <Router>
        <div className="App">
          <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="container">
              <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav ml-auto">
                { !this.state.isLoggedIn ? (
                  <li className="nav-item">
                    <Link className="nav-link" to={"/"}>Login</Link>
                  </li>) : ''}
                  { !this.state.isLoggedIn ? (
                  <li className="nav-item">
                    <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
                  </li>) : ''}
                  { this.state.isLoggedIn ? (
                  <li className="nav-item">
                    <Link className="nav-link" onClick={this.signOut} to={"/"}>Sign out</Link>
                  </li>) : ''}
                </ul>
              </div>
            </div>
          </nav>
        
          <div className="auth-wrapper">
          <Particles id='particles' params={{
                        "particles": {
                            "number": {
                                "value": 100
                            },
                            "size": {
                                "value": 3
                            }
                        },
                        "interactivity": {
                          "detect_on": "window",
                            "events": {
                                "onhover": {
                                    "enable": true,
                                    "mode": "grab"
                                }
                            }
                        }
                    }}  />
            <div className="auth-inner">
              <Switch>
                <Route exact path='/' component={LoginFunctional} />
                <Route path="/sign-in" component={LoginFunctional} />
                <Route path="/sign-up" component={SignUp} />
                <Route path='/forgotpassword' component={Forgotpassword} />
                <Route path='/dashboard' >
                  <Dashboard />
                </Route>
                <Route path= "/paymentoptions" component={PaymentOptions} />
                <Route path="/paymentoptionspareja" component={PaymentOptionsPareja} />
                <Route path="/paymentoptionsfamilia" component={PaymentOptionsFamilia} />
                <Route path="/paymentoptionsempresa" component={PaymentOptionsEmpresa} />
                <Route path='/resultado' component={Result} />
                <Route path='/resultadocompleto' component={ResultadoCompleto}   />  
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}


function mapStateToProps(state, ownProps) {
  return {
      isLoggedIn: state.hasLoggedIn
  };
}

export default connect(mapStateToProps)(App); 