import { productDetailType } from "../type/productType";
import instance from "./instance";

export const getAllProduct = () => {
    const url = `/products`;
    return instance.get(url)
}

export const getProduct = (id:number) => {
    const url = `/product/${id}`;
    return instance.get(url)
}

export const removeProduct = (id:number) => {
    const url = `/product/${id}`;
    return instance.delete(url)
}

export const addProduct = (product: productDetailType) => {
    const url = `/product`
    return instance.post(url, product)
}

export const updateProduct = (product: productDetailType) => {
    const url = `/product/${product._id}`;
    return instance.put(url, product)
}