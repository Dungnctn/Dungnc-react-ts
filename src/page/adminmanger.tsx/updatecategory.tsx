import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { cateDetailType } from '../../type/categoryType';

type Props = {}

const UpdateCategory = (props: Props) => {
    const {id} = useParams();
    console.log(id);
    const [name, setCate] = useState<cateDetailType>();
console.log(name);

    useEffect(() => {
        const getCategory = async () => {
            const response = await axios.get("http://localhost:3001/api/category/"+id);
            setCate(response.data)
        }
        getCategory()
    }, [])

    const handlSubmit = async (id:any) => {
        const categoryUpdate = {
            name: name
        }
        
        await axios.put("http://localhost:3001/api/category/"+id, categoryUpdate);
        window.location.href = 'http://localhost:3000/admin/category';
        
        alert('Cap nhat danh muc thanh cong');
        console.log(id);
    }

  return (
    <div>
        <form method='POST'>
            <div className="mb-3">
                <label className="form-label">Name Category</label>
                <input type="text" value={name?.name} onChange={(e:any) => setCate(e.target.value) } className="form-control" required/>
            </div>
            <button type="submit" onClick={() => handlSubmit(id)} className="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}

export default UpdateCategory