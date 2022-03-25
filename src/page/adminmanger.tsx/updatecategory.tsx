import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { appendErrors, SubmitHandler, useForm } from 'react-hook-form';
import { useParams, useNavigate } from 'react-router-dom'
import { get } from '../../api/category';
import { cateDetailType } from '../../type/categoryType';

type UpdateCategoryProps = {
    onEdit: (category: cateDetailType) => void
}
type FormInput = {
    name: string
}

const UpdateCategory = (props: UpdateCategoryProps) => {
    const navigate = useNavigate()
    const {id}:any = useParams();
    const {register, handleSubmit, reset } = useForm<FormInput>();

    useEffect(() => {
        const getCategory = async () => {
            const {data} = await get(id);
            reset(data)
        }
        getCategory()
    }, [])

    const onUpdate: SubmitHandler<FormInput> = ( data:any ) => {
        props.onEdit(data);
        navigate("/admin/category");
    }

  return (
    <div> 
            <form onSubmit={handleSubmit(onUpdate)}>
                <div className="mb-3">
                    <label className="form-label">Name Category</label>
                    <input type="text" {...register("name")}  className="form-control"/>
                    {/* { errors.name && <span>Khong duoc bo trong</span> } */}
                </div>
                <button className="btn btn-primary">Submit</button>
            </form>
    </div>
  )
}

export default UpdateCategory