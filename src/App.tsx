import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Navigate, NavLink, Route, Routes } from 'react-router-dom'
import HomePage from './page/home'
import ProductPage from './page/product'
import Info from './page/info'
import Signup from './page/signup'
import Signin from './page/signin'
import WebsitePage from './page/layouts/websitepage'
import Header from './components/header'
import AdminPage from './page/layouts/adminpage'
import BorderNew from './page/borderNew'
import DetailPage from './page/detailPage'
import Category from './page/adminmanger.tsx/category'

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
        <Route path='/' element={<WebsitePage />} >

          <Route path='/' element={<HomePage />} >
            <Route index element={<ProductPage />} />
            <Route path='/size' element={<h3>Size getAll</h3>} />
            <Route path="/color" element={<h3>Color</h3>} />
          </Route>

          <Route path='productdetail/:id' element={<DetailPage />} />
          <Route path='blog' element={<Info />} />
        </Route>

    <Route path='pro' element={<ProductPage />} />

        <Route path='signin' element={<Signin />} />
        <Route path='signup' element={<Signup />} ></Route>


        <Route path='admin' element={<AdminPage />} >
          <Route index element={<Navigate to='dashboard' />} />
          <Route path='dashboard' element={<h2>Dashboard</h2>} />
          <Route path='category' element={<Category />} />
          <Route path='categoryedit/:id' element={<h3>Edit Category</h3>} />
        </Route>
        {/* <Route path='/' element={<HomePage />} ></Route>
        <Route path='product' element={<ProductPage />} ></Route>
        <Route path='blog' element={<Info />} ></Route>
        <Route path='signin' element={<Signin />} ></Route> */}
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
