import Card from './components/Card'
import Footer from './components/Footer'
import Header from './components/Header'

import content from './data/content'

import GlobalStyles from './components/styles/Global'
import { ThemeProvider } from 'styled-components'
import { Container } from './components/styles/Container.styled'

const theme = {
  colors: {
    body: '#fff',
    footer: '#003333',
    header: '#ebfbff',
  },

  mobile: '768px'
}

const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
          {content.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </Container>
        <Footer />
      </>
    </ThemeProvider>
  )
  
}

export default App
