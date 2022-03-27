import { cateDetailType } from "../type/categoryType";
import instance from "./instance";

export const getAll = () => {
    const url = `/category`;
    return instance.get(url)
}

export const get = (id: number) => {
    const url = `/category/${id}`
    return instance.get(url);
}

export const remove = (id: number, user:any, token:any) => {
    const url = `/category/${id}/${user._id}`
    return instance.delete(url, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });
}

export const add = (category: cateDetailType, user:any, token:any) => {
    const url = `/category/${user._id}`;
    return instance.post(url, category, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });
}

export const update = (category: cateDetailType, user:any, token:any) => {
    const url = `/category/${category._id}/${user._id}`;
    return instance.put(url, category, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });
}