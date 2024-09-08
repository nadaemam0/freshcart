export interface Cart {
    numOfCartItems:number
    data:Data
}
interface Data{
    totalCartPrice:number
    _id:string
    products:Products[]
    
}
interface Products{
    count:number
    price:number
    product:innerProduct
}
interface innerProduct{
    title:string
    imageCover:string
    category:category
    id:string
}
interface category{
    name:string
}
