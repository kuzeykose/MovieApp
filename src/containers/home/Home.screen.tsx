import React, { useEffect, useState } from 'react'
import { Input, Col, Row } from 'antd';
import SearchItem from '../../components/SearchItem'
import ItemPage from '../itemPage/ItemPage.screen'
import Main from '../main/Main.screen'
import { Route, useRouteMatch, Switch } from 'react-router-dom'

import {
  getMultiSearchItems,
  setMultiSearchItem,
  setMultiSearchItemsWhenNoText
} from '../../redux/ducks/searchBar'

import { RootState } from '../../redux/ducks';
import { useDispatch, useSelector } from 'react-redux';
const { Search } = Input;

const Home = () => {
  const dispatch = useDispatch()
  let { path, url } = useRouteMatch();
  const [searchText, setSearchText] = useState('')

  const onSearch = (e: any) => {
    setSearchText(e.target.value)
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (searchText !== '') {
        dispatch(getMultiSearchItems(searchText))
      } else {
        dispatch(setMultiSearchItemsWhenNoText())
      }
    }, 500);
    dispatch(setMultiSearchItem(searchText))
    return () => clearTimeout(timeoutId);
  }, [searchText])

  const { multiSearchList } = useSelector((state: RootState) => state.searchBar)
  const listItems = multiSearchList.map((item: any) => {
    if (item.poster_path !== null) {
      if (item.media_type === 'movie') {
        return (
          <SearchItem
            key={item.id}
            itemId={item.id}
            type={item.media_type}
            poster={item.poster_path}
            title={item.title}
            releaseDate={item.release_date}
            overview={item.overview}
            searchText={setSearchText}
          />
        )
      } else if (item.media_type === 'tv') {
        return (
          <SearchItem
            key={item.id}
            itemId={item.id}
            type={item.media_type}
            poster={item.poster_path}
            title={item.name}
            releaseDate={item.first_air_date}
            overview={item.overview}
            searchText={setSearchText}
          />
        )
      }
    }
  })

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Col>
          <Search
            placeholder="Search!"
            value={searchText}
            onChange={onSearch}
            style={{ width: 650 }}
          />
          {searchText !== '' &&
            <div style={{ margin: 3, borderStyle: 'solid', borderWidth: 1, borderColor: '#f0f0f0' }}>
              {listItems}
            </div>
          }
        </Col>
      </div>
      <div>
        <Switch>
          <Route exact path={'/'}>
            <Main />
          </Route>
          <Route path={`/:type/:itemId`}>
            <ItemPage />
          </Route>
        </Switch>
      </div>
    </div>


  )
}

export default Home