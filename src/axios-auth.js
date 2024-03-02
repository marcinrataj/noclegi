import axios from 'axios';

const instance = axios.create({
	baseURL:'https://identitytoolkit.googleapis.com/v1/',
  params: {
    key: 'AIzaSyDKW78JrEZZ_TXowtxvDlu0GYKljyKrB4o'
  }
});

export default instance;
