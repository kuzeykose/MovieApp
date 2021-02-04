import React from 'react'
import { Col, Row, Typography, Divider, Button } from 'antd'
import {
  Link,
  useRouteMatch
} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import {
  setMultiSearchItemsWhenNoText,
  setMultiSearchItem
} from '../redux/ducks/searchBar'

type ItemProps = {
  itemId: string,
  type: string,
  poster: string,
  title: string,
  overview: string,
  releaseDate: string,
  searchText: Function
}
const { Paragraph, Text, Title } = Typography;
const SearchItem = ({ poster, title, overview, releaseDate, itemId, type, searchText }: ItemProps) => {
  const dispatch = useDispatch()

  const resetSearchBar = () => {
    searchText("")
    dispatch(setMultiSearchItemsWhenNoText())
  }

  return (
    <div style={{ borderRadius: 10, marginLeft: 5, marginRight: 5, }}>
      <Link to={`/type-${type}/${itemId}`} onClick={resetSearchBar}>
        <Row style={{ alignItems: 'center' }}>
          <Col >
            <img
              style={{ width: 60 }}
              alt="example"
              src={`https://image.tmdb.org/t/p/w500${poster}`}
            />
          </Col>
          <Col style={{ width: 350, marginLeft: 20 }}>
            <Title level={5}>{title}</Title>
            <Text>{releaseDate}</Text>
            <Paragraph ellipsis={true ? { rows: 2 } : false}>
              {overview}
            </Paragraph>
          </Col>
        </Row>
      </Link>
      <Divider style={{ margin: 3 }} />
    </div>
  )
}

export default SearchItem