import React, {useState} from "react";
import {MyProduct} from "../models";
import axios from "axios";
import {ErrorMessage} from "./ErrorMessage";

const productData: MyProduct =  {
    title: '',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic',
    rating: {
        rate: 10,
        count: 1
    }
}

interface CreateProductProps{
    onCreate: (product: MyProduct) => void
}

export function CreateProduct({onCreate}: CreateProductProps) {
    const [value, setValue] = useState('')
    const [error, setError] = useState('')

    const submitHandler = async (event: React.FormEvent) => {
        event.preventDefault()
        setError('')

        if (value.trim().length === 0) {
            setError('Please enter valid title!')
            return
        }

        productData.title = value
        const response =  await axios.post<MyProduct>('https://fakestoreapi.com/products', productData)
        onCreate(response.data)
    }

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    return (
        <form onSubmit={submitHandler}>
            <input
                type="text"
                className="border py-2 px-4 mb-2 w-full outline-0"
                placeholder="Enter product title..."
                value={value}
                onChange={changeHandler}
            />
            {error && <ErrorMessage error={error}/>}
            <button
                className="py-2 px-4 b order bg-yellow-400"
                type="submit"
            >Create
            </button>
        </form>
    )
}
