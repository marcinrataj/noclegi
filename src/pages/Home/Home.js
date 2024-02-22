import React, { useEffect, useContext } from 'react';
import LastHotel from '../../components/Hotels/LastHotel/LastHotel'
import useStateStorage from '../../hooks/useStateStorage'
import useWebsiteTitle from '../../hooks/useWebsiteTitle';
import BestHotel from '../../components/Hotels/BestHotel/BestHotel';
import Hotels from '../../components/Hotels/Hotels';
import ReducerContext from '../../context/reducerContext';
import LoadingIcon from '../../components/UI/LoadingIcon/LoadingIcon';

const backendHotels = [
	{
		id: 1,
		name: 'Pod Akacjami',
		city: 'Warszawa',
		rating: 8.3,
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		image: '',
	},
	{
		id: 2,
		name: 'Dębowy',
		city: 'Lublin',
		rating: 8.8,
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		image: '',
	},
];

export default function Home(props) {
	useWebsiteTitle('Strona główna');
  const [lastHotel, setLastHotel] = useStateStorage('last-hotel', null);
  const reducer = useContext(ReducerContext);

	const getBestHotel = () => {
		if (reducer.state.hotels.length < 2) {
			return null;
		} else {
			return reducer.state.hotels.sort((a, b) => (a.rating > b.rating ? 1 : -1))[0];
		}
	};

  const openHotel = (hotel) => {setLastHotel(hotel);};
  const removeLastHotel = () => {setLastHotel(null);};

  useEffect(() => {
			reducer.dispatch({ type: 'set-loading', loading: true });

		setTimeout(() => {
			reducer.dispatch({ type: 'set-hotels', hotels: backendHotels });
			reducer.dispatch({ type: 'set-loading', loading: false });
		}, 1000);
	}, []);



	return (
		<>
			{lastHotel ? (
				<LastHotel {...lastHotel} onRemove={removeLastHotel} />
			) : null}
			{getBestHotel() ? <BestHotel getHotel={getBestHotel} /> : null}
			<Hotels onOpen={openHotel} hotels={reducer.state.hotels} />
		</>
	);
}
