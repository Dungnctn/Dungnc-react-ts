import './App.css';
import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import HomePage from './page/home'
import ProductPage from './page/product';
import Info from './page/info';
import Signup from './page/signup';
import Signin from './page/signin';
import WebsitePage from './page/layouts/websitepage';
import AdminPage from './page/layouts/adminpage';
import DetailPage from './page/detailPage';
import Category from './page/adminmanger.tsx/category';
import AddCategory from './page/adminmanger.tsx/addcategory';
import UpdateCategory from './page/adminmanger.tsx/updatecategory';
import { add, get, getAll, remove, update } from './api/category';
import {getAllProduct, removeProduct, updateProduct } from './api/product';
import { useEffect, useState } from 'react';
import { cateDetailType } from './type/categoryType';
import Product from './page/adminmanger.tsx/product';
import { productDetailType } from './type/productType';
import { addProduct } from './api/product';
import PrivateRouter from "./components/PrivateRouter"
import ProductAdd from './page/adminmanger.tsx/ProductAdd';
import ProductEdit from './page/adminmanger.tsx/ProductEdit';
import UserManager from './page/adminmanger.tsx/UserManager';

function App() {
  const [categories, setCategories] = useState<cateDetailType[]>([]);
  const [products, setProducts] = useState<productDetailType[]>([]);
  
  useEffect(() => {
    const getCategory = async () => {
      const {data} = await getAll();
      setCategories(data);
    }
    getCategory()
  }, [])

  useEffect(() => {
    const getProduct = async () => {
      const {data} = await getAllProduct();
      setProducts(data);
    }
    getProduct()
  }, [])

  const handleRemove= async (id: number, user: any, token: any) => {
    const alert = window.confirm("Ban co muon xoa danh muc");
    if(alert){
      await remove(id, user, token)
      setCategories(categories.filter(item => item._id !== id))
    }
  }

  const onHanldeAdd = async (cate: any, user:any, token:any) => {
    const {data} = await add(cate, user, token)
    setCategories([...categories, data])
  }

  const onHanldeEdit = async (cate: cateDetailType, user:any, token:any) => {
    const {data} = await update(cate,user, token);
    
    setCategories(categories.map(item => item._id === data._id ? data : item ))
  }

  const handleRemoveProduct = async (id: number, user: any, token: any) => {
    const alert = window.confirm("Ban co muon xoa san pham");
    if(alert){
      await removeProduct(id, user, token);
      setProducts(products.filter(item => item._id !== id));
    }
  }

  const handleAddProduct = async (product: any, user:any, token:any) => {
      const {data} = await addProduct(product,user,token)
      setProducts([...products, data])
  }

  const handleEditProduct = async (product: any, user: any, token: any) => {
    const {data} = await updateProduct(product, user, token);
    // console.log(data._id);
    // console.log(products.map(i => i._id == data._id ? data : 'sai' ));
    
    setProducts(products.map(item => item._id == data._id ? data : item))
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


        <Route path='admin' element={<PrivateRouter><AdminPage /></PrivateRouter>} >
          <Route index element={<Navigate to='dashboard' />} />
          <Route path='dashboard' element={<h2>Dashboard</h2>} />
          <Route path='category'>
            <Route index  element={<Category category={categories} onRemove={handleRemove} /> }/>
            <Route path=':id/edit' element={<UpdateCategory onEdit={onHanldeEdit} />} />
            <Route path='add' element={<AddCategory onAdd={onHanldeAdd} />} />
          </Route>

          <Route path='product'>
            <Route index element={<Product product={products} onRemoveProduct={handleRemoveProduct} />} />
            <Route path='add' element={<ProductAdd onAddProduct={handleAddProduct} />} />
            <Route path=':id/edit' element={<ProductEdit onEditProduct={handleEditProduct} />} />
          </Route>

          <Route path='user' >
            <Route index element={<PrivateRouter><UserManager /></PrivateRouter>} />
          </Route>

        </Route>
      </Routes>
    </main>
  </div>
  )
}

export default App
