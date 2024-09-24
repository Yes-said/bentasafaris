import { Route, Routes } from 'react-router-dom'
import './App.css'
import Indexpage from "./pages/IndexPage"
import ToursPage from './pages/ToursPage'
import Layout from './Layout'
import BookPage from './pages/BookPage'
function App() {

  return (
   <div >
    <Routes>
      <Route path="/" element={<Layout />} >
      <Route index element={ <Indexpage /> } />
      <Route path="/tours" element={ <ToursPage /> } />
      <Route path="/book" element={ <BookPage />} />
      </Route>
    </Routes>
   </div>
  )
}

export default App
