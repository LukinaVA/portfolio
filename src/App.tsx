import React, {useState} from "react";
import Intro from "./components/Intro/Intro";
import Works from "./components/Works/Works";
import Footer from "./components/Footer/Footer";
import Modal from "./components/Modal/Modal";
import Preloader from "./components/Preloader/Preloader";

export default function App() {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = (e: React.MouseEvent) => {
        e.preventDefault();
        setModalIsOpen(true);
        document.documentElement.style.overflow = 'hidden';
    };

    const closeModal = (e: React.MouseEvent) => {
        e.preventDefault();
        setModalIsOpen(false);
        document.documentElement.style.overflow = '';
    };

    window.onload = function () {
        document.body.classList.add('loaded-hiding');
        window.setTimeout(function () {
            document.body.classList.add('loaded');
            document.body.classList.remove('loaded-hiding')
        }, 500)
    }

    return (
        <>
            <Preloader />
            <Intro openModal={openModal}/>
            <Works />
            <Footer />
            <Modal isOpen={modalIsOpen} closeModal={closeModal} />
        </>
    );
}