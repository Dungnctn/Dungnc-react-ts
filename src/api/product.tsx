import { productDetailType } from "../type/productType";
import { isAuthenticate } from "../utils/localstorage";
import instance from "./instance";


export const getAllProduct = () => {
    const url = `/products`;
    return instance.get(url)
}

export const getProduct = (id:number) => {
    const url = `/product/${id}`;
    return instance.get(url)
}

export const removeProduct = (id:number, user: any, token: any) => {
    const url = `/product/${id}/${user._id}`;
    return instance.delete(url, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
}

export const addProduct = (product: productDetailType, user:any, token:any) => {
    // const {token, user} = isAuthenticate()
    const url = `/product/${user._id}`
    return instance.post(url, product, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
}

export const updateProduct = (product: productDetailType, user: any, token: any) => {
    const url = `/product/${product._id}/${user._id}`;
    return instance.put(url, product, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
}