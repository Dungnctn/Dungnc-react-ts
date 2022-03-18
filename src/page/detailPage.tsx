import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom';
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
            <div className="bg-white">
                    <div className="pt-6">
                    <nav aria-label="Breadcrumb">
                        <ol role="list" className="max-w-2xl mx-auto px-4 flex items-center space-x-2 sm:px-6 lg:max-w-7xl lg:px-8">
                        <li>
                            <div className="flex items-center">
                            <NavLink to="/" className="mr-2 text-sm font-medium text-gray-900">
                                Trang chủ
                            </NavLink>
                            <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-4 h-5 text-gray-300">
                                <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                            </svg>
                            </div>
                        </li>

                        <li>
                            <div className="flex items-center">
                                Chi tiết sản phẩm
                            </div>
                        </li>
                        </ol>
                    </nav>

                    <div className="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
                        <div className="hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROmycHCBSM7FcnhY1_KwLWcSadGnkq_4k_1Yx_yOB1o_pbQ1y4eEHXliO9N8d7WXAlNGk&usqp=CAU" alt="Two each of gray, white, and black shirts laying flat." className="w-full h-full object-center object-cover" />
                        </div>
                        <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                        <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROmycHCBSM7FcnhY1_KwLWcSadGnkq_4k_1Yx_yOB1o_pbQ1y4eEHXliO9N8d7WXAlNGk&usqp=CAU" alt="Model wearing plain black basic tee." id="img-cart" className=" w-full h-full object-center object-cover" />
                        </div>
                        <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROmycHCBSM7FcnhY1_KwLWcSadGnkq_4k_1Yx_yOB1o_pbQ1y4eEHXliO9N8d7WXAlNGk&usqp=CAU" alt="Model wearing plain gray basic tee." className="w-full h-full object-center object-cover" />
                        </div>
                        </div>
                        <input type="number" id="inputQty" name="" value="1" className="hidden"/>
                        <div className="aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROmycHCBSM7FcnhY1_KwLWcSadGnkq_4k_1Yx_yOB1o_pbQ1y4eEHXliO9N8d7WXAlNGk&usqp=CAU" alt="Model wearing plain white basic tee." className="w-full h-full object-center object-cover" />
                        </div>
                    </div>


                    <div className="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
                        <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                        <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl" id="title-cart">
                            {productDetail.name}
                        </h1>
                        </div>

                        <div className="mt-4 lg:mt-0 lg:row-span-3">
                        <h2 className="sr-only">Product information</h2>
                        <p className="text-3xl text-gray-900">{productDetail.price}</p>


                        <div className="mt-6">
                            <h3 className="sr-only">Reviews</h3>
                            <div className="flex items-center">
                            <div className="flex items-center">
                                <svg className="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>

                                <svg className="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>

                                <svg className="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>

                                <svg className="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>

                                <svg className="text-gray-200 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            </div>
                            <p className="sr-only">4 out of 5 stars</p>
                            <a href="#" className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">117 lượt xem</a>
                            </div>
                        </div>

                            <div>
                            <h3 className="text-sm text-gray-900 font-medium">Màu</h3>

                            <fieldset className="mt-4">
                                <legend className="sr-only">
                                Choose a color
                                </legend>
                                <div className="flex items-center space-x-3">
                                <label className="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-400">
                                    <input type="radio" name="color-choice" value="White" className="sr-only" aria-labelledby="color-choice-0-label"/>
                                    <p id="color-choice-0-label" className="sr-only">
                                    White
                                    </p>
                                    <span aria-hidden="true" className="h-8 w-8 bg-white border border-black border-opacity-10 rounded-full"></span>
                                </label>

                                <label className="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-400">
                                    <input type="radio" name="color-choice" value="Gray" className="sr-only" aria-labelledby="color-choice-1-label"/>
                                    <p id="color-choice-1-label" className="sr-only">
                                    Gray
                                    </p>
                                    <span aria-hidden="true" className="h-8 w-8 bg-gray-200 border border-black border-opacity-10 rounded-full"></span>
                                </label>
                                <label className="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-900">
                                    <input type="radio" name="color-choice" value="Black" className="sr-only" aria-labelledby="color-choice-2-label" />
                                    <p id="color-choice-2-label" className="sr-only">
                                    Black
                                    </p>
                                    <span aria-hidden="true" className="h-8 w-8 bg-gray-900 border border-black border-opacity-10 rounded-full"></span>
                                </label>
                                </div>
                            </fieldset>
                            </div>

                            <div className="mt-10">
                            <div className="flex items-center justify-between">
                                <h3 className="text-sm text-gray-900 font-medium">Size</h3>
                                <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">Kích thước</a>
                            </div>

                            <fieldset className="mt-4">
                                <legend className="sr-only">
                                Choose a size
                                </legend>
                                <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">

                                
                                    <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                                        <input type="radio" name="size-choice" id="size" value="X" className="sr-only" aria-labelledby="size-choice-1-label"/>
                                        <p id="size-choice-1-label">X</p>
                                        <div className="absolute -inset-px rounded-md pointer-events-none" aria-hidden="true"></div>
                                    </label>
                                    <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                                        <input type="radio" name="size-choice" id="size" value="XL" className="sr-only" aria-labelledby="size-choice-1-label"/>
                                        <p id="size-choice-1-label">XL</p>
                                        <div className="absolute -inset-px rounded-md pointer-events-none" aria-hidden="true"></div>
                                    </label>
                                    <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                                        <input type="radio" name="size-choice" id="size" value="XXL" className="sr-only" aria-labelledby="size-choice-1-label"/>
                                        <p id="size-choice-1-label">XXL</p>
                                        <div className="absolute -inset-px rounded-md pointer-events-none" aria-hidden="true"></div>
                                    </label>

                                
                                </div>
                            </fieldset>
                            </div>

                            <button type="submit" className="btnAddToCart mt-10 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Thêm vào giỏ</button>
                        
                        </div>

                        <div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                        <div>
                            <h3 className="sr-only">Description</h3>

                            <div className="space-y-6">
                            <p className="text-base text-gray-900">Content Product</p>
                            </div>
                        </div>

                        <div className="mt-10">
                            <h3 className="text-sm font-medium text-gray-900">Nổi bật</h3>

                            <div className="mt-4">
                            <ul role="list" className="pl-4 list-disc text-sm space-y-2">
                                <li className="text-gray-400"><span className="text-gray-600">Cắt và may thủ công tại địa phương</span></li>

                                <li className="text-gray-400"><span className="text-gray-600">Được nhuộm bằng các màu độc quyền của chúng tôi</span></li>

                                <li className="text-gray-400"><span className="text-gray-600">Rửa trước &amp; thu nhỏ trước</span></li>

                                <li className="text-gray-400"><span className="text-gray-600">100% cotton siêu mềm</span></li>
                            </ul>
                            </div>
                        </div>

                        <div className="mt-10">
                            <h2 className="text-sm font-medium text-gray-900">Thông tin chi tiết</h2>

                            <div className="mt-4 space-y-6">
                            <p className="text-sm text-gray-600"></p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>




            : <h3>Không có sản phẩm</h3>}




    </div>



)
}

export default DetailPage