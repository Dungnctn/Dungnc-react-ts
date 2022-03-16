import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import ShowInfo from './components/ShowInfo'
import { NavLink, Route, Routes } from 'react-router-dom'
import HomePage from './page/home'
import ProductPage from './page/product'
import Info from './page/info'
import Signup from './page/signup'
import Signin from './page/signin'

function App() {
  return (
  <div className='container'>
    {/* <header>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/product">Product</NavLink></li>
        <li><NavLink to="/user">Users</NavLink></li>
      </ul>
    </header> */}
    <main>
      <Routes>
        <Route path='/' element={<HomePage />} ></Route>
        <Route path='product' element={<ProductPage />} ></Route>
        <Route path='blog' element={<Info />} ></Route>
        <Route path='signup' element={<Signup />} ></Route>
        <Route path='signin' element={<Signin />} ></Route>
      </Routes>
    </main>
  </div>
  )
  
  // const [info, setInfo] = useState({
  //   name: "A",
  //   age: 20,
  // })
  // const [pro, setPro] = useState([
  //   {id: 1, name: "Dung"},
  //   {id: 2, name: "Chi"},
  //   {id: 3, name: "Nguyen"},
  // ])
  // // const handleInfo = () => {
  // //   console.log(setInfo({...info}));
  // // }

  // return (
  //   <div className='App'>
  //     Info: {info.name}
  //     Pro: {pro.map(item => <div>{item.id} - {item.name}</div>)}
  //     <button onClick={handleInfo}>Them ele</button>
  //     <ShowInfo name="Dũng" />
  //   </div>
  // )
}

export default App
