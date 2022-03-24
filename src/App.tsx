import './App.css'
import { Navigate, NavLink, Route, Routes } from 'react-router-dom'
import HomePage from './page/home'
import ProductPage from './page/product'
import Info from './page/info'
import Signup from './page/signup'
import Signin from './page/signin'
import WebsitePage from './page/layouts/websitepage'
import AdminPage from './page/layouts/adminpage'
import DetailPage from './page/detailPage'
import Category from './page/adminmanger.tsx/category'
import AddCategory from './page/adminmanger.tsx/addcategory'
import UpdateCategory from './page/adminmanger.tsx/updatecategory'
import { add, get, getAll, remove, update } from './api/category';
import {getAll} from './api/product'
import { useEffect, useState } from 'react'
import { cateDetailType } from './type/categoryType'
import Product from './page/adminmanger.tsx/product'
import { productDetailType } from './type/productType'

function App() {
  const [category, setCategory] = useState<cateDetailType[]>([]);
  const [products, setProducts] = useState<productDetailType[]>([]);

  useEffect(() => {
    const getCategory = async () => {
      const {data} = await getAll();
      setCategory(data);
    }
    getCategory()
  }, [])

  useEffect(() => {
    const getProduct = async () => {
      const {data} = await getAll();
      setCategory(data);
    }
    getProduct()
  }, [])

  const handleRemove= async (id: number) => {
    const alert = window.confirm("Ban co muon xoa danh muc");
    if(alert){
      await remove(id)
      setCategory(category.filter(item => item._id !== id))
    }
  }

  const onHanldeAdd = async (cate: any) => {
    const {data} = await add(cate)
    setCategory([...category, data])
  }

  const onHanldeEdit = async (product: any) => {
    const {data} = await update(product);
    
    setCategory(category.map(item => data._id == item._id ? data : item ))
  }

  return (
  <div className='container'>
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
          <Route path='category'>
            <Route index  element={<Category category={category} onRemove={handleRemove} />}  />
            <Route path=':id/edit' element={<UpdateCategory onEdit={onHanldeEdit} />} />
            <Route path='add' element={<AddCategory onAdd={onHanldeAdd} />} />
          </Route>

          <Route path='product'>
            <Route index element={<Product products={product} />} />
          </Route>

        </Route>
      </Routes>
    </main>
  </div>
  )
}

export default App
