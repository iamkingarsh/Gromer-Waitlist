import './App.css'
import Form from './Form';
import { motion } from 'framer-motion';
import { EnvelopeAtFill, Facebook, Instagram, Linkedin, Twitter } from 'react-bootstrap-icons';
import { useMediaQuery } from 'react-responsive';

function WaitListPage() {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    return (
        <div>
            <div className="noise"></div>
            <motion.div
                initial={{ opacity: 0.2, x: 2 }}
                animate={isMobile ? { opacity: 0.8, y: -100, x: 2 } : { opacity: 0.6, x: -1200 }}
                onAnimationComplete={{ opacity: 0.2, x: 2 }}
                transition={{ duration: 6, type: "spring", repeat: Infinity }}
                className="ellipse-b1"></motion.div>
            <motion.div
                initial={{ opacity: 0.2, x: 2 }}
                animate={isMobile ? { opacity: 0.8, y: 100, x: 2 } : { opacity: 0.6, x: 1200 }}
                onEnded={{ opacity: 0.2, x: 2 }}
                transition={{ duration: 6, type: "spring", repeat: Infinity }}

                className="ellipse-p1"></motion.div>

            <div className='Grid'>
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 100, duration: 1, ease: "linear", }}
                    className="m-img">
                    <img className='H-img' src="assets/HeroImg.jpg" alt="" srcSet="" />
                </motion.div>
                <div className="m-content">
                    <div className='navbar '>
                        <div>


                            <motion.div className="navbar-logo "
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ type: "spring", stiffness: 100, duration: 1, ease: "linear", }}
                            >
                                <img
                                    src='assets/Primary Logo.svg' className='logo' />
                            </motion.div>
                        </div>
                    </div>
                    <motion.h1 className="m-contentHeading "
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 100, duration: 1, ease: "linear", }}
                    >
                        Welcome to <br /> Gromer!
                    </motion.h1>
                    <motion.p className="m-contentPara "
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 100 }}
                        transition={{ type: "spring", stiffness: 100, delay: 0.1, duration: 1, ease: "linear", }}
                    >Join Our WaitList!</motion.p>
                    <Form />
                    <footer>
                        <motion.div className="social-icons"

                        >
                            <motion.a
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 100 }}
                                transition={{ type: "spring", stiffness: 100, duration: 1, ease: "linear", }}
                                href="https://www.instagram.com/gromer.pro/" target='blank'><Instagram color='white' className='icons' /> </motion.a>

                            <motion.a
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 100 }}
                                transition={{ type: "spring", stiffness: 100, duration: 0.6, delay: 0.4, ease: "linear", }}
                                href="https://www.facebook.com/Gromer.pro" target='blank' ><Facebook color='white' className='icons' /></motion.a>
                            <motion.a
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 100 }}
                                transition={{ type: "spring", stiffness: 100, duration: 0.6, delay: 0.6, ease: "linear", }}
                                href="https://www.linkedin.com/company/gromer/" target='blank' > <Linkedin color='white' className='icons' /></motion.a>
                            <motion.a
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 100 }}
                                transition={{ type: "spring", stiffness: 100, duration: 0.6, delay: 0.6, ease: "linear", }}
                                target='blank'
                                href="https://twitter.com/Gromer_Pro" > <Twitter color='white' className='icons' /></motion.a>
                            <motion.a
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 100 }}
                                transition={{ type: "spring", stiffness: 100, duration: 0.6, delay: 0.2, ease: "linear", }}
                                href="mailto:info@gromer.pro" target='blank'> <EnvelopeAtFill color='white' className='icons' /></motion.a>
                        </motion.div>
                        <motion.div
                            initial={{ y: 60, opacity: 0 }}
                            animate={{ y: 0, opacity: 100 }}
                            transition={{ type: "spring", stiffness: 100, duration: 1, ease: "linear", }}
                        >
                            Copyright  2023  © Gromer | All Rights Reserved
                        </motion.div>
                        <motion.div
                            initial={{ y: 60, opacity: 0 }}
                            animate={{ y: 0, opacity: 100 }}
                            transition={{ type: "spring", stiffness: 100, duration: 1, delay: 0.2, ease: "linear", }}
                        >
                            Powered By: <a className='DD' href='https://www.designerdudes.tech'>DesignerDudes</a>
                        </motion.div>
                    </footer>

                </div>
            </div >

        </div>
    )
}

export default WaitListPage
