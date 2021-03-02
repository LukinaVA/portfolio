import React from 'react'
import './Modal.scss'

type ModalProps = {
    isOpen: boolean,
    closeModal: (e: React.MouseEvent) => void
};

export default function Modal({isOpen, closeModal} : ModalProps) {
    const handleOutsideClick = (e: React.MouseEvent) => {
        const modalBg = document.documentElement.querySelector('.modal');
        if (e.target === modalBg) {
            closeModal(e);
        }
    }

    return (
        <div className='modal' hidden={!isOpen} onClick={(e) => handleOutsideClick(e)}>
            <div className='modal__content'>
                <div className='modal__part modal__part_left'>
                    <h4 className='modal__title'>About Me</h4>
                    <h5 className='modal__subtitle'>Junior Frontend developer</h5>
                    <div className='modal__info'>
                        Hello! My name is Lera and I`m Junior Frontend Developer. For the present I`m completing
                        my third year of Software Engineering at Peter the Great St. Petersburg Polytechnic University.
                        I`m interested in developing various interfaces and always open to new projects!
                    </div>
                </div>
                <div className='modal__part modal__part_right'>
                    <a href='#' className='modal__btn' onClick={(e)=>closeModal(e)}/>
                    <h4 className='modal__title'>Let `s talk ;)</h4>
                    <h5 className='modal__subtitle'>You can also write to me in a Telegram: <span>@LukinaVA</span></h5>
                    <form action='mailto:lukina-valeriya@mail.ru' className='modal__form contact-form'>
                        <label>
                            Name
                            <input type='text' className='contact-form__field'/>
                        </label>
                        <label>
                            Email
                            <input type='email' className='contact-form__field'/>
                        </label>
                        <label>
                            Message
                            <textarea className='contact-form__field'/>
                        </label>
                        <input type='submit' className='contact-form__btn' value='Send Message'/>
                    </form>
                </div>
            </div>
        </div>
    );
}