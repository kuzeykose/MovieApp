import React, { useEffect, useState } from 'react'
import MovieCard from '../../components/MovieCard'
import { Row, Space, Input, Col } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import {
  getSearchItems,
  setSearchItem
} from '../../redux/ducks/search'
import {
  Switch,
  Route,
  useRouteMatch,
  useLocation,
  useHistory,
} from 'react-router-dom';
import { RootState } from '../../redux/ducks';

const { Search } = Input;

const SearchScreen = () => {
  let { path, url } = useRouteMatch();
  let history = useHistory();
  const [searchText, setSearchText] = useState('')

  const onSearch = (value: any) => {
    setSearchText(value)
  };

  const dispatch = useDispatch()

  useEffect(() => {
    if (searchText !== '') {
      dispatch(getSearchItems(searchText))
    }
    dispatch(setSearchItem(searchText))

    if (searchText) {
      history.push(`${url}/${searchText}`)
    } else {
      history.push(`${url}`)
    }
  }, [searchText])

  const { searchList } = useSelector((state: RootState) => state.search);
  const Search20Items = searchList.map((item: any, key: number) => {
    if (item.poster_path !== null) {
      return (
        <MovieCard
          key={key}
          poster={item.poster_path}
          title={item.title}
          overview={item.overview}
        />
      )
    }
  })

  return (
    <div>
      <Row style={{ marginTop: 50 }}>
        <Col span={12} offset={6}>
          <Search
            placeholder="Search amazing movie!"
            onSearch={onSearch}
            enterButton
            size='large'
            style={{ alignItems: 'center', justifyContent: 'center', width: 650 }}
          />
        </Col>
      </Row>

      <Space size='large'>
        <Row style={{ justifyContent: 'center' }}>
          {Search20Items}
        </Row>
      </Space>

    </div>
  )
}

export default SearchScreen