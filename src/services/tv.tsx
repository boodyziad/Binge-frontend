import axios from 'axios';
import config from '../config/config';
import _ from 'lodash';
import SearchItem from '../models/searchItem';

const baseUrl = config.baseUrl;
const apiKey = config.apiKey;

async function search(query: string) {
  const endpoint = `/search/tv?api_key=${apiKey}&query=${query}`;
  const url = baseUrl + endpoint;

  const all_items = await axios.get(url);
  const items: SearchItem[] = [];

  for (let i = 0; i < 3; i++) {
    items.push(
      _.pick(all_items.data.results[i], [
        'id',
        'name',
        'backdrop_path',
        'poster_path',
      ])
    );
  }

  return items;
}

export default { search };
