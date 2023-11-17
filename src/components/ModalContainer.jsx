import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

function ModalContainer({ waitlist, toggle }) {
    return (
        <div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ type: "spring", stiffness: 100, duration: 1, ease: "linear", }}
                className="modalBg"></motion.div>
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 100, duration: 1, ease: "linear", }}
                className="modal">
                {waitlist > 0 && (
                    <motion.h1
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 100, duration: 1, ease: "linear", }}
                        className='waitlist-heading'>You are <span className="waitlist-num">#{waitlist}</span> on the waitlist</motion.h1>
                )}
                <motion.button
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 100, duration: 1, delay: 0.2, ease: "linear", }}
                    onClick={toggle} className='submitBtn'>Ok</motion.button>
            </motion.div>

        </div>
    )
}

ModalContainer.propTypes = {
    waitlist: PropTypes.number.isRequired,
    toggle: PropTypes.func.isRequired
};

export default ModalContainer
