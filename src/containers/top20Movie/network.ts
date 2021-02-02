import Axios from 'axios'
import { URLtop10 } from '../../config/TmdbAPIKey'

export async function fetchTop10() {
  const myURl = URLtop10
  const response = await Axios.get(myURl)
  return response.data.results
}