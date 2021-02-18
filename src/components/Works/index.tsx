import React, {MouseEvent} from 'react'
import Btn from '../Common/Btn';
import Container from '../Common/Container';
import './style.scss'
import '../Common/Btn/style.scss'
import MoGo from './MoGo.jpg'
import MNTN from './MNTN.jpg'

export default function Works() {
    function showDetails(e : MouseEvent) : void {
        e.preventDefault();
        let activeCard = document.documentElement.querySelector('.card');
        if (activeCard !== null) {
            activeCard.classList.add('active');
        }
    }

    return (
        <div className='works'>
            <Container>
                <h2 className='works__title'>Latest Works</h2>
                <div className='works__content'>
                    <div className='card'>
                        <div className='card__bg'>
                            <img src={MoGo}/>
                        </div>
                        <h3 className='card__name'>MoGo</h3>
                        <div className='card__details'>
                            <a href='https://lukina.me/MoGo/' target='_blank' className='card__link'>Site</a>
                            <a href='https://github.com/LukinaVA/MoGo' target='_blank' className='card__link'>Source code</a>
                        </div>
                    </div>

                    <div className='card'>
                        <div className='card__bg'>
                            <img src={MNTN}/>
                        </div>
                        <h3 className='card__name'>MNTN</h3>
                        <div className='card__details'>
                            <a href='https://lukina.me/MNTN/' target='_blank' className='card__link'>Site</a>
                            <a href='https://github.com/LukinaVA/MNTN' target='_blank' className='card__link'>Source code</a>
                        </div>
                    </div>
                </div>
                <h2 className='works__last-word'>To be continued...</h2>
            </Container>
        </div>
    );
}