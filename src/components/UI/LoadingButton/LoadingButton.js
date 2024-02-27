export default function LoadingButton(props) {
	const className = props.className || 'btn-primary';

	return props.loading ? (
		<button className={`btn ${className}`} type='button' disabled>
			<span
				className='spinner-border spinner-border-sm'
				role='status'
				aria-hidden='true'
			></span>
			<span className='sr-only'>
				<span> </span>Ładowanie...
			</span>
			<span> </span>Sprawdzanie danych logowania...
		</button>
	) : (
		<button {...props} className={`btn ${className} mt-3`}>{props.children}</button>
	);
}
