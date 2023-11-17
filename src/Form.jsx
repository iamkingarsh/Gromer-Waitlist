import { useState, useEffect } from "react";
import { auth, db } from './firebase';
import { addDoc, collection, getDocs } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import ModalContainer from "./components/ModalContainer";
import { motion } from "framer-motion";
import { XCircle } from 'react-bootstrap-icons';
import { useMediaQuery } from "react-responsive";
import { css } from '@emotion/react';
import { ScaleLoader } from 'react-spinners';


const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  
`;
function Form() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState('');
    const [waitlistPosition, setWaitlistPosition] = useState(0);
    const [isOpen, setIsOpen] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false);
    const isMobile = useMediaQuery({ maxWidth: 767 });

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!name || !email) {
            setError('Please fill in all fields');
            return;
        }

        try {
            setIsSubmitting(true);
            const { user } = await createUserWithEmailAndPassword(auth, email, 'password')
            const userRef = collection(db, 'gromer-init-users');
            const snapshot = await getDocs(userRef);
            const currentCount = snapshot.size;
            const position = currentCount + 1;


            await addDoc(collection(db, 'gromer-init-users'), {
                fullName: name,
                email: email,
                userId: user.uid,
                userNo: position
            });

            setIsOpen(true)
            setWaitlistPosition(position);
            // // console.log('Data stored in Firestore with ID:', docRef.id);


        } catch (error) {
            if (error.code === 'auth/invalid-email') {
                setError('Invalid email address');
            } else if (error.code === 'auth/email-already-in-use') {
                setError('Email already in use');
            } else {
                setError('Error storing data');
            }
            setError('Error sending email:', error);
        } finally {
            setIsSubmitting(false);
        }

        setName('');
        setEmail('');
    }

    const toggleModal = () => setIsOpen(false)
    useEffect(() => {
        setInterval(() => {
            setError('');
        }, 6000);
    }, [6000]);

    return (
        <motion.div

        >
            {
                error && <motion.div
                    initial={isMobile ? { x: 30, y: 0 } : { x: 620, y: -250 }}
                    whileInView={isMobile ? { x: 30, y: -250 } : { x: 222, y: -250 }}
                    className="errorDiv"> <motion.p className="error">{error} <XCircle color="darkred" onClick={() => setError('')} className="CloseIcon" />  </motion.p> </motion.div>


            }
            {isOpen && <ModalContainer waitlist={waitlistPosition} toggle={toggleModal} />}

            <form className='form' onSubmit={handleSubmit}>
                <motion.div className="form-div"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 100 }}
                    transition={{ type: "spring", stiffness: 100, duration: 1, ease: "linear", }}
                >
                    <label htmlFor="Full Name">Full Name</label>
                    <input required value={name} onChange={(e) => setName(e.target.value)} className='emailInput' type="text" id='Full Name' placeholder='Full Name' />
                </motion.div>
                <motion.div className="form-div"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 100 }}
                    transition={{ type: "spring", stiffness: 100, delay: 0.2, duration: 1, ease: "linear", }}
                >

                    <label htmlFor="Email">Email Address</label>
                    <input required value={email} onChange={(e) => setEmail(e.target.value)} className='emailInput' type="email" name="email" id="email" placeholder='Eg. Karen@gromer.pro' />
                </motion.div>


                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 100 }}
                    transition={{ type: "spring", stiffness: 100, delay: 0.5, duration: 1, ease: "linear", }}
                    whileFocus={{ scale: 1.05 }} whileTap={{ scale: 1.05 }} whileHover={{ y: -4 }} onClick={handleSubmit} onKeyPress={handleSubmit} disabled={!name || !email} className='submitBtn' type="submit" >
                    {isSubmitting ? (< ScaleLoader color="white" loading={true} css={override} size={12} height={16} />) : ("Get Early Access")}
                </motion.div>

            </form>
        </motion.div >
    )
}

export default Form
