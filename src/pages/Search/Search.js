import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { objectToArrayWithId } from "../../helpers/objects";
import axios from "../../axios";
import { useEffect, useState } from "react";
import Hotels from '../../components/Hotels/Hotels';

export default function Search(){

const {term} = useParams()
const [hotels, setHotels] = useState([])

  const search = async () => {
		try {
			/// pobieram wszystkie hotele
			const res = await axios.get('/hotels.json')
      const newHotel = objectToArrayWithId(res.data)
      .filter( hotel => hotel.name.includes(term))
      setHotels(newHotel)
			console.log(newHotel)
		} catch (ex) {
			console.log(ex.response);
		}
	};

  useEffect(() => {
    search()
  },[term])
  return(
    <div>
    <h2>Wyniki dla frazy "{term}":</h2>
    <Hotels  hotels={hotels}/>
    </div>
  )
}