
import React from 'react';
import '../App.scss';
import { Button } from './Button';
import './Hsection.scss';


export default function Hsection() {
    return (
        <div className='h-container'>
            {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}

            <h1>Let your thoughts flow...</h1>
            <p>Your space & place to journal memorable moments in life.</p>
            <h2>Keep them forever in memory.</h2>
            <div className='h-btns'>
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >
                    GET STARTED
                </Button>

            </div>
        </div>
    );
}