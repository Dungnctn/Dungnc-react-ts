import instance from "./instance"

export const signup = (data: void) => {
    const url = `/signup`
    return instance.post(url, data)
}

export const signin = (data: void) => {
    const url = `signin`
    return instance.post(url, data)
}