import React, { useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import Hotel from './Hotel/Hotel';
import styles from './Hotels.module.css';
import useWebsiteTitle from '../../hooks/useWebsiteTitle';

const propTypes = {
	hotels: PropTypes.array.isRequired,
};

function Hotels(props) {

	return (
		<div className={styles.container}>
			<h2 className={styles.title}>Oferty:</h2>
			{props.hotels.map((hotel) => (
				<Hotel onOpen={props.onOpen} key={hotel.id} {...hotel} />
			))}
		</div>
	);
}

Hotels.propTypes = propTypes;

const areEqual = (prevProps, nextProps) => {
	return prevProps.hotels === nextProps.hotels;
};

// export default Hotels
export default React.memo(Hotels, areEqual);
