import React, { useEffect, useState } from 'react'
import { getAllUser } from '../../api/user';
import { UserType } from '../../type/userType';
import { Table } from 'antd';
import 'antd/dist/antd.css';
import { NavLink } from 'react-router-dom';

type Props = {}

const UserManager = (props: Props) => {

    const [Users, setUsers] = useState<UserType[]>([]); 
    useEffect(() => {
        const getUser = async () => {
            const {data} = await getAllUser();
            setUsers(data.user) 
        }
        getUser()
    }, [])

    const columns = [
        {
          title: '#',
          dataIndex: 'key',
          width: 150,
        },
        {
          title: 'Name',
          dataIndex: 'name',
          width: 150,
        },
        {
          title: 'Email',
          dataIndex: 'email',
          width: 150,
        },
        {
          title: 'Role',
          dataIndex: 'role',
          width: 150
        },
        {
          title: 'Edit',
          dataIndex: 'edit',
          width: 150
        },
      ];
    
    const dataSource = Users.map((item, index) => {
        return {
            key: index + 1,
            name: item.username,
            email: item.email,
            role: item.role,
            edit: <NavLink to={`${item._id}`} >Cạp nhat</NavLink>
        }
    })
  return (
    <div>
        <Table columns={columns} dataSource={dataSource} />
    </div>
  )
}

export default UserManager


/**
 * <table className="table mt-10">
            <thead>
                <th scope='col'>#</th>
                <th scope='col'>Username</th>
                <th scope='col'>Email</th>
                <th scope='col'>Role</th>
                {/* <th scope='col'>Edit</th> */
            //     </thead>
            //     <tbody>
            //         {Users?.map((item, index) => (
            //             <tr key={index}>
            //                 <td scope='row'>{index + 1}</td>
            //                 <td>{item.username}</td>
            //                 <td>{item.email}</td>
            //                 <td>{(item.role)==0 ? 'Khách hàng' : 'Admin' }</td>
            //                 {/* <td><button className="btn btn-danger text-sm">Remove</button></td> */}
            //             </tr>
            //         ))}
            //     </tbody>
            // </table>
