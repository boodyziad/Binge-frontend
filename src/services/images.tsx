import config from '../config/config';

const baseUrl = config.imageBaseUrl;

function getImageUrl(path: string) {
  if (!path) return '';
  const endpoint = '/original' + path;
  return baseUrl + endpoint;
}

export default { getImageUrl };
