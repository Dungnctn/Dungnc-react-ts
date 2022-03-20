import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom';
import { getAll, remove } from '../../api/category';
import { cateDetailType } from '../../type/categoryType';

type Props = {}

const Category = (props: Props) => {
    const [cates, setCates] = useState<cateDetailType[]>();

    useEffect(() => {
        const getCategory = async () => {
            const getCate = await getAll();
            setCates(getCate.data)
        }
        
        getCategory();

        }, [])
    
    const handleRemove = async (id: any)  => {
        const confirm = window.confirm("Ban co muon xoa danh muc")
        if(confirm) {
            await remove(id);
            setCates(cates?.filter(item => item._id !== id));
        }
    }


  return (
      <div>
        <NavLink to={"/admin/addcategory"} className="bg-green-500">Them danh muc ++</NavLink>
        <table className="table mt-10">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Date new</th>
                    <th scope="col">DateUpdate</th>
                    <th colSpan={2}>Edit</th>
                </tr>
            </thead>
            <tbody>
                {cates?.map((item, index) => 
                    <tr key={index}>
                        <th scope="row">{index+1}</th>
                        <td>{item.name}</td>
                        <td>{item.createdAt}</td>
                        <td>{item.updatedAt}</td>
                        <td><NavLink to={"/admin/categoryedit/"+item._id}><span className='text-green-400'>Update</span></NavLink></td>
                        <td><button className='text-red-400 text-base' type='button' onClick={() => handleRemove(item._id)} >Delete</button></td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>
  )
}

export default Category