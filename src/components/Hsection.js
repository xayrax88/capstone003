import React from 'react';
import '../App.scss';
import { Button } from './Button';
import './Hsection.scss';


function Hsection() {
    return (
        <div className='h-container'>
            {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}

            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for?</p>
            <div className='h-btns'>
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >
                    GET STARTED
                </Button>
                <Button
                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                    onClick={console.log('hey')}
                >
                    WATCH TRAILER <i className='far fa-play-circle' />
                </Button>
            </div>
        </div>
    );
}

export default Hsection;