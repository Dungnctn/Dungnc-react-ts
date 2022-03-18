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
        // return (
            //     () => setCates(cates)
            // )
            
        }, [])
    
    const handleRemove = async (id: number)  => {
        await axios.delete('http://localhost:3001/api/category/'+id);
    }

  return (
    <div>
        <table className="table">
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
                    <tr>
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