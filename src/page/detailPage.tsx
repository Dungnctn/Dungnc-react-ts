import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { productDetailType } from '../type/productType';

type Props = {}

const DetailPage = (props: Props) => {
    const { id } = useParams();
    const [productDetail, setProductDetail] = useState<productDetailType>();
    useEffect(() => {
        const getProduct = async () => {
            const respon = await axios.get('http://localhost:3001/api/product/'+id);
            setProductDetail(respon.data)
        }
        getProduct()
    }, [])

  return (
        <div>
            {(productDetail) ?
                <div>
                    <h4>{productDetail._id}</h4>
                    <h4>{productDetail.name}</h4>
                    <h4>{productDetail.price}</h4>
                </div> : <h3 className='mx-auto'>Ko co san pham</h3>
            }

        </div>
        
  )
}

export default DetailPage