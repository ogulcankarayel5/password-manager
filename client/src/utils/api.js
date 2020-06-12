
import {apiConstants} from '../constants'
const API_BASE = apiConstants.API_BASE;

/**
 * Generate full url for muhsis internal api.
 * @param {*} url
 */
export function generateApiEndpoint(url) {
  return `${API_BASE}/${url}`;
}
