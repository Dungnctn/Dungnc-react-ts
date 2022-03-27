import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { add } from '../../api/category';
import {useForm, SubmitHandler} from "react-hook-form"
import {cateDetailType} from "../../type/categoryType"
import { isAuthenticate } from '../../utils/localstorage';

type categoryProps = {
    onAdd: (category: cateDetailType, user:any, token: any) => void
}
type FormInput = {
    name: string
}

const AddCategory = (props: categoryProps) => {
    const { register, handleSubmit } = useForm<FormInput>()
    const navigate = useNavigate();
    const {user, token} = isAuthenticate()
    const onSubmit: SubmitHandler<FormInput> = (data: any) => {
        props.onAdd(data, user, token);
        navigate('/admin/category');
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label className="form-label">Name Category</label>
                    <input type="text" {...register('name', {required: true})} className="form-control" required/>
                </div>
                <button className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default AddCategory