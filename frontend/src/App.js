import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'

function App() {
  return (
    <div className='flex flex-col justify-between h-screen'>
      <Navbar />
      <main className='container  mx-auto bg-red-200 text-red-900'>
        {' '}
        container
      </main>
      <Footer />
    </div>
  )
}

export default App
