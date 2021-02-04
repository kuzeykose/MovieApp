import { combineReducers } from 'redux'

import top10 from './top10'
import favourites from './favourites'
import search from './search'
import searchBar from './searchBar'
import main from './main'


export const rootReducer = combineReducers({
  top10,
  favourites,
  search,
  searchBar,
  main
});

export type RootState = {
  main: {
    trendingList: Array<Object>
  },
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
  },
  searchBar: {
    multiSearchList: Array<Object>
    text: string
  }
};