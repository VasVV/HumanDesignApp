
import React, { Component } from "react";
import { Link, Redirect } from 'react-router-dom';
import firebaseConfig from "./firebaseconfig";
import { DatePicker, TimePicker } from 'antd';
import moment from 'moment';
import 'antd/dist/antd.css';
import GooglePlaces from "./GooglePlaces";
import { connect } from 'react-redux';
import { ButtonGroup, ToggleButton } from 'react-bootstrap/';
import axios from 'axios';

const dateFormat = 'DD-MM-YYYY';

class SignUp extends Component {
    constructor() {
        super();
        this.state = {
            isLoggedIn: false,
            checkedMale: false,
            checkedFemale: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.isLoggedIn = this.isLoggedIn.bind(this);
        this.onChangeTime = this.onChangeTime.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.userCity !== this.props.userCity) {
            this.setState({
                place: this.props.userCity
            })
        }
    }






    onChangeTime(e) {

        this.setState({
            tob: e.format('HH:MM')
        })
    }

    onChangeDate(e) {
        this.setState({
            dob: e.format('DD-MM-YYYY')
        })

    }


    isLoggedIn(isLoggedIn) {
        if (isLoggedIn) {
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

        if (e.target.value === 'male') {
            this.setState(prevState => ({
                checkedMale: !prevState.checkedMale,
                checkedFemale: false,
            }))
        }
        if (e.target.value === 'female') {
            this.setState(prevState => ({
                checkedMale: false,
                checkedFemale: !prevState.checkedFemale,
            }))
        }
    }




    handleSubmit(e) {
        e.preventDefault();

        fetch(`https://api.humdes.com/api/partners/calculations/check/?date=${this.state.dob}&time=${this.state.tob}&place=${this.state.place}&name=${this.state.fname}&sex=${this.state.sex}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'Authorization-Token': "173da98e-dd8a227e-d2230912-78d06708",
            },
            mode: 'cors'
        })
            .then((res) => {
                return res.json();
            })
            .then(json => {
                const results = json.result.results;
                console.log(results.bodygraph);
                axios.post('http://localhost:3001/downloadimg', {
                    params: {
                        url: results.bodygraph,
                        filename: `${this.state.fname}${this.state.lname}.svg`,
                    }
                }).catch(errr => console.log(errr));
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
            }
            )
            .then(() => {
                firebaseConfig.auth()
                    .createUserWithEmailAndPassword(this.state.email, this.state.password)
                    .then((user) => {
                        var user = firebaseConfig.auth().currentUser;
                        user.updateProfile({
                            displayName: this.state.fname + ' ' + this.state.lname
                        })

                    })
                    .then((user) => {
                        var user = firebaseConfig.auth().currentUser;
                        user.sendEmailVerification();
                    }).then((user) => {


                        var user = firebaseConfig.auth().currentUser;
                        var userId = user.uid;
                        firebaseConfig.database().ref('users/' + userId).set({
                            firstName: this.state.fname,
                            lastName: this.state.lname,
                            fecha: this.state.dob,
                            hora: this.state.tob,
                            lugar: this.state.place,
                            email: this.state.email,
                            sexo: this.state.sex,
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
                                parejaBasico: false,
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
                    })
            });
    }


    render() {
        return (
            <div className='loginsigninext'>
                <div className='loginsigninint'>
                    <form onSubmit={this.handleSubmit}>

                        <h3>Registrarse</h3>

                        {this.state.isLoggedIn ? <Redirect to="/dashboard" /> : ''}

                        <div className="form-group">
                            <label>Nombre</label>
                            <input type="text" className="form-control" placeholder="First name" name='fname' onChange={this.onChange} />
                        </div>

                        <div className="form-group">
                            <label>Apellido</label>
                            <input type="text" className="form-control" placeholder="Last name" name='lname' onChange={this.onChange} />
                        </div>

                        <div className="form-group">
                            <label>Fecha de nacimiento</label>
                            <br />
                            <DatePicker format={dateFormat} onChange={this.onChangeDate} />
                        
                        </div>

                        <div className="form-group">
                            <label>Hora de nacimiento</label>
                            <br />
                            <TimePicker defaultValue={moment('00:00', 'HH:mm')} onChange={this.onChangeTime} name='tob' format='HH:mm' showNow={false} use12Hours={false} />

                        </div>

                        <div className="form-group">
                            <label>Ciudad y pais de nacimiento</label>
                            <GooglePlaces />
                           
                        </div>

                        <div className="form-group">
                            <label>Sexo</label>
                            <br />
                            <ButtonGroup toggle aria-label="Sex">
                                <ToggleButton type='radio' variant="secondary" onClick={this.onChange} name='sex' value='male' checked={this.state.checkedMale}>Male</ToggleButton>
                                <ToggleButton type='radio' variant="secondary" onClick={this.onChange} name='sex' value='female' checked={this.state.checkedFemale} >Female</ToggleButton>
                            </ButtonGroup>
                            
                        </div>

                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" className="form-control" placeholder="Enter email" name='email' onChange={this.onChange} />
                        </div>

                        <div className="form-group">
                            <label>Contraseña</label>
                            <input type="password" className="form-control" placeholder="Enter password" name='password' onChange={this.onChange} />
                        </div>

                        <button type="submit" className="btn btn-primary btn-block"  >Registrarse </button>

                        <p className="forgot-password text-right">
                            Ya eres registrado <Link to={"/"}>entrar?</Link>
                        </p>




                    </form>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        userCity: state.userCity.label
    };
}


export default connect(mapStateToProps)(SignUp);