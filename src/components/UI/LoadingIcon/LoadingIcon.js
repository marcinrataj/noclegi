import ThemeContext from '../../../context/themeContext';
export default function LoadingIcon(props) {
	return (
		<ThemeContext.Consumer>
			{(value) => (
				<div className='d-flex justify-content-center'>
					<div
						className={`spinner-border m-5 text-${value}`}
						role='status'
					></div>
				</div>
			)}
		</ThemeContext.Consumer>
	);
}
