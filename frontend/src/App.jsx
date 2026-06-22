
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Navbar from './navBar'
import Home from './home'
import ServiceDetails from './ServiceDetails'
import Footer from './Footer'
import About from './about'

function App() {
  return (
    <BrowserRouter>
    <Navbar />

    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/:id" element={<ServiceDetails />} />

        <Route path="/about-us" element={<About />} />

      </Routes>
    </main>
    <Footer />
    </BrowserRouter>
  )
}

export default App