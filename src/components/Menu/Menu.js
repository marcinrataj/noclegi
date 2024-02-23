import style from './Menu.module.css';
import useAuth from '../../hooks/useAuth';
import { Link, NavLink } from 'react-router-dom/cjs/react-router-dom.min';

function Menu() {
	// const auth = useContext(AuthContext);
	const [auth, setAuth] = useAuth();

	const login = (e) => {
		e.preventDefault();
		setAuth(true);
	};

	const logout = (e) => {
		e.preventDefault();
		setAuth(false);
	};
	return (
		<div className={`${style.menuContainer}`}>
			<ul className={style.menu}>
				<li className={`${style.menuItem}`}>
					<NavLink exact to='/' activeClassName={style.menuItemActive}>
						Home
					</NavLink>
				</li>

				{auth ? (     
					<>
						<li className={style.menuItem}>
							<NavLink to='/profil' activeClassName={style.menuItemActive}>
								Mój profil
							</NavLink>
						</li>
						<li className={style.menuItem}>
							<a href='#' onClick={logout}>
								Wyloguj
							</a>
						</li>
					</>
				) : (
					<li className={style.menuItem `td-underline`}>
						<a href='#' onClick={login}>
							Zaloguj
						</a>
					</li>
				)}
			</ul>
		</div>
	);
}

export default Menu;
