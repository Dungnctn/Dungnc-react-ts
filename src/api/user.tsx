import instance from "./instance"

export const signup = () => {
    const url = `/signup`
    return instance.post(url)
}

export const signin = (data: void) => {
    const url = `signin`
    return instance.post(url, data)
}