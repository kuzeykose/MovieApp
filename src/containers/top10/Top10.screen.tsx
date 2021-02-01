import React, { useEffect } from 'react'
import MovieCard from '../../components/MovieCard'
import { Row, Button, Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getTop10 } from '../../redux/ducks/top10'
import { RootState } from '../../redux/ducks';

const Top10 = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getTop10())
  }, [dispatch])

  const { list } = useSelector((state: RootState) => state.top10);

  const Top20Movies = list.map((item: any, key: number) => {
    return (
      <MovieCard
        poster={item.poster_path}
        title={item.title}
        overview={item.overview}
      />
    )
  })

  return (
    <div>
      <Space size='large'>
        <Row style={{ justifyContent: 'center' }}>
          {Top20Movies}
        </Row>
      </Space>
    </div>
  )
}

export default Top10