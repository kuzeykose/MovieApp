import react, { useEffect } from 'react'
import { Carousel, Row, Col, Button, Typography } from 'antd';

import CarouselCard from '../../components/CarouselCard'
import FanFavorites from '../../components/FanFavorites'
import SmallCard from '../../components/SmallCard'

import { useDispatch, useSelector } from 'react-redux';
import { getTrendingList } from '../../redux/ducks/main'
import { getTop20Movie, getTop20Tv } from '../../redux/ducks/top10'
import { RootState } from '../../redux/ducks';
import { RightCircleOutlined, LeftCircleOutlined, RightOutlined } from '@ant-design/icons';

const { Title, Text } = Typography
const Main = () => {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getTrendingList())
    dispatch(getTop20Movie())
    dispatch(getTop20Tv())
  }, [dispatch])

  const { trendingList } = useSelector((state: RootState) => state.main);
  const { list, listTv } = useSelector((state: RootState) => state.top10);

  const carouselList = trendingList.map((item: any) => {
    if (item.poster_path !== null) {
      return (
        <CarouselCard
          key={item.id}
          poster={item.poster_path}
          title={item.title || item.name}
          releaseDate={item.release_date}
          overview={item.overview}
          backdropPath={item.backdrop_path}
          voteAverage={item.vote_average}
        />
      )
    }
  })

  const listOfCarousel = trendingList.map((item: any) => {
    if (item.poster_path !== null) {
      return (
        <SmallCard
          key={item.id}
          itemId={item.id}
          poster={item.poster_path}
          title={item.title || item.name}
          type={item.media_type}
        />
      )
    }
  })

  const fanFav = list.map((item: any) => {
    if (item.poster_path !== null) {
      return (
        <FanFavorites
          key={item.id}
          itemId={item.id}
          poster={item.poster_path}
          title={item.title || item.name}
          type={item.media_type}
          voteAverage={item.vote_average}
        />
      )
    }
  })

  const fanTvFav = listTv.map((item: any) => {
    if (item.poster_path !== null) {
      return (
        <FanFavorites
          key={item.id}
          itemId={item.id}
          poster={item.poster_path}
          title={item.title || item.name}
          type={item.media_type}
          voteAverage={item.vote_average}
        />
      )
    }
  })

  const RightArrow = () => {
    return (
      <Button icon={<RightCircleOutlined style={{ color: 'orange' }} />} size="middle" />
    )
  }

  const LeftArrow = () => {
    return (
      <Button icon={<LeftCircleOutlined style={{ color: 'orange' }} />} size="middle" />
    )
  }

  return (
    <div>
      <Row style={{ margin: 20, justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
        <div>
          <Carousel style={{ width: 800, height: 520 }}>
            {carouselList}
          </Carousel>
        </div>
        <div>
          <Row style={{ width: 300, margin: 10 }}>
            {listOfCarousel}
          </Row >
        </div>
      </Row>
      <div>
        <Row style={{ alignItems: 'center' }}>
          <Title level={2} style={{ marginLeft: 50, color: 'white' }}>Fav movies</Title>
          <RightOutlined style={{ fontSize: '24px', color: '#08c', marginBottom: 10 }} />
        </Row>

        <Carousel arrows dots={false} prevArrow={LeftArrow()} nextArrow={RightArrow()} style={{ height: 450 }}>
          <div >
            <Row gutter={12} style={{ display: 'flex', justifyContent: 'center' }}>
              <Col className="gutter-row" >
                {fanFav[0]}
              </Col>
              <Col className="gutter-row" >
                {fanFav[1]}
              </Col>
              <Col className="gutter-row" >
                {fanFav[2]}
              </Col>
              <Col className="gutter-row" >
                {fanFav[3]}
              </Col>
              <Col className="gutter-row" >
                {fanFav[4]}
              </Col>
              <Col className="gutter-row" >
                {fanFav[5]}
              </Col>
            </Row>
          </div>
          <div>
            <Row gutter={16} style={{ display: 'flex', justifyContent: 'center' }}>
              <Col className="gutter-row" >
                {fanFav[6]}
              </Col>
              <Col className="gutter-row" >
                {fanFav[7]}
              </Col>
              <Col className="gutter-row" >
                {fanFav[8]}
              </Col>
              <Col className="gutter-row" >
                {fanFav[9]}
              </Col>
              <Col className="gutter-row" >
                {fanFav[10]}
              </Col>
              <Col className="gutter-row" >
                {fanFav[11]}
              </Col>
            </Row>
          </div>
          <div>
            <Row gutter={16} style={{ display: 'flex', justifyContent: 'center' }}>
              <Col className="gutter-row" >
                {fanFav[12]}
              </Col>
              <Col className="gutter-row" >
                {fanFav[13]}
              </Col>
              <Col className="gutter-row" >
                {fanFav[14]}
              </Col>
              <Col className="gutter-row" >
                {fanFav[15]}
              </Col>
              <Col className="gutter-row" >
                {fanFav[16]}
              </Col>
              <Col className="gutter-row" >
                {fanFav[17]}
              </Col>
            </Row>
          </div>
        </Carousel>
      </div>
      <div>
        <Row style={{ alignItems: 'center' }}>
          <Title level={2} style={{ marginLeft: 50, color: 'white' }}>Your watch list</Title>
          <RightOutlined style={{ fontSize: '24px', color: '#08c', marginBottom: 10 }} />
        </Row>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Col>
            <Title level={3} style={{ marginBottom: 2, marginLeft: 50, color: 'white' }}>Sign in to access your list!</Title>
            <Text style={{ marginLeft: 50, color: 'white' }}>Save shows and movies to keep track of what you want to watch</Text>
          </Col>
        </div>

      </div>

      <div>
        <Row style={{ alignItems: 'center' }}>
          <Title level={2} style={{ marginLeft: 50, color: 'white' }}>Fav Tv</Title>
          <RightOutlined style={{ fontSize: '24px', color: '#08c', marginBottom: 10 }} />
        </Row>

        <Carousel arrows dots={false} prevArrow={LeftArrow()} nextArrow={RightArrow()} style={{ height: 450 }}>
          <div >
            <Row gutter={12} style={{ display: 'flex', justifyContent: 'center' }}>
              <Col className="gutter-row" >
                {fanTvFav[0]}
              </Col>
              <Col className="gutter-row" >
                {fanTvFav[1]}
              </Col>
              <Col className="gutter-row" >
                {fanTvFav[2]}
              </Col>
              <Col className="gutter-row" >
                {fanTvFav[3]}
              </Col>
              <Col className="gutter-row" >
                {fanTvFav[4]}
              </Col>
              <Col className="gutter-row" >
                {fanTvFav[5]}
              </Col>
            </Row>
          </div>
          <div>
            <Row gutter={16} style={{ display: 'flex', justifyContent: 'center' }}>
              <Col className="gutter-row" >
                {fanTvFav[6]}
              </Col>
              <Col className="gutter-row" >
                {fanTvFav[7]}
              </Col>
              <Col className="gutter-row" >
                {fanTvFav[8]}
              </Col>
              <Col className="gutter-row" >
                {fanTvFav[9]}
              </Col>
              <Col className="gutter-row" >
                {fanTvFav[10]}
              </Col>
              <Col className="gutter-row" >
                {fanTvFav[11]}
              </Col>
            </Row>
          </div>
          <div>
            <Row gutter={16} style={{ display: 'flex', justifyContent: 'center' }}>
              <Col className="gutter-row" >
                {fanTvFav[12]}
              </Col>
              <Col className="gutter-row" >
                {fanTvFav[13]}
              </Col>
              <Col className="gutter-row" >
                {fanTvFav[14]}
              </Col>
              <Col className="gutter-row" >
                {fanTvFav[15]}
              </Col>
              <Col className="gutter-row" >
                {fanTvFav[16]}
              </Col>
              <Col className="gutter-row" >
                {fanTvFav[17]}
              </Col>
            </Row>
          </div>
        </Carousel>
      </div>

    </div >
  )

}

export default Main