import React, { useEffect, useState } from 'react'
import { getAllUser } from '../../api/user';
import { UserType } from '../../type/userType';

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

  return (
    <div>
        <table className="table mt-10">
            <thead>
                <th scope='col'>#</th>
                <th scope='col'>Username</th>
                <th scope='col'>Email</th>
                <th scope='col'>Role</th>
                {/* <th scope='col'>Edit</th> */}
            </thead>
            <tbody>
                {Users?.map((item, index) => (
                    <tr key={index}>
                        <td scope='row'>{index + 1}</td>
                        <td>{item.username}</td>
                        <td>{item.email}</td>
                        <td>{(item.role)==0 ? 'Khách hàng' : 'Admin' }</td>
                        {/* <td><button className="btn btn-danger text-sm">Remove</button></td> */}
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default UserManager