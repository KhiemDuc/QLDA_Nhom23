import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useShoppingContext } from '../contexts/ShoppingContext'
import DATA from '../data/products'
import { useNavigate } from 'react-router-dom'

type ProductItem = {
    id: number
    name: string
    price: number
    desc: string
    img:string
}

const Products = () => {

    // const [products, setProducts] = useState<ProductItem[]>([])

    const { addCartItem } = useShoppingContext()
    const navigate = useNavigate();
    const products = DATA


    // useEffect(() => {
    //     console.log("get products data from api")
    //     const fetchProducts = async () => {
    //         try {
    //             const res = await axios.get('http://localhost:3000/products')
    //             console.log("products=> ", res)
    //             setProducts(res.data)
    //         } catch (error) {
    //             console.log("error=> ", error)
    //         }
    //     }
    //     fetchProducts()
    // }, [])
    const handleClick = (id:number) => {
        
        // Điều hướng qua router product/:id
        navigate(`/product/${id}`);
    };

    return (
        <div className="row">
            <div className="row mt-4 mb-4">
                            <div className="col-12 text-center">
                                <h1>Product</h1>
                                <hr />
                            </div>
                        </div>
            {products.map(item => {
                return (
                    <div key={item.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
                        <div className="card myElement" onClick={()=>handleClick(item.id)} >
                            <img src={item.img} className="card-img-top" alt={item.name} />
                            <div className="card-body" >
                                <p className="card-title">{item.name}</p>
                                <p className="card-text">${item.price}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Products