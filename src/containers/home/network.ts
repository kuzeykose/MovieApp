import Axios from 'axios'
import { URLMultiSearch } from '../../config/TmdbAPIKey'

export async function searchMultiItems(item: string) {
  const myURl = URLMultiSearch(item)
  const response = await Axios.get(myURl)
  return response.data.results
}