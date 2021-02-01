import { fetchTop10 } from '../../containers/top10/network'
import typeToReducer, { setTypeDelimiter } from 'type-to-reducer'

import {
  createAsyncAction,
} from 'redux-promise-middleware-actions';

// Actions
const GET_TOP10 = 'GET_TOP10';


export const getTop10 = createAsyncAction(GET_TOP10, async () => {
  const data = await fetchTop10()
  return data
});


// Reducer
const initialState = {
  list: []
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case String(getTop10.fulfilled):
      return {
        ...state,
        list: action.payload,
      };
    default:
      return state;
  }
}
