import { useEffect, useState } from "react";
import axios from "axios";
import {productDetailType} from "../type/productType";
import { NavLink } from "react-router-dom";

type Props = {}


const ProductPage = (props: Props) => {

    const [product, setProduct] = useState<productDetailType[]>([]);
    useEffect(() => {
        const getProducts = async () => {
            const response = await axios.get('http://localhost:3001/api/products');
            setProduct(response.data);
        }
        getProducts()
    }, [])

    return (
        
        <div>
            <div className="bg-white">
                <div className="max-w-2xl mx-auto py-5 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <div className="grid grid-cols-4 gap-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                        {product?.map((post:any, index:number) => 
                            <NavLink to={'/productdetail/'+post._id} className="group" key={index}>
                                <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROmycHCBSM7FcnhY1_KwLWcSadGnkq_4k_1Yx_yOB1o_pbQ1y4eEHXliO9N8d7WXAlNGk&usqp=CAU" alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." className="w-full h-full object-center object-cover group-hover:opacity-75" />
                                </div>
                                <h3 className="mt-4 text-sm text-gray-700">
                                    {post.name}
                                </h3>
                                <p className="mt-1 text-sm text-gray-500">{post.price}</p>
                                {/* <p className="text-sm font-medium text-gray-900 line-through text-[#ccc]">{post.sale}</p> */}
                            </NavLink>
                        )}
                            
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default ProductPage
