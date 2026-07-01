
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Navbar from './navBar'
import Home from './home'
import ServiceDetails from './ServiceDetails'
import Footer from './Footer'
import About from './about'
import ScrollToTop from './ScrollToTop'
import { Service } from './Service'

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
    <Navbar />

    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/:slug" element={<ServiceDetails />} />

        <Route path="/about-us" element={<About />} />
        <Route path="/services" element={<Service />} />

      </Routes>
    </main>
    <Footer />
    </BrowserRouter>
  )
}

export default App