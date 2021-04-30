import { extendTheme } from '@chakra-ui/react'

const themeCustom = extendTheme({
  colors: {
    white: '#FFF',
    black: '#333333',
    red: '#EB5757',
    gray: '#828282'
  },

  fonts: {
    body: 'Montserrat, sans-serif'
  },

  styles: {
    global: {
      'html, body': {
        margin: 0,
        padding: 0,
        boxSize: 'border-box',
        background: 'white',
        fontFamily: 'body',
        color: 'gray'
      },

      '@media (max-width: 1080px)': {
        html: {
          fontSize: '93.75%'
        }
      },

      '@media (max-width: 720px)': {
        html: {
          fontSize: '87.5%'
        }
      },

      h1: {
        color: 'black',
        fontWeight: 'bold'
      },

      h2: {
        color: 'black',
        fontWeight: 600
      },

      p: {
        color: 'gray',
        fontWeight: 500
      }
    }
  }
})

export default themeCustom
