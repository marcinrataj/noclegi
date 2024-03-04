import React, { useEffect, useContext, useState } from 'react';
import LastHotel from '../../components/Hotels/LastHotel/LastHotel'
import useStateStorage from '../../hooks/useStateStorage'
import useWebsiteTitle from '../../hooks/useWebsiteTitle';
import BestHotel from '../../components/Hotels/BestHotel/BestHotel';
import Hotels from '../../components/Hotels/Hotels';
import LoadingIcon from '../../components/UI/LoadingIcon/LoadingIcon';
import axios from '../../axios';
import { objectToArrayWithId } from '../../helpers/objects';

export default function Home(props) {
	useWebsiteTitle('Strona główna');
  const [lastHotel, setLastHotel] = useStateStorage('last-hotel', null);

	const [loading, setLoading] = useState(true);
	const [hotels, setHotels] = useState([]);


	const getBestHotel = () => {
		if (hotels.length < 2) {
			return null;
		} else {
			return hotels.sort((a, b) => (a.rating > b.rating ? -1 : 1))[0];
		}
	};

  const openHotel = (hotel) => {setLastHotel(hotel);};
  const removeLastHotel = () => {setLastHotel(null);};
	const fetchHotels = async () => {
		try {
			///
			const res = await axios.get('/hotels.json')
      const newHotel = objectToArrayWithId(res.data)
      setHotels(newHotel)
			console.log(newHotel)
		} catch (ex) {
			console.log(ex.response);
		}
		setLoading(false)
	}

  useEffect(() => {
		fetchHotels();
	}, []);

	return loading ? <LoadingIcon/> : (
		<>
			{lastHotel ? (
				<LastHotel {...lastHotel} onRemove={removeLastHotel} />
			) : null}
			{getBestHotel() ? <BestHotel getHotel={getBestHotel} /> : null}
			<Hotels onOpen={openHotel} hotels={hotels} />
		</>
	);
}
