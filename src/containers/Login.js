import React, {Component} from 'react';
import home from './../images/home-bg.jpg';

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
                            <h3>Sign In/Sign Up</h3>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}