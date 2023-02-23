import React from 'react';
import { Link } from 'react-router-dom';
import { MDBFooter, MDBContainer } from 'mdb-react-ui-kit';
import './Footer.scss'

function Footer() {
    return (
        <MDBFooter className='footer fixed-bottom'>

            <MDBFooter className='footer-container text-center text-white' style={{ backgroundColor: '#21081a' }}>

                <div className='footer-logo text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>

                    <Link to='/'>[M]<i className='fa-solid fa-feather' /></Link> © 2023

                </div>

            </MDBFooter>

        </MDBFooter>
    );
}

export default Footer;