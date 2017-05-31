import React, { Component } from 'react'
import { Container } from 'theme/grid'
import { HeroImage, RevealP } from './Home.style'
import WhenInView from 'components/WhenInView/WhenInView'

export default class Home extends Component {

  render() {
    return (
        <Container>
          {/*<Image src={require.resolve('../../assets/hero.gif')} alt="hero" />*/}
          <HeroImage>
            <h1>chu son hu</h1>
            <h2>Front-end developer</h2>
          </HeroImage>

          <WhenInView>
            {({ isInView }) =>
                <RevealP hide={!isInView}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque consequatur debitis ex impedit in minus molestias odit, quia quidem quod, reiciendis rem totam, voluptas! Aliquid dolorem eligendi eum iste nisi placeat, rerum sit vel. Ab ad animi consectetur debitis dignissimos dolorem ducimus earum eius et expedita harum illum incidunt ipsam itaque iure iusto magni nam, non numquam obcaecati odit perspiciatis placeat quaerat quam repellat repellendus repudiandae ullam unde voluptas voluptates! Delectus deleniti dolore dolorum earum libero maxime, minima nobis nulla numquam placeat veniam voluptate? Adipisci beatae eveniet libero nam quod quos sit, voluptates. At enim fugiat fugit obcaecati rerum, similique!
                </RevealP>
            }
          </WhenInView>

          <WhenInView>
            {({ isInView }) => <RevealP hide={!isInView} >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque consequatur debitis ex impedit in minus molestias odit, quia quidem quod, reiciendis rem totam, voluptas! Aliquid dolorem eligendi eum iste nisi placeat, rerum sit vel. Ab ad animi consectetur debitis dignissimos dolorem ducimus earum eius et expedita harum illum incidunt ipsam itaque iure iusto magni nam, non numquam obcaecati odit perspiciatis placeat quaerat quam repellat repellendus repudiandae ullam unde voluptas voluptates! Delectus deleniti dolore dolorum earum libero maxime, minima nobis nulla numquam placeat veniam voluptate? Adipisci beatae eveniet libero nam quod quos sit, voluptates. At enim fugiat fugit obcaecati rerum, similique!
                </RevealP>}
          </WhenInView>

          <WhenInView>
            {({ isInView }) => <RevealP hide={!isInView} >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque consequatur debitis ex impedit in minus molestias odit, quia quidem quod, reiciendis rem totam, voluptas! Aliquid dolorem eligendi eum iste nisi placeat, rerum sit vel. Ab ad animi consectetur debitis dignissimos dolorem ducimus earum eius et expedita harum illum incidunt ipsam itaque iure iusto magni nam, non numquam obcaecati odit perspiciatis placeat quaerat quam repellat repellendus repudiandae ullam unde voluptas voluptates! Delectus deleniti dolore dolorum earum libero maxime, minima nobis nulla numquam placeat veniam voluptate? Adipisci beatae eveniet libero nam quod quos sit, voluptates. At enim fugiat fugit obcaecati rerum, similique!
                </RevealP>}
          </WhenInView>

        </Container>
    )
  }

}
