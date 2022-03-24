import { productDetailType } from "../type/productType";
import instance from "./instance";

export const getAll = () => {
    const url = `/products`;
    return instance.get(url)
}

export const get = (id:number) => {
    const url = `/product/${id}`;
    return instance.get(url)
}

export const remove = (id:number) => {
    const url = `/product/${id}`;
    return instance.delete(url)
}

export const add = (product: productDetailType) => {
    const url = `/product`
    return instance.post(url, product)
}

export const update = (product: productDetailType) => {
    const url = `/product/${product._id}`;
    return instance.put(url, product)
}