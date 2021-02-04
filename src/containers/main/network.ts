import Axios from 'axios'
import { Trending } from '../../config/TmdbAPIKey'

export async function fetchTrending() {
  const myURl = Trending
  const response = await Axios.get(myURl)
  return response.data.results
}


