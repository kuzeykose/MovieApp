import { combineReducers } from 'redux'

import top10 from './top10'
import favourites from './favourites'
import search from './search'


export const rootReducer = combineReducers({
  top10,
  favourites,
  search
});

export type RootState = {
  top10: {
    list: Array<Object>
    listTv: Array<Object>
  },
  favourites: {
    favouritesList: Array<Object>
  },
  search: {
    searchList: Array<Object>
    text: string
  }
};