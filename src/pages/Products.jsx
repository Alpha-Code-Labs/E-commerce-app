import { useEffect, useState } from "react"
import DisplayDefaultProducts from '../components/DisplayDefaultProducts'
import DisplaySearchedProducts from '../components/DisplaySearchedProducts'
import axios from 'axios'


export default function Products(props){
    const productList = props.productList
    const [defaultProductList, setDefaultProducts] = useState(null) 
    const productListUrl = ''
    const products = [{category:'Fashion', name:'color eye lens'}, {category:'electronics', name:'Refrigerator'}, {category:'fashion', name:'Maskara'}, {category:'electronics', name:'Air Congitioner'}, {category:'fashion', name:'Lipstick'}, {category:'sports', name:'Badminton Racket'}]

    useEffect(()=>{
        if(!productList){
            axios.get(productListUrl).then((response)=>{
                setDefaultProducts(response.data)
            })
        }

        setDefaultProducts(products)

    },[])


    return(
    <>
        {productList && <DisplaySearchedProducts products={productList}/>}
        {defaultProductList && <DisplayDefaultProducts products={defaultProductList} />}
    </>
    )
}