
import HeroImg from "../../assets/img/contact-hero.png";
import './contact.scss';
import { motion } from "framer-motion";
const Contact = () => {
    const stacks = {
        active: (custom: number) => ({ y: 0, transition: { duration: 0.5, delay: custom * 0.2 } }),
        inActive: { y: 50 },
    }

    const stacks2 = {
        active: (custom: number) => ({ y: 0, opacity: 1, transition: { duration: 0.5, delay: custom * 0.2 } }),
        inActive: { y: -50, opacity: 0 },
    }
    return (
        <section id="contact">
            <div className="container">
                <div className="form-section">
                    <motion.div initial="inActive" animate="active" variants={stacks2} custom={1} className="title-form">Contact Us Now</motion.div>
                    <motion.div initial="inActive" animate="active" variants={stacks2} custom={2} className="desc-form">We believe that every brand has a unique story to tell, and we are here to help you amplify that story through innovative and effective digital strategies.</motion.div>
                    <form action="">
                        <label htmlFor="name">
                            <motion.p initial="inActive" animate="active" variants={stacks} custom={3}>Name</motion.p>
                            <input type="text" name="name" id="name" required minLength={4} placeholder="Full Name" />
                        </label>
                        <label htmlFor="no-ho">
                            <motion.p initial="inActive" animate="active" variants={stacks} custom={5}>Telephone Number</motion.p>
                            <input type="number" name="no-ho" id="no-ho" min={10} max={20} required placeholder="Your Number" />
                        </label>
                        <label htmlFor="email">
                            <motion.p initial="inActive" animate="active" variants={stacks} custom={6}>Email</motion.p>
                            <input type="email" name="email" id="email" required placeholder="Your Email" />
                        </label>
                        <label htmlFor="message">
                            <motion.p initial="inActive" animate="active" variants={stacks} custom={7}>Message</motion.p>
                            <textarea name="message" id="message" cols={30} rows={10} placeholder="Example text"></textarea>
                        </label>
                        <button className="btn-submit" type="submit">Submit</button>
                    </form>
                </div>
                <div className="img-hero">
                    <img src={HeroImg} alt="Hero Image" width={537} height={745} />
                </div>
            </div>
        </section>
    )
}

export default Contact