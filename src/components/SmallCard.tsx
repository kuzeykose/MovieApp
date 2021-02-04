import React from 'react'
import { Col, Row } from 'antd'
import {
  Link,
} from "react-router-dom";


type ItemProps = {
  itemId: string,
  type: string,
  poster: string,
  title: string,
}

const SmallCard = ({ poster, title, itemId, type }: ItemProps) => {

  return (
    <div style={{ borderRadius: 10, marginLeft: 5, marginRight: 5, marginTop: 5 }}>
      <Link to={`/type-${type}/${itemId}`}>
        <Row style={{ alignItems: 'center' }}>
          <Col >
            <img
              style={{ width: 60 }}
              alt="example"
              src={`https://image.tmdb.org/t/p/w500${poster}`}
            />
          </Col>

        </Row>
      </Link>

    </div>
  )
}

export default SmallCard