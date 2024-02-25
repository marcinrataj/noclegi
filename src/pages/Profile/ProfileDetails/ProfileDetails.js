import { useState } from 'react';
import LoadingButton from '../../../components/UI/LoadingButton/LoadingButton';
export default function ProfileDetails(props) {
	const [email, setEmail] = useState('adam@tworcastron.pl');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);
	const [valid, setValid] = useState(null);

	const submit = (e) => {
		e.preventDefault();
		setLoading(true);

		setTimeout(() => {
			//zapisywanie 

			setLoading(false);
		}, 500);
	};

	return (
		<form onSubmit={submit}>
			<div className='form-group'>
				<label>Email</label>
				<input
					type='email'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					className='form-control'
				/>
			</div>
			<div className='form-group'>
				<label>Hasło</label>
				<input
					type='password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					className='form-control'
				/>
			</div>
			<LoadingButton loading={loading}>Zaloguj</LoadingButton>
		</form>
	);
}
