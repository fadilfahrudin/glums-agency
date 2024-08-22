
import HeroImg from "../../assets/img/contact-hero.png";
import './contact.scss';
import { motion, AnimatePresence } from "framer-motion";
import emailjs from '@emailjs/browser';
import React, { useRef, useState } from "react";


const ContactPage = () => {
    const form = useRef<HTMLFormElement>(null);
    const stacks = {
        active: (custom: number) => ({ y: 0, transition: { duration: 0.5, delay: custom * 0.2 } }),
        inActive: { y: 50 },
    }

    const stacks2 = {
        active: (custom: number) => ({ y: 0, opacity: 1, transition: { duration: 0.5, delay: custom * 0.2 } }),
        inActive: { y: -50, opacity: 0 },
    }
    const [alertMsg, setAlertMsg] = useState('Sending Email...');
    const [alert, setAlert] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        setAlert(true)
        e.preventDefault();
        emailjs
            .sendForm('service_3asbwyd', 'template_48s6tna', form.current!, {
                publicKey: 'Lso7x_QsohMVpzinT',
            }).then(
                () => {
                    setAlertMsg('Email Sent!');
                    setTimeout(() => {
                        setAlert(false)
                    }, 500)
                    setTimeout(() => {
                        window.location.reload();
                    }, 1000)
                },
                (error: { text: string; }) => {
                    console.log('FAILED...', error.text);
                }
            )
    }


    return (
        <section id="contact">
            <AnimatePresence> {alert && <motion.div transition={{ duration: 0.5 }} animate={{ scale: 1, y: 50 }} initial={{ scale: 0.5, y: -50 }} exit={{ scale: 0.5, y: -50 }} className="alert">{alertMsg}</motion.div>}</AnimatePresence>
            <div className="container">
                <div className="form-section">
                    <motion.div initial="inActive" animate="active" variants={stacks2} custom={1} className="title-form">Contact Us Now</motion.div>
                    <motion.div initial="inActive" animate="active" variants={stacks2} custom={2} className="desc-form">We believe that every brand has a unique story to tell, and we are here to help you amplify that story through innovative and effective digital strategies.</motion.div>

                    <form ref={form} onSubmit={(e) => handleSubmit(e)}>
                        <label htmlFor="user_name">
                            <motion.p initial="inActive" animate="active" variants={stacks} custom={3}>Name</motion.p>
                            <input type="text" name="user_name" placeholder="Full Name" />
                        </label>
                        <label htmlFor="user_number">
                            <motion.p initial="inActive" animate="active" variants={stacks} custom={4}>Telephone Number</motion.p>
                            <input type="number" name="user_number" placeholder="Your Number" />
                        </label>
                        <label htmlFor="user_email">
                            <motion.p initial="inActive" animate="active" variants={stacks} custom={5}>Email</motion.p>
                            <input type="email" name="user_email" placeholder="Your Email" />
                        </label>
                        <label htmlFor="message">
                            <motion.p initial="inActive" animate="active" variants={stacks} custom={6}>Message</motion.p>
                            <textarea name="message" id="message" cols={30} rows={10} placeholder="Your Message"></textarea>
                        </label>

                        <button className="btn-submit" type="submit" disabled={alert}>Submit</button>

                    </form>
                </div>
                <div className="img-hero">
                    <img src={HeroImg} alt="Hero Image" width={537} height={745} />
                </div>
            </div>
        </section>
    )
}

export default ContactPage