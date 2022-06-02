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

async function getTotalShowRuntime(tvId: number) {
  const showEndpoint = '/tv/' + tvId;
  const suffix = '?api_key=' + apiKey;
  const showUrl = baseUrl + showEndpoint;

  const show = await axios.get(showUrl + suffix);
  let totalRuntime = 0;
  for (let i = 1; i <= show.data.number_of_seasons; i++) {
    const seasonUrl = `${showUrl}/season/${i}`;
    const season = await axios.get(seasonUrl + suffix);
    for (let j = 0; j < season.data.episodes?.length; j++) {
      totalRuntime += season.data.episodes[j]?.runtime;
    }
  }
  return totalRuntime;
}

export default { search, getTotalShowRuntime };
