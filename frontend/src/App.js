import BestBarber from './components/layout/Homepage/BestBarber'
import Home from './components/layout/Homepage/Home'
import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import Popular from './components/layout/Homepage/Popular'
import NearBarber from './components/layout/Homepage/NearBarber'
import Review from './components/layout/Homepage/Review'
import BarberPro from './components/layout/Homepage/BarberPro'
import Testimonals from './components/layout/Homepage/Testimonals'
import MobileApp from './components/layout/Homepage/MobileApp'

function App() {
  return (
    <div className='flex flex-col justify-between h-screen'>
      <Navbar />
      <main className='text-red-900'>
        <Home />
        <BestBarber />
        <Popular />
        <NearBarber />
        <Review />
        <BarberPro />
        <Testimonals />
        <MobileApp />
      </main>
      <Footer />
    </div>
  )
}

export default App
