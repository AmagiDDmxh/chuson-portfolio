import styled from 'styled-components'
import { yellow, red } from 'theme/variables'

/**
 * Created by Amagi on 5/27/2017.
 */

export const ImageButton = styled.div`
  cursor: pointer;
  overflow: hidden;
  display: inline-block;
  
  
  & > img { transition: transform .3s; }
  
  &:hover {
    & > img {
      transform: scale(1.3);
      cursor: pointer;
    }
  }  
`

export const Index = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: -1;
  font-size: 3em;
  
  h1 {    
    margin: 0;
    font-weight: bold;
    color: ${yellow};
    opacity: 0.5;
    transform: translateY(20%);
  }
`

export const ImageContainer = styled.div`
  width: 800px;
  margin-left: auto;
  margin-right: auto;
`

export const Title = styled.h1`
  color: ${red};
  font-weight: bold;
  margin-top: 10px;
`
