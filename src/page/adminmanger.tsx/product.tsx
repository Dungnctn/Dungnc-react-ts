import { DeleteOutlined, DownloadOutlined } from '@ant-design/icons';
import { Button, Table } from 'antd';
import { NavLink } from 'react-router-dom';
import { cateDetailType } from '../../type/categoryType';
import { productDetailType } from '../../type/productType'
import { isAuthenticate } from '../../utils/localstorage';

type ProductProps = {
    product: productDetailType[];
    cate: cateDetailType[];
    onRemoveProduct: (id: number, user: any, token: any) => void
}


const Product = ({product, cate, onRemoveProduct}: ProductProps) => {
    const {user, token } = isAuthenticate()
    
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
            title: 'Price',
            dataIndex: 'price',
            width: 150,
          },
          {
            title: 'Category',
            dataIndex: 'category',
            width: 150
          },
          {
            title: 'Edit',
            dataIndex: 'edit',
            width: 150
          },
          {
            title: 'Remove',
            dataIndex: 'remove',
            width: 100
          }
    ]
    const dataSource = product.map((item, index) => {
        return {
            key: index + 1,
            name: item.name,
            price: item.price,
            category: item.category,
            edit: <NavLink to={`${item._id}/edit`}><Button type="primary" shape="round" icon={<DownloadOutlined />}> Update </Button></NavLink>,
            remove: <Button type="primary"  onClick={() => onRemoveProduct(item._id, user, token)} danger shape="round" icon={<DeleteOutlined />} > Remove </Button>
            
            
            // <Button danger onClick={() => onRemove(item._id, user, token)}>Remove</Button>
        }
    })
  return (
    <div>
        <button className="btn btn-info">
            <NavLink to="/admin/product/add" className='text-[#fff]'>Add Product ++</NavLink>
        </button>
        <Table columns={colums} dataSource={dataSource} />
    </div>
  )
}

export default Product


/***
 * <table className="table mt-10">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Category</th>
                    <th scope="col">Description</th>
                    <th colSpan={2}>Edit</th>
                </tr>
            </thead>
            <tbody>
                {product?.map((item, index) => 
                    <tr key={index}>
                        <td scope='row'>{index + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        {/* <td>{cate.filter(it => it._id !== "623aceca99b76c46c89aa0c4" ).name }</td> */
        //                 <td>{item.category}</td>
        //                 {/* <td>{cate.filter(i => <p>{(i._id === item.category).name}</p> )}</td> */}
        //                 <td>{item.description}</td>
        //                 <td><button className="btn btn-success text-sm">
        //                         <NavLink to={`${item._id}/edit`} className={'text-green-400'}>Update</NavLink>
        //                     </button>
        //                 </td>
        //                 <td><button className="btn btn-danger text-sm" onClick={() => onRemoveProduct(item._id,user,token)}>Delete</button></td>
        //             </tr>
                    
        //         )}
        //     </tbody>
        // </table>