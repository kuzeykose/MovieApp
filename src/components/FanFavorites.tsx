import React from 'react'
import { Col, Row, Typography } from 'antd'
import {
  Link,
} from "react-router-dom";
import { StarFilled } from '@ant-design/icons';
const { Text, Title } = Typography

type ItemProps = {
  itemId: string,
  type: string,
  poster: string,
  title: string,
  voteAverage: number
}

const FanFavorites = ({ poster, title, itemId, type, voteAverage }: ItemProps) => {
  return (
    <div style={{ marginLeft: 5, marginRight: 5, marginTop: 5, height: 400, backgroundColor: '#1a1a1a' }}>
      <Link to={`/type-${type}/${itemId}`}>
        <Row style={{ alignItems: 'center' }}>
          <Col >
            <img
              style={{ width: 200 }}
              alt="example"
              src={`https://image.tmdb.org/t/p/w500${poster}`}
            />
          </Col>
        </Row>
        <div style={{ marginLeft: 10, marginTop: 5 }}>
          <Title style={{ margin: 2, color: 'white' }} level={5}>{title}</Title>
          <div>
            <StarFilled />
            <Text style={{ margin: 2, color: 'white' }}>{voteAverage}</Text>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default FanFavorites