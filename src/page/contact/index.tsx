
import HeroImg from "../../assets/img/contact-hero.png";
import './contact.scss';
import { motion } from "framer-motion";
import DOMPurify from 'dompurify';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import ErrorMessage from "../../components/error-message";

const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i

Yup.addMethod(Yup.string, 'email', function validateEmail(message) {
    return this.matches(regex, {
        message,
        name: 'email',
        excludeEmptyString: true,
    });
});

const MessageSchema = Yup.object().shape({
    fullname: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    message: Yup.string().required('Required Message'),
    noHandphone: Yup.number().min(123, 'Min number 4 digit').max(9234567890113, `Max number 14 digit`).required('Required'),
});


interface FormValues {
    fullname: string;
    email: string;
    message: string;
    noHandphone: string;
}


const ContactPage = () => {
    const stacks = {
        active: (custom: number) => ({ y: 0, transition: { duration: 0.5, delay: custom * 0.2 } }),
        inActive: { y: 50 },
    }

    const stacks2 = {
        active: (custom: number) => ({ y: 0, opacity: 1, transition: { duration: 0.5, delay: custom * 0.2 } }),
        inActive: { y: -50, opacity: 0 },
    }

    const handleSubmit = (values: FormValues) => {
        const sanitizedValues = {
            fullname: DOMPurify.sanitize(values.fullname),
            email: DOMPurify.sanitize(values.email),
            message: DOMPurify.sanitize(values.message),
            noHandphone: DOMPurify.sanitize(values.noHandphone),
        }
        console.log(sanitizedValues);
        // Send data to API
    }


    return (
        <section id="contact">
            <div className="container">
                <div className="form-section">
                    <motion.div initial="inActive" animate="active" variants={stacks2} custom={1} className="title-form">Contact Us Now</motion.div>
                    <motion.div initial="inActive" animate="active" variants={stacks2} custom={2} className="desc-form">We believe that every brand has a unique story to tell, and we are here to help you amplify that story through innovative and effective digital strategies.</motion.div>

                    <Formik
                        initialValues={{ fullname: '', email: '', message: '', noHandphone: '' }}
                        validationSchema={MessageSchema}
                        onSubmit={values => handleSubmit(values)}
                    >
                        {({ errors, touched }) => (
                            <Form>
                                <label htmlFor="name">
                                    <motion.p initial="inActive" animate="active" variants={stacks} custom={3}>Name</motion.p>
                                    <Field type="text" name="fullname" placeholder="Full Name" />
                                    {errors.fullname && touched.fullname ? (
                                        <ErrorMessage message={errors.fullname} />
                                    ) : null}
                                </label>
                                <label htmlFor="no-ho">
                                    <motion.p initial="inActive" animate="active" variants={stacks} custom={5}>Telephone Number</motion.p>
                                    <Field type="number" name="noHandphone" placeholder="Your Number" />
                                    {errors.noHandphone && touched.noHandphone ? (
                                        <ErrorMessage message={errors.noHandphone} />
                                    ) : null}
                                </label>
                                <label htmlFor="email">
                                    <motion.p initial="inActive" animate="active" variants={stacks} custom={6}>Email</motion.p>
                                    <Field type="email" name="email" placeholder="Your Email" />
                                    {errors.email && touched.email ? (
                                        <ErrorMessage message={errors.email} />
                                    ) : null}
                                </label>
                                <label htmlFor="message">
                                    <motion.p initial="inActive" animate="active" variants={stacks} custom={7}>Message</motion.p>
                                    <Field name="message" as="textarea" placeholder="Example text" />
                                    {errors.message && touched.message ? (
                                        <ErrorMessage message={errors.message} />
                                    ) : null}
                                </label>
                                <button className="btn-submit" type="submit">Submit</button>
                            </Form>
                        )}
                    </Formik>

                </div>
                <div className="img-hero">
                    <img src={HeroImg} alt="Hero Image" width={537} height={745} />
                </div>
            </div>
        </section>
    )
}

export default ContactPage