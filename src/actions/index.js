import axios from 'axios';
import { requestSuccess, createRequest, handleError } from './requests';
import queryString from 'query-string';

const BASE_URL = "https://api.spotify.com/v1"

export function getAlbums(id) {
  const parsed = queryString.parse(window.location.hash);
  const accessToken = parsed.access_token;

  return (dispatch) => {
    dispatch(createRequest());
    return axios.get(`${BASE_URL}/artists/${id}/albums`, {
      headers: {'Authorization': 'Bearer ' + accessToken}
    }).then((response) => dispatch(requestSuccess(response.data.message, 'albums')))
      .catch(handleError(dispatch));
  }
}
