import React, {  useState, useEffect } from "react";
import {Link, Redirect} from 'react-router-dom';
import firebaseConfig from "./firebaseconfig";
import firebase from 'firebase';
import SocialLogin from "./SocialLogin";
import {useSelector, useDispatch} from 'react-redux';
import {Alert} from 'react-bootstrap/';


function LoginFunctional() {
  const addUserData = useSelector(state => state.addUserData)
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [err, setErr] = useState(false);
  function handleLogin(){
    setIsLoggedIn(true);
    dispatch({type: 'HASLOGGEDIN'});
  }

  function handleChangeEmail(e){
    setEmail(e.target.value);
    console.log(e.target.value)
  }  

  function handleChangePassword(e) {
      setPassword(e.target.value)
      console.log(e.target.value)
  }
  function Submit(e){
    e.preventDefault();
    
    (async () => {
      
      try {
        let userCredential = await firebaseConfig.auth().signInWithEmailAndPassword(email, password);
        const uid = userCredential.user.uid;
      let db = firebase.database().ref('users/' + uid);
      db.on('value', (snapshot) => {
          const data = snapshot.val();
          const adduserdata = 'ADDUSERDATA';
                dispatch({type: adduserdata, payload: {...data, uid}});
                handleLogin();
      })
      } catch (error) {
        console.log('Error caught:', error.message);
        setErr('Comprueba tu correo y contrasena y trata otra vez')
      }
      

    })()
  }

 

  return ( 
     <div className='loginsigninext'>        
        <div className='loginsigninint'>
        <form onSubmit={Submit}>
        <Alert variant="danger" style={{visibility: err ? 'visible' : 'hidden' }}> {err} </Alert>
            <h3>Entrar</h3>
            <SocialLogin />
                
    

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Entra tu correo electronico" name = 'email' onChange = {handleChangeEmail}/>
                </div>

                <div className="form-group">
                    <label>Contraseña</label>
                    <input type="password" className="form-control" placeholder="Entra tu contrasena" name = 'password' onChange = {handleChangePassword} />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Entrar
                {isLoggedIn ? <Redirect to="/dashboard" /> : '' }
                
                 </button>
                <p className="forgot-password text-right">
                    Olvidaste <Link to={'/forgotpassword'}>tu contraseña?</Link>
                </p>
        </form>
    </div>
</div>
  )

};

export default LoginFunctional;