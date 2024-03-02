import { Route, Redirect } from "react-router-dom";
import {  useContext } from "react";
import ReducerContext from "../../context/reducerContext";

export default function AuthenticatedRoute(props){
  const context = useContext(ReducerContext);
  // zanim pozwalam przejść do tej ścieżki to sprawdzam user
  return context.state.user ? <Route {...props}/> 
  : <Redirect to="/zaloguj" />
}