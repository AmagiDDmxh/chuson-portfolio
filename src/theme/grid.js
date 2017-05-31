import styled, { css } from 'styled-components'
import media from 'theme/media'

/**
 * Created by Amagi on 5/26/2017.
 */

export const Div = styled.div`
  ${({ marginBottom }) => marginBottom && css`
    margin-bottom: ${marginBottom};
  `}
  
  ${({ marginTop }) => marginTop && css`
    margin-top: ${marginTop};
  `}
  
  ${({ marginLeft }) => marginLeft && css`
    margin-left: ${marginLeft};
  `}
  
  ${({ marginRight }) => marginRight && css`
    margin-right: ${marginRight};
  `}
`

export const Container = styled(Div)`
  padding: 1rem 3rem 0;
  
  ${media.tablet`
    padding: 15px 30px 0;
  `}
  
  ${media.phone`
    padding: 15px 10px 0;
  `}  
`

export const Relative = styled(Div)`
  position: relative;
`

export const Flex = styled(Div)`
  display: flex;
  
  ${({ direction }) => direction && css`
    flex-direction: ${direction};
  `}
  
  ${({ justify }) => justify && css`
    justify-content: ${justify};
  `}
  
  ${({ align }) => align && css`
    align-items: ${align};
  `}  
`
