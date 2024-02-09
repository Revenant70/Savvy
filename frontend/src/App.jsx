import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'

function App() {
  

  return (
    <Routes>
        <Route path="*" element={<Navigate to="/auth" /> } />
        <Route path="/"/>
        <Route path="/auth/signup" />
        <Route path="/profile/profilepage" />
      </Routes>
  )
}

export default App
