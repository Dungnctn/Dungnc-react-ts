import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { productDetailType } from '../../type/productType'

type ProductProps = {
    product: productDetailType[];
}

const Product = ({product, onRemove}: ProductProps) => {
  return (
    <div>
        <NavLink to="/admin/product/add">Add Product</NavLink>
        <table className="table mt-10">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Category</th>
                    <th scope="col">Description</th>
                    <th colSpan={2}>Edit</th>
                </tr>
            </thead>
            <tbody>
                {product?.map((item, index) => 
                    <tr key={index}>
                        <td scope='row'>{index + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>{item.category}</td>
                        <td>{item.description}</td>
                        <td><button onClick={() => onRemove()}>Remove</button></td>
                        <td><NavLink to="/:id/edit" >Edit</NavLink></td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>
  )
}

export default Product