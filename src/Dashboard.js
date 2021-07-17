
import React from "react";
import { Redirect, Link } from "react-router-dom";
import firebaseConfig from "./firebaseconfig";
import {connect} from 'react-redux';
import axios from 'axios';
import { ReactSVG } from 'react-svg';



export class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          userdata: [{
            firstName: ''
          }],
          rerendered: false
        };
        this.displayCredentials = this.displayCredentials.bind(this);
        this.displayParts = this.displayParts.bind(this);
        this.svgRef = React.createRef();
      }

      
   

    displayParts() {
      let cabeza = 'closed'; let ajna = 'closed'; let garganta = 'closed'; let gi = 'closed'; let corazon = 'closed'; 
      let plexosolar = 'closed'; let sacral = 'closed'; let bazo = 'closed'; let raiz = 'closed';
      const node = this.svgRef.current;
      const open = Object.values(node.container.childNodes[0].children[2].children[10].children[0].children);
      console.log(open);
                open.forEach(e => {
                    console.log('ee');
                       console.log(e.className.baseVal);
                    switch(e.className.baseVal) {
                        case 'centers_dzhi':
                            gi = 'opened';
                            break;
                         case 'centers_selezenka':
                             bazo = 'opened';
                             break;
                         case 'centers_temennoy':
                             cabeza = 'opened';
                             break;
                         case 'centers_adzhna':
                             ajna = 'opened';
                             break;
                         case 'centers_gorlovoy':
                             garganta = 'opened';
                             break;
                         case 'centers_sakralnyy':
                             sacral = 'opened';
                             break;
                         case 'centers_spletenie':
                             plexosolar = 'opened';
                             break;
                         case 'centers_kornevoy':
                             raiz = 'opened';
                             break;
                         case 'centers_ego':
                             corazon = 'opened';
                             break;                    
                    }
                });
                console.log('cabeza, ajna, garganta, gi, corazon, plexosolar, sacral, bazo, raiz');
                console.log(cabeza, ajna, garganta, gi, corazon, plexosolar, sacral, bazo, raiz);
                this.props.dispatch({type: 'ADDCENTERS', payload: {cabeza, ajna, garganta, gi, corazon, plexosolar, sacral, bazo, raiz} });
      
    
      
  }


      displayCredentials() {
        firebaseConfig.auth().onAuthStateChanged( (user) => {
            if (user) {  
              this.setState({
                  user: user.displayName
              });
            } else {
               this.setState({
                   user: false
               })  
            }
          });
        }
      componentDidMount() {
        
          this.displayCredentials();
          this.setState({userdata: this.props.userdata });
          
      }
      componentDidUpdate() {
        console.log(this.state);
        
      }

      componentWillUnmount() {
        this.displayParts();
      }
    render() {
        if (this.state.user === false) {
            return <Redirect to='/sign-in' />
        }
        
      return (
        <div className='dashboard'>
      <h1 className='header-dashboard'>Hola, {this.state.userdata.firstName} </h1>
      {this.state.userdata.firstName ? <ReactSVG ref={this.svgRef} id='bodygrap3h' src={require(`${window.location.origin}/src/img/bodygraphs/${this.state.userdata.firstName}${this.state.userdata.lastName}.svg`).default} /> : ''}
      <Link to={"/paymentoptions"}>
        <button className="btn btn-primary btn-block dashboard-btn">
          Diseno Individual
        </button>
      </Link>
      <Link to={"/paymentoptionspareja"}>
        <button className="btn btn-primary btn-block dashboard-btn">
          Pareja
        </button>
      </Link>
      <Link to={"/paymentoptionsfamilia"}>
        <button className="btn btn-primary btn-block dashboard-btn">
          Familia
        </button>
      </Link>
      <Link to={"/paymentoptionsempresa"}>
        <button className="btn btn-primary btn-block dashboard-btn">
          Empresarial
        </button>
      </Link>
      </div>
      );
    }
  }

  function mapStateToProps(state, ownProps) {
    return {
        userdata: state.addUserData
    };
  }


  export default connect(mapStateToProps)(Dashboard); 