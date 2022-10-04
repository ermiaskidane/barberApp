import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import BestBarber from './components/Homepage/BestBarber'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import About from './pages/About'
import FAQ from './pages/FAQ'
import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import { UserProvider } from './context/user/UserContext'

function App() {
  return (
    // <UserProvider>
    <Router>
      <div className='flex flex-col justify-between h-screen'>
        <Navbar />
        <main className='text-red-900'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<About />} />
            <Route path='/notFound' element={<NotFound />} />
            <Route path='/faq' element={<FAQ />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
    // </UserProvider>
  )
}

export default App
