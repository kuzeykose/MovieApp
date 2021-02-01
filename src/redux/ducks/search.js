import { searchItems } from '../../containers/search/network'

import {
  createAction,
  createAsyncAction,
} from 'redux-promise-middleware-actions';

// Actions
const GET_SEARCH_ITEMS = 'GET_SEARCH_ITEMS';
const SET_SEARCH_ITEM = 'SET_SEARCH_ITEM'


export const getSearchItems = createAsyncAction(GET_SEARCH_ITEMS, async (searchText) => {
  const data = await searchItems(searchText)
  return data
});

export const setSearchItem = createAction(SET_SEARCH_ITEM, (text) => text);


// Reducer
const initialState = {
  searchList: [],
  text: ''
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case String(getSearchItems.fulfilled):
      return {
        ...state,
        searchList: action.payload,
      };
    case SET_SEARCH_ITEM:
      return {
        ...state,
        text: action.payload,
      };
    default:
      return state;
  }
}
