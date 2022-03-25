import React, { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { productDetailType } from '../../type/productType'
import {addProduct} from '../../api/product'
import { useNavigate } from 'react-router-dom'
import { getAll } from '../../api/category'
import { cateDetailType } from '../../type/categoryType'
type ProductAddProps = {
    onAddProduct: (product: productDetailType) => void
}
type FormInput = {
    name: string, 
    price: number,
    category: string,
    description: string
}

const ProductAdd = (props: ProductAddProps) => {
    const { register, handleSubmit } = useForm<FormInput>()
    const navigate = useNavigate()
    const [cate, setCate] = useState<cateDetailType[]>([]);
    useEffect(() => {
        const getCate = async () => {
            const {data} = await getAll()
            setCate(data)
        }
        getCate()
    }, [])

    const onSubmit: SubmitHandler<FormInput> = (data:any) => {
        props.onAddProduct(data);
        navigate("/admin/product")
    }
  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" {...register('name', {required: true})} className="form-control" required/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Price</label>
                    <input type="number" {...register('price', {required: true})} className="form-control" required/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Category: </label>
                    <select className="form-select" {...register("category")} aria-label="Default select example">
                        {cate.map(item => 
                            <option value={item._id}>{item.name}</option>    
                        )}
                    </select>
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <input type="text" {...register('description', {required: true})} className="form-control" required/>
                </div>
                <button className="btn btn-primary">Submit</button>
            </form>
    </div>
  )
}

export default ProductAdd