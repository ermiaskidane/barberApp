import BestBarber from '../components/Homepage/BestBarber'
import Home from '../components/Homepage/Home'
import Popular from '../components/Homepage/Popular'
import NearBarber from '../components/Homepage/NearBarber'
import Review from '../components/Homepage/Review'
import BarberPro from '../components/Homepage/BarberPro'
import Testimonals from '../components/Homepage/Testimonals'
import MobileApp from '../components/Homepage/MobileApp'

function HomePage() {
  return (
    <>
      <Home />
      <BestBarber />
      <Popular />
      <NearBarber />
      <Review />
      <BarberPro />
      <Testimonals />
      <MobileApp />
    </>
  )
}

export default HomePage
