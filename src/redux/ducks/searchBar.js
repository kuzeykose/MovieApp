import { searchMultiItems } from '../../containers/home/network'

import {
  createAction,
  createAsyncAction,
} from 'redux-promise-middleware-actions';

// Actions
const GET_MULTISEARCH_ITEMS = 'GET_MULTISEARCH_ITEMS';
const SET_MULTISEARCH_ITEM = 'SET_MULTISEARCH_ITEM'
const SET_MULTISEARCH_ITEM_WHEN_NO_TEXT = 'SET_MULTISEARCH_ITEM_WHEN_NO_TEXT'

export const getMultiSearchItems = createAsyncAction(GET_MULTISEARCH_ITEMS, async (searchText) => {
  const data = await searchMultiItems(searchText)
  return data
});

export const setMultiSearchItem = createAction(SET_MULTISEARCH_ITEM, (text) => text);
export const setMultiSearchItemsWhenNoText = createAction(SET_MULTISEARCH_ITEM_WHEN_NO_TEXT, (text) => text);


// Reducer
const initialState = {
  multiSearchList: [],
  text: ''
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case String(getMultiSearchItems.fulfilled):
      return {
        ...state,
        multiSearchList: action.payload,
      };
    case SET_MULTISEARCH_ITEM_WHEN_NO_TEXT:
      return {
        ...state,
        multiSearchList: [],
      };
    case SET_MULTISEARCH_ITEM:
      return {
        ...state,
        text: action.payload,
      };
    default:
      return state;
  }
}
