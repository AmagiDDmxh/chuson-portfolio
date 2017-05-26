import React, { Component, PropTypes } from 'react'
import styled from 'styled-components'
import Container from '../theme/grid/Container'

const Image = styled.img`
  width: 100%;
`

export default class Home extends Component {
  static propTypes = {}

  render() {
    return (
        <Container>
          <h1>hello?</h1>
          <Image src={require('../assets/hero.gif')} alt="Hero-image"/>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque consequatur debitis ex impedit in minus molestias odit, quia quidem quod, reiciendis rem totam, voluptas! Aliquid dolorem eligendi eum iste nisi placeat, rerum sit vel. Ab ad animi consectetur debitis dignissimos dolorem ducimus earum eius et expedita harum illum incidunt ipsam itaque iure iusto magni nam, non numquam obcaecati odit perspiciatis placeat quaerat quam repellat repellendus repudiandae ullam unde voluptas voluptates! Delectus deleniti dolore dolorum earum libero maxime, minima nobis nulla numquam placeat veniam voluptate? Adipisci beatae eveniet libero nam quod quos sit, voluptates. At enim fugiat fugit obcaecati rerum, similique!
          </p>
        </Container>
    )
  }
}