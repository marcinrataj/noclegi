import React from 'react';

function Searchbar() {
	return (
		<div className='d-flex'>
				<input
					// style={{
					// 	width: 'calc(100% - 20px)',
					// }}
					className='form-control'
					type='text'
					placeholder='Szukaj...'
				/>
			<div className='col'>
      <button className='btn btn-primary'>Szukaj</button>
			</div>
		</div>
	);
}

export default Searchbar;
