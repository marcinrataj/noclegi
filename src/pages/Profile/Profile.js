import { Switch, Route, NavLink, useRouteMatch } from 'react-router-dom';
import ProfileDetails from './ProfileDetails/ProfileDetails';
import MyHotels from './MyHotels/MyHotels';
export default function Profile() {
	const { path, url } = useRouteMatch();

	// throw new Error('Problem z internetem');

	return (
		<div className='card'>
			<div className='card-header'>
				<h2>Mój profil</h2>
			</div>
			<div className='card-body'>
				<ul className='nav nav-tabs'>
					<li className='nav-item'>
						<NavLink className='nav-link' to={`${url}`}>
							Profil
						</NavLink>
					</li>
					<li className='nav-item'>
						<NavLink className='nav-link' exact to={`${url}/hotele`}>
							Hotele
						</NavLink>
					</li>
				</ul>

				<div className='pt-4'>
					<Switch>
						<Route path={`${path}/hotele`} component={ProfileDetails} />
						<Route path={`${path}`} component={MyHotels} />
					</Switch>
				</div>
			</div>
		</div>
	);
}
