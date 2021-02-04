import React, { useEffect } from 'react'
import MovieCard from '../../components/MovieCard'
import { Row, Typography, Button, Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getTop20Movie } from '../../redux/ducks/top10'
import { RootState } from '../../redux/ducks';

const { Title } = Typography;

const Top20 = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getTop20Movie())
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
      <Title style={{ marginLeft: 100 }} level={3}>Weekly TOP20 Movie</Title>
      <Space size='large'>
        <Row style={{ justifyContent: 'center' }}>
          {Top20Movies}
        </Row>
      </Space>
    </div>
  )
}

export default Top20