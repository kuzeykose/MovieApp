import React, { useState } from 'react'
import {
  Card,
  Button,
  Modal,
  Image,
  message,
  Row,
  Tooltip
} from 'antd';
import { HeartOutlined } from '@ant-design/icons';
import { RootState } from '../redux/ducks';
import { useDispatch, useSelector } from 'react-redux';
import { setFavList } from '../redux/ducks/favourites'
const { Meta } = Card;

type CardProps = {
  poster: string,
  title: string,
  overview: string
}

const MovieCard = ({ poster, title, overview }: CardProps) => {
  const dispatch = useDispatch()

  // const { favouritesList } = useSelector((state: RootState) => state.favourites);
  const favButton = (poster: string, title: string, overview: string) => {
    dispatch(setFavList({ poster, title, overview }))
    message.success('ADDED IN FAV!')
  }

  const info = () => {
    Modal.info({
      width: 500,
      icon: false,
      content: (
        <div style={{ justifyContent: 'center' }}>
          <Image
            width={400}
            src={`https://image.tmdb.org/t/p/w500${poster}`}
          />
          <Row style={{ justifyContent: 'space-between' }}>
            <h1>{title}</h1>
            <Button
              onClick={() => favButton(poster, title, overview)}
              style={{ marginTop: 5 }}
              shape="circle"
              icon={<HeartOutlined />}
            />
          </Row>
          <p>{overview}</p>
        </div>
      ),
      onOk() { },
    });
  }

  return (
    <div style={{ margin: 10 }}>
      <Card
        onClick={info}
        hoverable
        style={{ width: 300 }}
        cover={
          <img
            alt="example"
            src={`https://image.tmdb.org/t/p/w500${poster}`}
          />
        }>
        <Meta
          title={title}
          description={overview.substring(0, 100) + '...'}
        />
      </Card>

    </div>
  )
}

export default MovieCard