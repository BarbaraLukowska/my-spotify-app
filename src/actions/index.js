import axios from 'axios';
import { requestSuccess, createRequest, handleError } from './requests';
import queryString from 'query-string';

//?album_type=album&offset=10&limit=5

const BASE_URL = "https://api.spotify.com/v1"

export function getAlbums() {
  const parsed = queryString.parse(window.location.hash);
  const accessToken = parsed.access_token;
  const artistId = '5yjbUO1Jocui7RKE30zfLT'

  return (dispatch) => {
    dispatch(createRequest());
    return axios.get(`${BASE_URL}/artists/${artistId}/albums`, {
      headers: {'Authorization': 'Bearer ' + accessToken}
    })
    .then((response) => dispatch(requestSuccess(response.data.items, 'albums')))
    .catch(handleError(dispatch));
  }
}
