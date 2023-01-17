import React, {useState} from "react";
import {MyProduct} from "../models";

interface ProductProps {
    product: MyProduct
}

export function Product({product}: ProductProps) {
    const [details, setDetails] = useState(false)
    const btnBgClassName = details ? 'bg-yellow-400' : 'bg-blue-400'
    const btnClasses = ['px-4 py-2 border', btnBgClassName]

    return (
        <div className='border px-4 py-2 rounded flex flex-col items-center mb-2'>
            <img src={product.image} alt={product.title} className="w-1/6"/>
            <p>{product.title}</p>
            <span className="font-bold">{product.price}$</span>
            <button
                className={btnClasses.join(' ')}
                onClick={() => setDetails(prevState => !prevState)}
            >
                {details ? 'Hide Details' : 'Show Details'}
            </button>
            {details && <div>
                <p>{product.description}</p>
                <p>Rate: <span style={{fontWeight: 'bold'}}>{product.rating.rate}</span></p>
            </div>}
        </div>
    )
}