import Axios from 'axios'
import { URLsearch } from '../../config/TmdbAPIKey'

export async function searchItems(item: string) {
  const myURl = URLsearch(item)
  const response = await Axios.get(myURl)
  return response.data.results
}