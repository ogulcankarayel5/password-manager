
import {apiConstants} from '../constants'
const API_AUTH = apiConstants.API_AUTH;

/**
 * Generate full url for muhsis internal api.
 * @param {*} url
 */
export function generateApiEndpoint(url) {
  return `${API_AUTH}/${url}`;
}
