import {
  createAsyncAction,
  createAction
} from 'redux-promise-middleware-actions';

// Actions
const FAVOURITES = 'FAVOURITES'
const SET_FAV_LIST = 'SET_FAV_LIST'

// Action Creators
export const setFavList = createAction(SET_FAV_LIST, (object) => object);

// Reducer
const initialState = {
  favouritesList: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_FAV_LIST:
      return { favouritesList: [...state.favouritesList, action.payload] };
    default:
      return state;
  }
}