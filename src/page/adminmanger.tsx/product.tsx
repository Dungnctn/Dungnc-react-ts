import { NavLink } from 'react-router-dom';
import { productDetailType } from '../../type/productType'
import { isAuthenticate } from '../../utils/localstorage';

type ProductProps = {
    product: productDetailType[];
    onRemoveProduct: (id: number, user: any, token: any) => void
}


const Product = ({product, onRemoveProduct}: ProductProps) => {
    const {user, token } = isAuthenticate()
  return (
    <div>
        <button className="btn btn-info">
            <NavLink to="/admin/product/add">Add Product ++</NavLink>
        </button>
        <table className="table mt-10">
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
                        {/* <td>{cate.filter(it => it._id !== "623aceca99b76c46c89aa0c4" ).name }</td> */}
                        <td>{item.category}</td>
                        {/* <td>{cate.filter(i => <p>{(i._id === item.category).name}</p> )}</td> */}
                        <td>{item.description}</td>
                        <td><button className="btn btn-success text-sm">
                                <NavLink to={`${item._id}/edit`} className={'text-green-400'}>Update</NavLink>
                            </button>
                        </td>
                        <td><button className="btn btn-danger text-sm" onClick={() => onRemoveProduct(item._id,user,token)}>Delete</button></td>
                    </tr>
                    
                )}
            </tbody>
        </table>
    </div>
  )
}

export default Product