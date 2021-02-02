import React, { useEffect } from 'react'
import { Typography, Divider, Row, Col, Space } from 'antd';
import anime from 'animejs';
import image from '../../assets/img/1.png'
import image2 from '../../assets/img/2.png'

const { Title } = Typography;

const Welcome = () => {

  const imageMoves = (image: string) => {
    anime({
      targets: image,
      translateX: 0,
      delay: anime.stagger(500)
    })
  }

  const myHello = () => {
    anime({
      targets: '#hello',
      translateX: 350,
      delay: anime.stagger(400)
    })
  }

  useEffect(() => {
    myHello()
    imageMoves('image1')
  }, []);

  return (

    <div style={{ display: 'flex', alignItems: 'end', justifyContent: 'center', }}>
      <div style={{ color: 'white', justifyContent: 'center', marginTop: 200 }}>
        <img id='image1' src={image} style={{ position: 'absolute', height: 500, width: 500, zIndex: 0 }} />
        <div style={{ zIndex: 1, position: 'absolute', marginLeft: -300, marginTop: 100 }}>
          <Title mark id="hello">
            Welcome
          </Title>
          <Row>
            <Space>
              <Col>
                <Title level={3}>
                  This is my movie app for
                </Title>
              </Col>
              <Col>
                <Title mark level={3}>
                  learn ReactJs and Redux!
                </Title>
              </Col>
            </Space>
          </Row>
          <Row>
            <Space>
              <Col>
                <Title level={3}>
                  and I add some animeJS
            </Title>
              </Col>
              <Col>
                <Title mark level={3}>
                  for fun
                </Title>
              </Col>
            </Space>
          </Row>
        </div>
      </div>
    </div>

  )
}

export default Welcome