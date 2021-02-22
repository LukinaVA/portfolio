import React from 'react'
import Container from '../Common/Container';
import './Works.scss'
import Card from "./Card/Card";

export default function Works() {
    return (
        <div className='works'>
            <Container>
                <h2 className='works__title'>Latest Works</h2>
                <div className='works__content'>
                    <Card/>
                    <Card/>
                </div>
                <h2 className='works__last-word'>To be continued...</h2>
            </Container>
        </div>
    );
}