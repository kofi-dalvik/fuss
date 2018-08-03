import React, {Component} from 'react';
import home from './../images/home-bg.jpg';
import {FButton, FInput} from './../components';

export default class Login extends Component{
    constructor (props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    render () {
        return (
            <div className="login">
                <div className="row justify-content-center no-gutters">
                    <div className="col-12 col-md-6">
                        <div className="home">
                            <img src={home} alt="home" />
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="form">
                            <div className="row justify-content-center">
                                <div className="col-12 col-sm-10 col-md-8">
                                    <h3>Sign In/Sign Up</h3>
                                    <div className="text-center">
                                        <FInput classNames={{icon: 'fa fa-envelope'}} type="text" placeholder="Enter Your Email"/>
                                        <FInput classNames={{icon: 'fa fa-key'}} type="password" placeholder="Enter Your Password"/>
                                        <FButton classNames={{button: 'btn-block bg-orange-gradient btn-1', icon: 'btn-1-icon fa fa-lock'}}>Login to your account</FButton>
                                        <FButton classNames={{button: 'btn-block bg-yellow-gradient btn-1', icon: 'btn-1-icon fa fa-edit'}}>Create a new Account</FButton>
                                        <hr/>
                                        <FButton classNames={{button: 'btn-block bg-facebook-blue btn-1', icon: 'btn-1-icon fa fa-facebook'}}>Login with Facebook</FButton>
                                        <FButton classNames={{button: 'btn-block bg-twitter-blue btn-1', icon: 'btn-1-icon fa fa-twitter'}}>Login with Twitter</FButton>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}