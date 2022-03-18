import axios from 'axios';
import React, { useState } from 'react'

type Props = {}

const AddCategory = (props: Props) => {

    const [name, setCate] = useState();
console.log(name);

    const handleSubmit = async () => {
        const category = {
            name
        }
        
        const a = await axios.post("http://localhost:3001/api/category", category);
        window.location.href = 'http://localhost:3000/admin/category';
        alert("Them danh muc thanh cong")
    }

    return (
        <div>
            <form method='POST'>
                <div className="mb-3">
                    <label className="form-label">Name Category</label>
                    <input type="text" onChange={(e:any) => setCate(e.target.value)} className="form-control" required/>
                </div>
                <button type="submit" onClick={handleSubmit} className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default AddCategory