import React, {useState} from 'react'
import {useSpring, animated as a} from "react-spring";
import './Card.scss'

export default function Card() {
    const [flipped, set] = useState(false);
    const {transform, opacity} = useSpring({
       opacity: flipped ? 1 : 0,
       transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
       config: {mass: 5, tension: 500, friction: 80}
    });

    const interpolatorFun = (o: number) => 1 - o;

    const handleClick = (e: React.MouseEvent) => {
        const codeLinks = Array.from(document.documentElement.querySelectorAll('.card__link'));
        if (!codeLinks.includes(e.currentTarget)) {
            set(state => !state);
        }
    };

    return(
        <div className='card' onClick={(e) => handleClick(e)}>
            <a.div className='card__front' style={{opacity: opacity.interpolate(o => interpolatorFun(Number(o))), transform}}>
                <div className='card__content'>
                    Click for more information
                </div>
            </a.div>
            <a.div className='card__back' style={{opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`)}}>
                <div className='card__content'>
                    <h4 className='card__title'>MoGo</h4>
                    <ul className='card__description'>
                        <li>HTML5 / CSS3</li>
                        <li>SCSS</li>
                        <li>Adaptive layout</li>
                        <li>JavaScript</li>
                    </ul>
                    <a href='https://github.com/LukinaVA/MoGo' className='card__link' target='_blank' rel='noreferrer'>Code</a>
                    <a href='https://lukina.me/MoGo/' className='card__link' target='_blank' rel='noreferrer'>Site</a>
                </div>
            </a.div>
        </div>
    );
}