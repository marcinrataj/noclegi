import ThemeContext from '../../context/themeContext';

const Footer = (props) => (
	<ThemeContext.Consumer>
		{({theme}) => (
			<div className={`text-center m-3 text-${theme}`}>noclegi 2024</div>
		)}
	</ThemeContext.Consumer>
);

export default Footer;
