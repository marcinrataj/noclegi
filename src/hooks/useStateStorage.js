import { useState } from 'react';

function useStateStorage(key, defaultValue) {
	const [state, setState] = useState(() => {
    //.. sprawdzana jest wartość localstorage
		const storageValue = window.localStorage.getItem(key);
    //.. jeśli istnieje to przypisuje wartość z localstorage
		return storageValue ? JSON.parse(storageValue) : defaultValue;
			 
	});

	const setValue = (val) => {
		setState(val);
		//.. przekształcamy z powrotem na string'a
		window.localStorage.setItem(key, JSON.stringify(val));
	};

	return [state, setValue];
}

export default useStateStorage;
