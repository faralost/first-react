import {useEffect, useState} from "react";
import {MyProduct} from "../models";
import axios, {AxiosError} from "axios";

export function useProducts() {
    const [products, setProducts] = useState<MyProduct[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    async function fetchProducts() {
        try {
            setError('')
            setLoading(true)
            const response = await axios.get<MyProduct[]>('https://fakestoreapi.com/products?limit=5')
            setProducts(response.data)
            setLoading(false)
        } catch (e: unknown) {
            const error = e as AxiosError
            setLoading(false)
            setError(error.message)
        }
    }

    useEffect(
        () => {
            fetchProducts()
        },
        []
    )
    return {products, error, loading}
}