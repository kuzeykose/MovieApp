import Axios from 'axios'
import { URLtop10Tv } from '../../config/TmdbAPIKey'

export async function fetchTop20Tv() {
  const myURl = URLtop10Tv
  const response = await Axios.get(myURl)

  return response.data.results
}