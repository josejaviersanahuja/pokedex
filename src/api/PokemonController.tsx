import {API_URL} from '../utils/constants';

export const getPokemons = (page: number) => {
  const url = API_URL + `/pokemon?limit=20&offset=${page * 20}`;

  var requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };

  return fetch(url, requestOptions);
};
