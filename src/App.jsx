import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import AddPost from './pages/AddPost';


function App() {

  return (
    <div className="App">
     
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/addpost' element={<AddPost/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
        </Routes>
      
    </div>
  )
}

export default App
