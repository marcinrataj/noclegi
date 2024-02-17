import React, { useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import Hotel from './Hotel/Hotel';
import styles from './Hotels.module.css';

const propTypes = {
	hotels: PropTypes.array.isRequired,
};

const slowFunction = (count) => {
	for (let i = 0; i < 800000000; i++) {}
	return count;
}
function Hotels(props) {
	const count = useMemo(() => {
		return slowFunction(props.hotels.length)
	}, [props.hotels.length])

	return (
		<div className={styles.container}>
			<h2 className={styles.title}>Oferty: ({count})</h2>
			{props.hotels.map((hotel) => (
				<Hotel key={hotel.id} {...hotel} />
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
