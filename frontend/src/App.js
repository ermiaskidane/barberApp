import BestBarber from './components/BestBarber'
import Home from './components/Home'
import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'


function App() {
  return (
    <div className='flex flex-col justify-between h-screen'>
      <Navbar />
      <main className='container  mx-auto bg-red-200 text-red-900'>
        <Home />
        <BestBarber />
        container
      </main>
      <Footer />
    </div>
  )
}

export default App
