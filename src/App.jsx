import './App.css'
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import AddPost from './pages/AddPost';

function ProtectedRoute({children}) {
  if(localStorage.getItem('social-app-user')){
    return children
  }else{
    return <Navigate to='/login'/>
  }
}

function App() {

  return (
    <div className="App">
     
        <Routes>
          <Route path='/' element={<ProtectedRoute><Home/></ProtectedRoute>} />
          <Route path='/addpost' element={<ProtectedRoute><AddPost/></ProtectedRoute>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
        </Routes>
      
    </div>
  )
}

export default App
