import React, {useState} from 'react'
import {useSpring, animated as a} from "react-spring";
import './Card.scss'

type cardProps = {
    title: string,
    subtitle: string,
    description: string[],
    code: string,
    site: string,
    bgImg: any
};

export default function Card({title, subtitle, description, code, site, bgImg} : cardProps) {
    const [flipped, set] = useState(false);
    const {transform, opacity} = useSpring({
       opacity: flipped ? 1 : 0,
       transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
       config: {mass: 5, tension: 500, friction: 80}
    });

    const interpolatorFun = (o: number) => 1 - o;

    const handleClick = (e: React.MouseEvent) => {
        const cardBack = e.currentTarget.querySelector('.card__back') as HTMLElement;
        const codeLinks = Array.from(document.documentElement.querySelectorAll('.card__link'));
        const targetElement = e.target as HTMLElement;
        if (!codeLinks.includes(targetElement)) {
            set(state => !state);
        } else {
            if (+cardBack.style.opacity < 1) {
                e.preventDefault();
                set(state => !state);
            }
        }
    };

    const cardStyle = {
        opacity: opacity.interpolate(o => interpolatorFun(Number(o))),
        transform,
        background: `url(${bgImg}) center`,
        backgroundSize: 'cover'
    };

    return(
        <div className='card' onClick={(e) => handleClick(e)}>
            <a.div className='card__front' style={cardStyle}/>
            <a.div className='card__back' style={{opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`)}}>
                <div className='card__content'>
                    <h4 className='card__title'>{title}</h4>
                    <h5 className='card__subtitle'>{subtitle}</h5>
                    <ul className='card__description'>
                        {description.map(item => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                    <div className='card__links'>
                        <a href={code} className='card__link' target='_blank' rel='noreferrer'>Code</a>
                        <a href={site} className='card__link' target='_blank' rel='noreferrer'>Site</a>
                    </div>
                </div>
            </a.div>
        </div>
    );
}