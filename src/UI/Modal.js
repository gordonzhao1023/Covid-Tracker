import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import classes from './Modal.module.css';
import { useDispatch } from 'react-redux';
import { countryActions } from '../store/country-slice';

const backdrop = {
	visible: {
		opacity: 1,
	},
	hidden: {
		opacity: 0,
	},
};

const modal = {
	hidden: {
		y: '-100vh',
		opacity: 0,
	},
	visible: {
		y: '200px',
		opacity: 1,
		transition: { delay: 0.5 },
	},
};

const Modal = (props) => {
	const dispatch = useDispatch();

	const exitHandler = (e) => {
		e.preventDefault();
		dispatch(countryActions.toggleError());
	};

	return (
		<AnimatePresence exitBeforeEnter>
			<motion.div
				className={classes.backdrop}
				variants={backdrop}
				animate='visible'
				initial='hidden'
				exit='hidden'
			>
				<motion.div className={classes.modal} variants={modal}>
					<p>
						The country you entered does not exist. You will now see Global
						data!
					</p>
					<button onClick={exitHandler}>Got it!!</button>
				</motion.div>
			</motion.div>
		</AnimatePresence>
	);
};

export default Modal;
