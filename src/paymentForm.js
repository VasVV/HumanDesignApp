import React, {Component, useState} from 'react';
import {Link} from 'react-router-dom';
import {loadStripe} from '@stripe/stripe-js';
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import {Button, Form, Spinner} from 'react-bootstrap';
import axios from 'axios';
import {useSelector, useDispatch, connect} from 'react-redux';
import firebase from 'firebase';

const stripePromise = loadStripe('pk_test_51IRxezLeEfBz7v63k9cbeDrQN070PKRpVeqOu6QcDibWFUFf1UpQeBp7P6HTFBQWjVuWr0OCEmUw6UUIuxMACRx500akoLgTlj');


const CheckoutFormInner = (props) => {
    const stripe = useStripe();
    const elements = useElements();
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
    const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement)
        });
        setLoading(true);
    if (!error) {
        console.log(paymentMethod);
        const { id } = paymentMethod;
        console.log('id');
        console.log(id)
        const data = await axios.post(`${window.location.origin}/checkout`, 
        {
            id,
            amount: props.price,
            description: props.name     
        }
        );
        if (data.data.message === "Sucess payment") {
            props.sucess(true);
            console.log('yes')
            dispatch({type: 'HASBOUGHT', payload: props.name});
            firebase.database()
            .ref('users/' + props.uid +'/productsBought/')
            .update( { [props.name]: true } ) 
            
        }
        console.log(data);
        
    } else {
        console.log(error);
        props.failure(error);
    } 
    setLoading(false);   
    }

    return (
        <>
        <Form onSubmit ={handleSubmit}>
            <CardElement options={{
                hidePostalCode: true
            }}/>
            <p classN>Precio: {props.price/100} eur</p>
            <br />
            <Button type='submit'>
                {loading ? <Spinner animation="border" /> : 'Comprar'}
            </Button>
           
        </Form>
        <br />
        </>
    )
}




export class CheckoutForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            paymentSucess: false,
            paymentFailure: null
        }
        this.success = this.success.bind(this);
        this.failure = this.failure.bind(this);
    }
    
    success(bool){
        if (bool) {
            this.setState({
                paymentSucess: true,
                paymentFailure: false
            })
        }
    }

    failure(x) {
        if(x) {
            this.setState({
                paymentFailure: x
            })
        }
        console.log(this.state)
    }

    render() {
        return (
            <>
            <CheckoutFormInner price={this.props.price} name={this.props.name} sucess={this.success} failure={this.failure} uid={this.props.uid} />
            {
                this.state.paymentSucess && <><h4>Pagado!</h4><Link to={this.props.redirect}><Button>Ver resultado</Button></Link></>             
            }
            {
                this.state.paymentFailure && <h4>Algo ha salido mal. Trata otra vez</h4>
            }
            </>
        )
    }

}

function mapStateToProps(state, ownProps) {
    return {
        uid: state.addUserData.uid
    };
  }

  export default connect(mapStateToProps)(CheckoutForm); 