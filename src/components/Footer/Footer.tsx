import React from 'react'
import Container from '../Common/Container';
import './Footer.scss'

export default function Footer() {
    return(
        <footer className='footer'>
            <Container>
                <div className='footer__networks'>
                    <a href='https://github.com/LukinaVA' className='footer__link'>Github</a>
                    <a href='https://vk.com/lukinaaaaaaa' className='footer__link'>VK</a>
                    <a href='https://www.instagram.com/lukinaaa_a/' className='footer__link'>Instagram</a>
                </div>
                <div className='footer__contact'>Telegram: @LukinaVA</div>
            </Container>
        </footer>
    );
}