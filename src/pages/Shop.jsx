import { useEffect, useState } from 'react'
import axios from 'axios'
import ProductList from '../components/ProductList'
import Footer from '../components/Footer'
import FilterHeader from '../components/filterHeader'
import { useFilters } from '../hooks/UseFilters'



function Shop() {

    const [products, setProducts] = useState([])
    const { filterProducts } = useFilters()

    const fetchProducts = async () => {
        const BASE_URL = "http://localhost:3000/products"
        const response = await axios.get(BASE_URL)
        return response.data
    }

    const filteredProducts = filterProducts(products)
    useEffect(() => {
        fetchProducts()
            .then(data => setProducts(data))
    }, [])

    return (
        <>
            <FilterHeader />
            <section className='xl:px-10 px-2 mb-20'>
                <ProductList heading="Los Socketes" products={filteredProducts} />
            </section>
            <Footer />
        </>

    )
}

export default Shop