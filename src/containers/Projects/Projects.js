import React, {Component} from 'react'
import Zoomy from 'react-zoomy'
import { Container, Relative, Flex } from 'theme/grid'
import { A } from 'theme/types'
import ParallaxImage from 'react-image-parallax2'

import {
  ImageButton,
  Index,
  ImageContainer,
  Title
} from './Projets.style'


export default class Projects extends Component {
  render() {
    return (
      <Container>
        <Title>Open-source Projects</Title>
        <Relative marginBottom="50px" marginTop="100px">
          <Index>
            <h1>01</h1>
          </Index>
          <h1>npm i -S <A href="">react-zoomy</A></h1>
        </Relative>

        <Flex justify={'center'} marginBottom="5em">
          <Zoomy
              imageUrl={require('assets/basketball3.png')}
              renderThumbnail={({ showImage }) =>
                  <ImageButton onClick={showImage}>
                    <img
                        src={require('assets/basketball3_thumbnail.png')}
                        alt="basketball" />
                  </ImageButton>
              }
              scale={[1.1, 1.1]}
              imageProps={{
                style: {
                  width: '100vw',
                  height: 'auto'
                }
              }}
          />
        </Flex>

        <Relative marginBottom="100px">
          <Index>
            <h1>02</h1>
          </Index>

          <h1>npm i -S <A href="">react-image-parallax2</A></h1>

          <ImageContainer>
            <ParallaxImage
              reduceHeight={1/3}
              src={require('assets/basketball1.jpg')} />
          </ImageContainer>
        </Relative>

      </Container>
    )
  }
}

/**
 * Created by Amagi on 5/27/2017.
 */
