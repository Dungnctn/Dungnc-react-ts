import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom';
import { getAll, remove } from '../../api/category';
import { cateDetailType } from '../../type/categoryType';
import { Table, Space } from 'antd';

type CategoryProps = {
    category: cateDetailType[],
    onRemove: (id: number) => void
}

const Category = ({ category, onRemove }: CategoryProps) => {
  return (
    <div>
        <button className="btn btn-info">
        <NavLink to={"/admin/category/add"} >Them danh muc ++</NavLink>
        </button>

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
                {category?.map((item, index) => 
                    <tr key={index}>
                        <th scope="row">{index+1}</th>
                        <td>{item.name}</td>
                        <td>{item.createdAt}</td>
                        <td>{item.updatedAt}</td>
                        <td><button className="btn btn-success text-sm">
                                <NavLink to={`${item._id}/edit`}><span className='text-green-400'>Update</span></NavLink>
                            </button>    
                        </td>
                        <td><button className="btn btn-danger text-sm" onClick={() => onRemove(item._id)}>Delete</button></td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>
  )
}

export default Category