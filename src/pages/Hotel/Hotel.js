import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import LoadingIcon from '../../components/UI/LoadingIcon/LoadingIcon';
import useWebsiteTitle from '../../hooks/useWebsiteTitle';

export default function Hotel(props) {
	const { id } = useParams();
	const [hotel, setHotel] = useState(null);
	const [loading, setLoading] = useState(true);

  const setTitle = useWebsiteTitle();

	const fetchHotel = () => {
		setHotel({
			id: 2,
			name: 'Dębowy',
			city: 'Lublin',
			rating: 8.8,
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			image: '',
		});
    setTitle("Hotel - Dębowy")
		setLoading(false);
	};

	useEffect(() => {
		//pobieranie danych
		setTimeout(() => {
			fetchHotel();
		}, 500);
	}, []);

	return loading ? <LoadingIcon /> : <h1>Hotel: {hotel.name}</h1>;
}