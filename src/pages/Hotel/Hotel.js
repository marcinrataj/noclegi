import { useEffect, useState, useContext } from "react"
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import ReducerContext from "../../context/reducerContext";

export default function Hotel(props) {
  const { id } = useParams();
  const [ hotel, setHotel ] = useState({});
  const reducer = useContext(ReducerContext)

  const fetchHotel = () => {
    setHotel({
      id: 2,
      name: 'Dębowy',
      city: 'Lublin',
      rating: 8.8,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: '',
    })
    reducer.dispatch({ type: 'set-loading', loading: false });
  }

  useEffect(()=> {
			reducer.dispatch({ type: 'set-loading', loading: true });
      //pobieranie danych

    setTimeout(() => {
      fetchHotel()
    }, 500)
  },[]);

  if (reducer.state.loading) return null;
 
  return (
      <h1>Hotel: {hotel.title}</h1>
  )

}