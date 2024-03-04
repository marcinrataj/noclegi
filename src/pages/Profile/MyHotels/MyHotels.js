import { useEffect, useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import axios from '../../../axios';
import {objectToArrayWithId} from '../../../helpers/objects'
import useAuth from '../../../hooks/useAuth';



export default function MyHotels(props) {
	const [auth] = useAuth()
	const { url } = useRouteMatch();
	const [hotels, setHotels] = useState([]);

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
	};

	useEffect(() => {
		fetchHotels();
	},[]);

	return (
		<div>
			{hotels ? (
				<table className='table'>
					<thead>
						<th>Nazwa</th>
						<th>Opcja</th>
					</thead>
					<tbody>
						{hotels.map(hotel => (
              <tr>
							<td>{hotel.name}</td>
							<td>
								<button className='btn btn-warning'>Edytuj</button>
								<button className='mx-1 btn btn-danger'>Usuń</button>
							</td>
						</tr>
            ))}
					</tbody>
				</table>
			) : (
				<p>Nie masz jeszcze żadnego hotelu.</p>
			)}
			<Link to={`${url}/dodaj`} className='btn btn-primary'>
				Dodaj hotel
			</Link>
		</div>
	);
}
