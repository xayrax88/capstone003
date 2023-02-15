import React from 'react';
import './Cards.scss';
import CardItem from './CardItem';

export default function Cards() {
    return (
        <div className='cards'>
            <h1>How journaling helps</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            img src={'./images/img-2.png'}
                            text='Writing down your thoughts once a day can help you gain control of your emotions.'
                            // path='/'
                        />
                        <CardItem
                            img src={'./images/img-1.jpg'}
                            text='You have deeper thoughts than you realize, but they escape you because you don`t capture them. Journaling is known to help with mental health.'
                            label=''
                            // path='/sign-up'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}
