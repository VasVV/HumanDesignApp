import React, { Component } from "react";
import firebaseConfig from "./firebaseconfig";
import firebase from 'firebase';
import {Modal, Button} from 'react-bootstrap';
import { DatePicker, TimePicker } from 'antd';
import moment from 'moment';
import 'antd/dist/antd.css';
import GooglePlaces from "./GooglePlaces";
import {connect } from 'react-redux';
import axios from 'axios';
import { Redirect} from 'react-router-dom';

const dateFormat = 'DD-MM-YYYY';

class SocialLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            show: false,
            tob: '',
            dob: ''
        };
        this.facebookLogin = this.facebookLogin.bind(this);
        this.googleLogin = this.googleLogin.bind(this);
        this.twitterLogin = this.twitterLogin.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleOpen  = this.handleOpen.bind(this);
        this.onChangeTime = this.onChangeTime.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
      }

      onSubmit() {
          console.log(`https://api.humdes.com/api/partners/calculations/check/?date=${this.state.dob}&time=${this.state.tob}&place=${this.state.place}&name=${this.state.fname}&sex=male`)
        fetch(`https://api.humdes.com/api/partners/calculations/check/?date=${this.state.dob}&time=${this.state.tob}&place=${this.state.place}&name=${this.state.fname}&sex=male`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json; charset=utf-8',
              'Authorization-Token': "173da98e-dd8a227e-d2230912-78d06708",
            },
            mode: 'cors'
        }).then((res) => {
            console.log(res);
            return res.json();
        }).then((json) => {
            const results = json.result.results;
            console.log(results);
            this.setState({
                autoridad: results.authority,
                perfil: results.profile,
                definicion: results.definition,
                variables: 'накартинке',
                cruzIncarnacion: results.cross.name,
                estrategia: results.strategy,
                centros: 'накартинке',
                canales: results.summaries.chanels,
                puertas: [results.cross.person, results.cross.name], 
                tipo: results.type,
                bodygraph: results.bodygraph,
                cruz: results.cross  
            })
            console.log('url and filename')
            console.log(results.bodygraph);
            console.log(`${this.state.fname}${this.state.lname}.svg`)

            axios.post(`${window.location.origin}/downloadimg`, {
                params: {
                    url: results.bodygraph,
             filename: `${this.state.fname}${this.state.lname}.svg`,
                }
            });
        }).then((user) => {
            var user = firebaseConfig.auth().currentUser;
            var userId = user.uid;
            console.log(user);
            var userref = firebase.database().ref(('users/' + userId));
            userref.once("value",snapshot => {
                if (snapshot.exists()){
                  const userData = snapshot.val();
                  console.log("exists!", userData);
                  //???
                }
            });
            
                firebaseConfig.database().ref('users/' + userId).set({
                    firstName: this.state.fname,
                    lastName: this.state.lname,
                    fecha: this.state.dob,
                    hora: this.state.tob,
                    lugar: this.state.place,
                    email: this.state.email,
                    sexo: 'male',
                    bodygraph: this.state.bodygraph,
                    cruz: this.state.cruz,
                    hasCompletedInitialTest: false,
                    tipo: this.state.tipo,
                    autoridad: this.state.autoridad,
                    perfil: this.state.perfil,
                    definicion: this.state.definicion,
                    variables: this.state.variables,
                    cruzIncarnacion: this.state.cruzIncarnacion,
                    estrategia: this.state.estrategia,
                    centros: this.state.centros,
                    canales: this.state.canales,
                    puertas: this.state.puertas,
                    codigoDeVida: null,
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
              });
            
            

            var db = firebase.database().ref('users/' + userId);
            db.on('value', (snapshot) => {
                const data = snapshot.val();
                console.log('data');
                console.log(data);
                const adduserdata = 'ADDUSERDATA';
                this.props.dispatchUserData({type: adduserdata, payload: {...data, userId}});

               console.log('db data received')
            });


            this.setState({
                isLoggedIn: true
            })   
        })
      }

      componentDidUpdate(prevProps) {
        console.log('social login ', this.props);
        if (prevProps.userCity !== this.props.userCity) {
            console.log(this.props.userCity);
          this.setState({
              place: this.props.userCity
          })
      }
    }


      onChangeTime(e) {
        console.log(this.state);
     
      this.setState( {
          tob: e.format('HH:MM')
      })
    }

    onChangeDate(e) {
        this.setState({
            dob: e.format('DD-MM-YYYY')
        })
        console.log(this.state)
    }

      handleClose() {
          this.setState({
              show: false
          })
      }

      handleOpen() {
        this.setState({
            show: true
        })

      }

      facebookLogin() {
        const provider = new firebase.auth.FacebookAuthProvider();
        firebaseConfig
            .auth()
            .signInWithPopup(provider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
                var user = result.user;
             
                
                let fname = user.displayName.split(' ')[0];
                let lname = user.displayName.split(' ')[1];
                let email = user.email;
                this.setState({
                    show: true, 
                    fname,
                    lname,
                    email
                })
            })
            
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode + ' ' + errorMessage);
            });
      }

      googleLogin() {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebaseConfig.auth()
        .signInWithPopup(provider)
        .then((result) => {
            /** @type {firebase.auth.OAuthCredential} */    
            var user = result.user;
            let fname = user.displayName.split(' ')[0];
            let lname = user.displayName.split(' ')[1];
            let email = user.email;
            this.setState({
                show: true, 
                fname,
                lname,
                email
            })
        }).catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
           console.log(`${errorCode} ${errorMessage}`)
        });
      }



      twitterLogin() {
        var provider = new firebase.auth.TwitterAuthProvider();
        firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
            /** @type {firebase.auth.OAuthCredential} */
            var user = result.user;
            let fname = user.displayName;
            let lname = ' '
            let email = user.email;
            this.setState({
                show: true, 
                fname,
                lname,
                email
            })
            this.props.isLoggedIn(this.state.isLoggedIn);     
        }).catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(`${errorCode} ${errorMessage}`)
        });    
      }
      

    render() {
        return (
                <div className='social-button-block'>
                    <a className="btn btn-primary social-login-btn social-facebook" onClick={this.facebookLogin}><i className="fa fa-facebook"></i></a>
                    <a className="btn btn-primary social-login-btn social-twitter" onClick={this.twitterLogin}><i className="fa fa-twitter"></i></a>
                    <a className="btn btn-primary social-login-btn social-google" onClick={this.googleLogin}><i className="fa fa-google-plus"></i></a>
                    <Modal show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          
        </Modal.Header>
        <Modal.Body>
            <h1>Rellena tus datos</h1>
        Date of Birth
        <DatePicker format={dateFormat} onChange={this.onChangeDate}/>
        <br />
        Time of birth
        <TimePicker defaultValue={moment('00:00', 'HH:mm')} onChange={this.onChangeTime} name='tob' format='HH:mm' showNow={false} use12Hours={false}/> 
            <br />
            Place of birth
            <GooglePlaces />

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.onSubmit} >
            Submit
            {this.state.isLoggedIn ? <Redirect to="/dashboard" /> : '' }
          </Button>
        </Modal.Footer>
      </Modal>
                </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        userCity: state.userCity.label
    };
  }

  function mapDispatchToProps(dispatch) {
    return {
        dispatchUserData: (data) => dispatch({
            type: 'ADDUSERDATA',
            payload : data.payload
        })
    };
}


  export default connect(mapStateToProps, mapDispatchToProps)(SocialLogin); 