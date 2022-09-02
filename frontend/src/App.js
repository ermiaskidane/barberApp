import { Box, Stack } from '@mui/material'

import Header from './components/Header'
import HomeBanner from './components/HomeBanner'
import RatingPage from './components/RatingPage'
import PopularService from './components/PopularService'
import NearShop from './components/NearShop'
import Review from './components/Review'
import RegisterPage from './components/RegisterPage'
import Testimonal from './components/Testimonal'
import Footer from './components/Footer'

function App() {
  return (
    <Box>
      <Header />
      <Stack spacing={2}>
        <HomeBanner />
        <RatingPage />
        <PopularService />
        <NearShop />
        <Review />
        <RegisterPage />
        <Testimonal />
        <Footer />
      </Stack>
    </Box>
  )
}

export default App
