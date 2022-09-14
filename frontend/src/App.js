import BestBarber from './components/BestBarber'
import Home from './components/Home'
import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import Popular from './components/Popular'

function App() {
  return (
    <div className='flex flex-col justify-between h-screen'>
      <Navbar />
      <main className='container  mx-auto bg-red-200 text-red-900'>
        <Home />
        <BestBarber />
        <Popular />
        container
      </main>
      <Footer />
    </div>
  )
}

export default App
