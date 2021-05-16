import React, {Component} from "react";
import {Modal, Button } from 'react-bootstrap';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from "./paymentForm";
import PaypalButton from "./PaypalButton";


const stripePromise = loadStripe('pk_test_51IRxezLeEfBz7v63k9cbeDrQN070PKRpVeqOu6QcDibWFUFf1UpQeBp7P6HTFBQWjVuWr0OCEmUw6UUIuxMACRx500akoLgTlj');


export default class PaymentOptions extends Component {
    constructor() {
        super();
        this.state = {
            modalOneIsOpened: false,
            modalTwoIsOpened: false,
            modalThreeIsOpened: false,
            modalFourIsOpened: false,
            showPaypal: false
        }
        this.openModalOne = this.openModalOne.bind(this);
        this.openModalTwo = this.openModalTwo.bind(this);
        this.openModalThree = this.openModalThree.bind(this);
        this.openModalFour = this.openModalFour.bind(this);
        this.showPaypalButtons = this.showPaypalButtons.bind(this);
       
    }

    showPaypalButtons() {
      this.setState({ showPaypal: true });
    };

    openModalOne() {
        this.setState(prevState => ({
            modalOneIsOpened: !prevState.modalOneIsOpened
          }));
        }
      
    openModalTwo() {
        this.setState(prevState => ({
            modalTwoIsOpened: !prevState.modalTwoIsOpened
          }));
        }
    openModalThree() {
        this.setState(prevState => ({
            modalThreeIsOpened: !prevState.modalThreeIsOpened
          }));
        }    
        openModalFour() {
          this.setState(prevState => ({
              modalFourIsOpened: !prevState.modalFourIsOpened
            }));
          } 
     
    render() {
        return (
            
            <div className='pricingext'>
                <Modal show={this.state.modalOneIsOpened} onHide={this.state.modalOneIsOpened}>
                    <Modal.Header>
                        <Modal.Title>Basic design</Modal.Title>
                    </Modal.Header>
                        <Modal.Body>
                            <Elements stripe={stripePromise}>
                              <CheckoutForm price='1000' name='orientacion' redirect='/resultado' />
                            </Elements>
                          <PaypalButton price='10' description='orientacion' />
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={this.openModalOne}>
                            Cerrar
                        </Button>
                        </Modal.Footer>
                    </Modal>

                    <Modal show={this.state.modalTwoIsOpened} onHide={this.state.modalTwoIsOpened}>
                    <Modal.Header closeButton>
                        <Modal.Title>Completo</Modal.Title>
                    </Modal.Header>
                        <Modal.Body>
                          <Elements stripe={stripePromise}>
                                <CheckoutForm price='50000' name='personalBasico' redirect='/resultadocompleto' />
              
                          </Elements>
                          <PaypalButton price='50' description='personalBasico' />
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={this.openModalTwo}>
                            Cerrar
                        </Button>
                
                        </Modal.Footer>
                    </Modal>

                    <Modal show={this.state.modalThreeIsOpened} onHide={this.state.modalThreeIsOpened}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading 3</Modal.Title>
                    </Modal.Header>
                        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={this.openModalThree}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.openModalThree}>
                            Save Changes
                        </Button>
                        </Modal.Footer>
                    </Modal>

                    <Modal show={this.state.modalFourIsOpened} onHide={this.state.modalFourIsOpened}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading 4</Modal.Title>
                    </Modal.Header>
                        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={this.openModalFour}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.openModalFour}>
                            Save Changes
                        </Button>
                        </Modal.Footer>
                    </Modal>
                    
            <section class="pricing py-5">
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <div class="card mb-5 mb-lg-0">
                                 <div class="card-body">
                                    <h5 class="card-title text-muted text-uppercase text-center">Basic design</h5>
                                    <h6 class="card-price text-center">$10<span class="period">/month</span></h6>
                                    <hr />
                                    <ul class="fa-ul">
                                        <li><i class="bi bi-check2"></i>Single User</li>
                                        <li><span class="fa-li"><i class="fas fa-check"></i></span>5GB Storage</li>
                                        <li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited Public Projects</li>
                                        <li><span class="fa-li"><i class="fas fa-check"></i></span>Community Access</li>
                                        <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Unlimited Private Projects</li>
                                        <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Dedicated Phone Support</li>
                                        <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Free Subdomain</li>
                                        <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Monthly Status Reports</li>
                                    </ul>
                                    <a href="#" class="btn btn-block btn-primary text-uppercase" onClick={this.openModalOne}>Button</a>
                    </div>
        </div>
      </div>
    
      <div class="col">
        <div class="card mb-5 mb-lg-0">
          <div class="card-body">
            <h5 class="card-title text-muted text-uppercase text-center">Design completo</h5>
            <h6 class="card-price text-center">$50<span class="period">/month</span></h6>
            <hr />
            <ul class="fa-ul">
              <li><span class="fa-li"><i class="fas fa-check"></i></span><strong>5 Users</strong></li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>50GB Storage</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited Public Projects</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Community Access</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited Private Projects</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Dedicated Phone Support</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Free Subdomain</li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Monthly Status Reports</li>
            </ul>
            <a href="#" class="btn btn-block btn-primary text-uppercase" onClick={this.openModalTwo}>Button</a>
          </div>
        </div>
      </div>
      
      <div class="col">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title text-muted text-uppercase text-center">Libro</h5>
            <h6 class="card-price text-center">$49<span class="period">/month</span></h6>
            <hr />
            <ul class="fa-ul">
              <li><span class="fa-li"><i class="fas fa-check"></i></span><strong>Unlimited Users</strong></li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>150GB Storage</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited Public Projects</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Community Access</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited Private Projects</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Dedicated Phone Support</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span><strong>Unlimited</strong> Free Subdomains</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Monthly Status Reports</li>
            </ul>
            <a href="#" class="btn btn-block btn-primary text-uppercase" onClick={this.openModalThree}>Button</a>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title text-muted text-uppercase text-center">Sesion adicional </h5>
            <h6 class="card-price text-center">$49<span class="period">/month</span></h6>
            <hr />
            <ul class="fa-ul">
              <li><span class="fa-li"><i class="fas fa-check"></i></span><strong>Unlimited Users</strong></li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>150GB Storage</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited Public Projects</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Community Access</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited Private Projects</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Dedicated Phone Support</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span><strong>Unlimited</strong> Free Subdomains</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Monthly Status Reports</li>
            </ul>
            <a href="#" class="btn btn-block btn-primary text-uppercase" onClick={this.openModalFour}>Button</a>
          </div>
        </div>
      </div>



    </div>
  </div>
</section>
</div>
        )
    }

}