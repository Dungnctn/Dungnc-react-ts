export type productDetailType = {
    _id: number,
    name: string,
    price: number
}

export type productType = [
    productDetailType
]

export type userDetailType = {
    user: string,
    email: string,
    password: string
}

export type userType = [
    userDetailType
]
