import React, { useEffect } from 'react'
import MovieCard from '../../components/MovieCard'
import { Row, Space } from 'antd';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/ducks';

const Favourtite = () => {
  const { favouritesList } = useSelector((state: RootState) => state.favourites);

  const favList = favouritesList.map((item: any, key: number) => {
    return (
      <MovieCard
        poster={item.poster}
        title={item.title}
        overview={item.overview}
      />
    )
  })

  return (
    <div>
      <Space size='large'>
        <Row style={{ justifyContent: 'center' }}>
          {favList}
        </Row>
      </Space>
    </div>
  )

}

export default Favourtite