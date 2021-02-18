import React from 'react'
import Btn from '../Common/Btn';
import Container from '../Common/Container';
import './style.scss'
import MoGo from './MoGo.jpg'
import MNTN from './MNTN.jpg'

export default function Works() {
    return (
        <div className='works'>
            <Container>
                <h2 className='works__title'>Latest Works</h2>
                <div className='works__content'>
                    <div className='works__card card'>
                        <div className='card__bg'>
                            <img src={MoGo}/>
                        </div>
                        <div className='card__content'>
                            <h3 className='card__name'>MoGo</h3>
                            <Btn href='#' text='More Details'/>
                        </div>
                    </div>

                    <div className='works__card card'>
                        <div className='card__bg'>
                            <img src={MNTN}/>
                        </div>
                        <div className='card__content'>
                            <h3 className='card__name'>MNTN</h3>
                            <Btn href='#' text='More Details'/>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}