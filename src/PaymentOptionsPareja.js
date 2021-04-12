
import React, {Component} from "react";
import {Modal, Button} from 'react-bootstrap';



export default class PaymentOptionsPareja extends Component {
    constructor() {
        super();
        this.state = {
            modalOneIsOpened: false,
            modalTwoIsOpened: false,
        }
        this.openModalOne = this.openModalOne.bind(this);
        this.openModalTwo = this.openModalTwo.bind(this);
    }

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
     
    render() {
        return (
            
            <div className='pricingext'>
                <Modal show={this.state.modalOneIsOpened} onHide={this.state.modalOneIsOpened}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading 1</Modal.Title>
                    </Modal.Header>
                        <Modal.Body>
                            Modal 1
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={this.openModalOne}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.openModalOne}>
                            Save Changes
                        </Button>
                        </Modal.Footer>
                    </Modal>

                    <Modal show={this.state.modalTwoIsOpened} onHide={this.state.modalTwoIsOpened}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading 2</Modal.Title>
                    </Modal.Header>
                        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={this.openModalTwo}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.openModalTwo}>
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
                                    <h5 class="card-title text-muted text-uppercase text-center">Basico</h5>
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
            <h5 class="card-title text-muted text-uppercase text-center">Completo</h5>
            <h6 class="card-price text-center">$9<span class="period">/month</span></h6>
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
    </div>
  </div>
</section>
</div>
        )
    }

}