import styled, {css} from 'styled-components'

/**
 * Created by Amagi on 5/26/2017.
 */

export const Image = styled.img`
  width: 100%;
`

export const HeroImage = styled.div`
  height: 100vh;
  background-image: url('${require('assets/hero.gif')}');
  background-repeat: no-repeat;
  background-position: center;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  
  text-align: center;
  color: white;
  
  font-size: 2em;
  
  h1 {
    margin: 0;
  }
`

export const RevealP = styled.p`
  position: relative;
  
  &:after {
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    
    transform-origin: left;
    transform: rotateY(90deg);
    
    transition: transform 3s;
  }
  
  ${
    ({hide}) => hide && css`
      &:after {
        transform: rotateY(0deg);
      }
    ` 
  }
`

