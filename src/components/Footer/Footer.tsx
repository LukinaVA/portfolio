import React from 'react'
import Container from '../Common/Container';
import './Footer.scss'

export default function Footer() {
    return(
        <footer className='footer'>
            <Container>
                <div className='footer__networks'>
                    <a href='https://github.com/LukinaVA' className='footer__link' target='_blank' rel='noreferrer'>Github</a>
                    <a href='https://vk.com/lukinaaaaaaa' className='footer__link' target='_blank' rel='noreferrer'>VK</a>
                    <a href='https://www.instagram.com/lukinaaa_a/' className='footer__link' target='_blank' rel='noreferrer'>Instagram</a>
                </div>
                <div className='footer__contact'>Telegram: <span>@LukinaVA</span></div>
            </Container>
        </footer>
    );
}