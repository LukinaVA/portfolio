import React from 'react'
import Container from '../Common/Container';
import './Works.scss'
import Card from "./Card/Card";
import TodoApp from './Card/TodoApp.gif'
import MoGo from './Card/Mogo.gif';
import MNTN from './Card/MNTN.gif';

export default function Works() {
    return (
        <div className='works'>
            <Container>
                <h2 className='works__title'>Latest Works</h2>
                <h3 className='works__subtitle'>Click for more information</h3>
                <div className='works__content'>
                    <Card
                        title='TodoApp'
                        subtitle='application'
                        code='https://github.com/LukinaVA/TodoApp'
                        site='https://lukina.me/TodoApp'
                        bgImg={TodoApp}
                        description={[
                            'React',
                            'Typescript',
                            'Redux [Redux-thunk]',
                            'SCSS'
                        ]}
                    />
                    <Card
                        title='MoGo'
                        subtitle='landing page'
                        code='https://github.com/LukinaVA/MoGo'
                        site='https://lukina.me/MoGo'
                        bgImg={MoGo}
                        description={[
                            'HTML5 / CSS3',
                            'SCSS',
                            'BEM',
                            'JavaScript',
                            'Adaptive layout'
                        ]}
                    />
                    <Card
                        title='MNTN'
                        subtitle='landing page'
                        code='https://github.com/LukinaVA/MNTN'
                        site='https://lukina.me/MNTN'
                        bgImg={MNTN}
                        description={[
                            'HTML5 / CSS3',
                            'SCSS',
                            'BEM',
                            'JavaScript',
                            'Swiper',
                            'Adaptive layout'
                        ]}
                    />
                </div>
                <h2 className='works__last-word'>To be continued...</h2>
            </Container>
        </div>
    );
}