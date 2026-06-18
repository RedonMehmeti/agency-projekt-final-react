import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Contact from './pages/Contact'
import Destination from './pages/Destination'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="contact" element={<Contact />} />
        <Route path="destination/:id" element={<Destination />} />
      </Route>
    </Routes>
  )
}

export default App
