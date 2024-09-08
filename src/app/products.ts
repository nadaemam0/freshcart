export interface Products {
    imageCover:string,
    price:number,
    title:string,
    ratingsAverage:number,
    category: Category, 
    id:string,
    description:string,
    images?:string[]

}

interface Category{
    name:string
}