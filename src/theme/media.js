import { css } from 'styled-components'

/**
 * Created by Amagi on 5/27/2017.
 */

const sizes = {
  phone: "376px",
  tablet: "768px",
  desktop: "992px",
  giant: "1170px"
}

const media = Object.keys(sizes).reduce((finalMedia, size) => {
  return {
    ...finalMedia,
    [size](...args) {
      return css`
        @media(max-width: ${sizes[size]}) {
            ${[...args]}
        }
      `
    }
  }
}, {})


export default media
