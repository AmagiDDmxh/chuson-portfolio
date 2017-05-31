import { injectGlobal } from 'styled-components'
import { black } from 'theme/variables'

/**
 * Created by Amagi on 5/26/2017.
 */

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=VT323');
  
  body {
    font-family: 'VT323', monospace;
    font-size: 24px;
    color: ${black};
  }
  
  h1, h2, h3 {
    font-weight: normal;
  }
`
