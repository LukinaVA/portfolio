import React from 'react'
import './style.scss'

export default function Modal() {
    return (
        <div className='modal'>
            <div className='modal__content'>
                <div className='modal__part modal__part_left'>
                    <h4 className='modal__title'>About Me</h4>
                    <h5 className='modal__subtitle'>Frontend developer</h5>
                    <div className='modal__info'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus corporis deserunt ex, ipsum labore, libero maiores non possimus praesentium provident quia tenetur ut vero. Earum labore maiores nisi perferendis quia?
                    </div>
                </div>
                <div className='modal__part modal__part_right'>
                    <h4 className='modal__title'>Let`s talk ;)</h4>
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