import React from 'react'
import './style.scss'

export interface StandardComponentProps {
    href: string
    text: string
}

export default function Btn({href, text} : StandardComponentProps) {
    const rippleEffect = (e: React.MouseEvent) => {
        const eventTargetEl = e.target as HTMLElement;
        const x = e.clientX - eventTargetEl.offsetLeft;
        const y = e.clientY - eventTargetEl.offsetTop;

        let ripples = document.createElement('span');
        ripples.style.left = x + 'px';
        ripples.style.top = y + 'px';
        eventTargetEl.appendChild(ripples);

        setTimeout(() => {
            ripples.remove()
        }, 1000);
    }

    return (
        <a href={href} className='btn' onClick={rippleEffect}>
            {text}
        </a>
    );
}