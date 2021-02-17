import React from 'react'
import './style.scss'

export default function Container(props: { children: React.ReactNode; }) {
    return(
        <div className='container'>
            {props.children}
        </div>
    );
}