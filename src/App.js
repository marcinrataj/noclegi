import { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Hotels from './components/Hotels/Hotels';

class App extends Component {
	hotels = [
		{
		id: 1,
		name: 'Pod Akacjami',
		city: 'Warszawa',
		rating: 8.3,
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		image: '',
	},
	{
		id: 2,
		name: 'Dębowy',
		city: 'Lublin',
		rating: 8.8,
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		image: '',
	}]

	state = {
		hotels: this.hotels
	};

	searchHandler(term) {
		const hotels = [...this.hotels]
		.filter(x => x.name.toLowerCase().includes(term.toLowerCase))
		//wkładamy do stanu naszą nową zmienną 
		this.setState({ hotels });
	}

	render() {
		return (
			<div className='App'>
				<Header onSearch={(term) => this.searchHandler(term)} />
				<Menu />
				<Hotels hotels={this.state.hotels} />
			</div>
		);
	}
}

export default App;
