import { fetchTop10 } from '../../containers/top20Movie/network'
import { fetchTop20Tv } from '../../containers/top20Tv/network'

import typeToReducer, { setTypeDelimiter } from 'type-to-reducer'

import {
  createAsyncAction,
} from 'redux-promise-middleware-actions';

// Actions
const GET_TOP10 = 'GET_TOP10';
const GET_TOP20_TV = 'GET_TOP20_TV';

export const getTop20Movie = createAsyncAction(GET_TOP10, async () => {
  const data = await fetchTop10()
  return data
});

export const getTop20Tv = createAsyncAction(GET_TOP20_TV, async () => {
  const data = await fetchTop20Tv()
  return data
});

// Reducer
const initialState = {
  list: [],
  listTv: []
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case String(getTop20Movie.fulfilled):
      return {
        ...state,
        list: action.payload,
      };
    case String(getTop20Tv.fulfilled):
      return {
        ...state,
        listTv: action.payload,
      };
    default:
      return state;
  }
}
