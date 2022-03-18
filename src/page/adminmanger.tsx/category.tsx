import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom';
import { cateType } from '../../type/categoryType';

type Props = {}

const Category = (props: Props) => {
    const [cates, setCates] = useState<cateType>();

    useEffect(() => {
        const getCategory = async () => {
            const getCate = await axios.get('http://localhost:3001/api/category');
            setCates(getCate.data)
        }
        
        getCategory()
            
        }, [])
    
    const handleRemove = async (id: number)  => {
        const confirm = window.confirm("Ban co muon xoa danh muc")
        if(confirm) {
            await axios.delete('http://localhost:3001/api/category/'+id);
            window.location.href = 'http://localhost:3000/admin/category'
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
                        <td><NavLink to={"/admin/categoryedit/"+item._id}>Update</NavLink></td>
                        <td><button className='text-red-400' type='button' onClick={() => handleRemove(item._id)} >Delete</button></td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>
  )
}

export default Category