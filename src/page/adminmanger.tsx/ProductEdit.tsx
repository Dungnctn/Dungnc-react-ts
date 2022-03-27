import React, { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { getAll } from '../../api/category'
import { getProduct } from '../../api/product'
import { cateDetailType } from '../../type/categoryType'
import { productDetailType } from '../../type/productType'
import { isAuthenticate } from '../../utils/localstorage'

type ProductEditProps = {
    onEditProduct: (product: productDetailType, user:any, token:any) => void
}
type FormInput = {
    name: string,
    price: number,
    category: string,
    description: string
}

const ProductEdit = (props: ProductEditProps) => {
    const [cate, setCate] = useState<cateDetailType[]>([]);
    const {register, handleSubmit, reset} = useForm<FormInput>()
    const { id }:any = useParams();
    const navigate = useNavigate()
    useEffect(() => {
        const sendProduct = async () => {
            const {data} = await getProduct(id);
            reset(data)
        }
        sendProduct()
    }, [])
    
    useEffect(() => {
        const getCate = async () => {
            const {data} = await getAll();
            setCate(data)
        }
        getCate()
    }, [])
    const {user, token}:any = isAuthenticate()
    const onsubmitUpdate: SubmitHandler<FormInput> = (data: any) => {
        props.onEditProduct(data, user, token);
        navigate("/admin/product")
    }

  return (
    <div>
        <form onSubmit={handleSubmit(onsubmitUpdate)}>
            <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" {...register("name")}  className="form-control"/>
            </div>
            <div className="mb-3">
                <label className="form-label">Price</label>
                <input type="text" {...register("price")}  className="form-control"/>
            </div>
            <div className="mb-3">
                <label className="form-label">Category</label>
                <select className="form-select" {...register("category")}>
                    {cate.map((item, index) => 
                    
                        <option value={item._id} key={index}>{item.name}</option>
                    )}
                </select>    
                <input type="hidden" {...register("category")}  className="form-control"/>
            </div>
            <div className="mb-3">
                <label className="form-label">Description</label>
                <input type="text" {...register("description")}  className="form-control"/>
            </div>

            <button className="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}

export default ProductEdit