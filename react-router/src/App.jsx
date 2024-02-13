import { Route, Routes } from 'react-router-dom';
import './App.css'
import Welcome from './components/Welcome';
import Product from './components/Product';

function App() {

  return (
    <div>

      <Routes>
        <Route path='/welcome' element={<Welcome />} />
        <Route path='/products' element={<Product />} />
      </Routes>

    </div >
  )
}

export default App
