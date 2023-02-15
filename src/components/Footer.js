import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <div className='footer-container'>
            <div className='footer-wrap'>
                <div className='footer-logo'>
                    <Link to='/' className='footer-logo'>
                        [M]EMORIA
                        <i className='fa-solid fa-feather' />
                    </Link>
                </div>
                <small className='website-rights'>[M]<i className='fa-solid fa-feather' /> © 2023</small>
            </div>
        </div>
    );
}