import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom';
import { getAll, remove } from '../../api/category';
import { cateDetailType } from '../../type/categoryType';
import { Table, Space, Button } from 'antd';
import { isAuthenticate } from '../../utils/localstorage';
import { DeleteOutlined, DownloadOutlined } from '@ant-design/icons';

type CategoryProps = {
    category: cateDetailType[],
    onRemove: (id: number, user: any, token: any) => void
}

const Category = ({ category, onRemove }: CategoryProps) => {
    const {user, token} = isAuthenticate()
    const colums = [
        {
            title: '#',
            dataIndex: 'key',
            width: 50,
          },
          {
            title: 'Name',
            dataIndex: 'name',
            width: 150,
          },
          {
            title: 'CreateAt',
            dataIndex: 'createAt',
            width: 150,
          },
          {
            title: 'Update',
            dataIndex: 'update',
            width: 150
          },
          {
            title: 'Remove',
            dataIndex: 'remove',
            width: 100
          }
    ]
    const dataSource = category.map((item, index) => {
        return {
            key: index + 1,
            name: item.name,
            createAt: item.createdAt,
            update: <NavLink to={`${item._id}/edit`}><Button type="primary" shape="round" icon={<DownloadOutlined />}> Update </Button></NavLink>,
            remove: <Button type="primary"  onClick={() => onRemove(item._id, user, token)} danger shape="round" icon={<DeleteOutlined />} > Remove </Button>
            
            
            // <Button danger onClick={() => onRemove(item._id, user, token)}>Remove</Button>
        }
    })
  return (
    <div>
        <button className="btn btn-info">
            <NavLink to={"/admin/category/add"} className='text-[#fff]'>Add Category ++</NavLink>
        </button>

        <Table columns={colums} dataSource={dataSource} />
    </div>
  )
}

export default Category



/**
 * <table className="table mt-10">
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
                        <td><button className="btn btn-danger text-sm" onClick={() => onRemove(item._id, user, token)}>Delete</button></td>
                    </tr>
                )}
            </tbody>
        </table>
 * 
 */