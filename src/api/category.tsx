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

export const remove = (id: number) => {
    const url = `/category/${id}`
    return instance.delete(url);
}

export const add = (category: cateDetailType) => {
    const url = `/category`;
    return instance.post(url, category);
}

export const update = (category: cateDetailType) => {
    const url = `/category/${category._id}`;
    return instance.put(url, category);
}