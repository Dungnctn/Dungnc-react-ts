import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { getAll } from '../../api/category';
import { cateDetailType } from '../../type/categoryType';
import { productDetailType } from '../../type/productType'

type ProductProps = {
    product: productDetailType[];
    cate: cateDetailType[];
    onRemoveProduct: (id: number) => void
}

//     const [cate, setCate ] = useState();
//     useEffect(() => {
//         const getCate = async () => {
//             const {data} = await getAll()
//             setCate(data)
//         }
//         getCate()
//     }, [])
// console.log(cate);

const Product = ({product, cate, onRemoveProduct}: ProductProps) => {
    // const [cate, setCate ] = useState(category);
    // console.log(cate);
    
    // setCate(cate.map(it => it  ));
    // console.log(cate);
    
  return (
    <div>
        <button className="btn btn-info">
            <NavLink to="/admin/product/add">Add Product ++</NavLink>
        </button>
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
                        {/* <td>{cate.filter(it => it._id !== "623aceca99b76c46c89aa0c4" ).name }</td> */}
                        <td>{item.category}</td>
                        {/* <td>{cate.filter(i => <p>{(i._id === item.category).name}</p> )}</td> */}
                        <td>{item.description}</td>
                        <td><button className="btn btn-success text-sm">
                                <NavLink to={`${item._id}/edit`} className={'text-green-400'}>Update</NavLink>
                            </button>
                        </td>
                        <td><button className="btn btn-danger text-sm" onClick={() => onRemoveProduct(item._id)}>Delete</button></td>
                    </tr>
                    
                )}
            </tbody>
        </table>
    </div>
  )
}

export default Product