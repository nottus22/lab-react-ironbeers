import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Home from '../../src/assets/house.png';
import './navbar.css';

export default class Navbar extends Component {
    render() {
        return (
            <Link to='/'>
                <div className='navbar'>
                    <img src={Home} alt='home'/>
                </div>
            </Link> 
        );
    }
}