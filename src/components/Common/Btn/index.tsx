import React from 'react'
import './style.scss'

export interface StandardComponentProps {
    href: string
    text: string
}

export default function Btn({href, text} : StandardComponentProps) {
    return (
        <a href={href} className='btn'>
            {text}
        </a>
    );
}