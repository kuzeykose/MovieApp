import {
  createAction,
  createAsyncAction,
} from 'redux-promise-middleware-actions';

import {
  fetchTrending,
  fetchVideo
} from '../../containers/main/network'

// Actions
const GET_TRENDING_LIST = 'GET_TRENDING_LIST';

export const getTrendingList = createAsyncAction(GET_TRENDING_LIST, async () => {
  const data = await fetchTrending()
  return data
});

// Reducer
const initialState = {
  trendingList: [],
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case String(getTrendingList.fulfilled):
      return {
        ...state,
        trendingList: action.payload,
      };
    default:
      return state;
  }
}

