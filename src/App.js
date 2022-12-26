import { Route, Routes } from 'react-router-dom'

import Univer from './pages/UniverPage'
import MainPage from './pages/MainPage'

function App () {
  return (
    <div className="App">
      <Routes>
        <Route path="/univer" element={<Univer />} />
        <Route path="/" element={<MainPage />} />
        <Route path="*" element={<h>Not found</h>} />
      </Routes>
    </div>
  )
}

export default App
