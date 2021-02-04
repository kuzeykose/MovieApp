import React, { useState } from 'react'
import {
  Typography,
  Row,
  Col,
  Progress,
  Rate,
  Space
} from 'antd';
import { StarFilled } from '@ant-design/icons';
const { Title, Paragraph, Text } = Typography;

type CardProps = {
  poster: string,
  title: string,
  overview: string
  backdropPath: string,
  voteAverage: number,
  releaseDate: string
}

const CarouselCard = ({ poster, backdropPath, title, overview, voteAverage, releaseDate }: CardProps) => {
  return (
    <div
      style={{
        width: 810,
        height: 500,
        backgroundImage: `
        linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 1)), 
        url(https://image.tmdb.org/t/p/w500${backdropPath})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
      <Row style={{ padding: 45 }}>
        <img
          width='250'
          alt="example"
          src={`https://image.tmdb.org/t/p/w500${poster}`}
        />
        <Col style={{ marginLeft: 20, width: 450 }}>
          <Title style={{ color: 'white' }}>
            {title}
          </Title>
          <Paragraph ellipsis={true ? { rows: 5 } : false} style={{ color: 'white' }}>
            {overview}
          </Paragraph>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Space>
              <StarFilled style={{ color: 'orange' }} />
              <Text style={{ color: 'white' }}>{voteAverage}</Text>
            </Space>
            <Text style={{ color: 'white' }}>{releaseDate}</Text>
          </div>
        </Col>
      </Row>
    </div >
  )
}

export default CarouselCard