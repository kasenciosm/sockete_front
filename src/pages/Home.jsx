import Title from '../components/Title'
import box from '/imagen/box-socks.jpeg'
import wonderland from '/imagen/wonderland-socks.jpeg'
import okText from '/imagen/ok_text-socks.jpeg'
import brand from '/imagen/brand-socks.jpeg'
import ProductList from "../components/ProductList"
import Slider from "../components/Slider"
import { useEffect, useState } from "react"
import axios from "axios"
import Footer from '../components/Footer'

function Home() {

  const [products, setProducts] = useState()


  const fetchProducts = async () => {
    const BASE_URL = "http://localhost:3000/products"
    const response = await axios.get(BASE_URL)
    console.log(response.data)
    return response.data
  }
  useEffect(() => {
    fetchProducts()
      .then(data => setProducts(data.slice(0, 8)))
  }, [])

  return (
    <>
      <section className="flex justify-center bg-[url('./public/imagen/brand-socks.jpeg')] p-4">
        <Slider />
      </section>
      <div className="xl:px-10 px-2">
        <Title className="py-3" text='Nuestras medias' />
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full">
          <div className='aspect-w-10 aspect-h-12'>
            <img className='rounded-lg shadow-lg shadow-yellow-800' src={box} />
          </div>
          <div className='aspect-w-10 aspect-h-12'>
            <img className='rounded-lg shadow-lg shadow-cyan-800' src={wonderland} />
          </div>
          <div className='aspect-w-10 aspect-h-12'>
            <img className='rounded-lg shadow-lg shadow-purple-800' src={brand} />
          </div>
          <div className='aspect-w-10 aspect-h-12'>
            <img className='rounded-lg shadow-lg shadow-pink-800' src={okText} />
          </div>

        </div>
      </div >
      <section className="xl:px-10 px-2 mb-20">
        <ProductList heading="Nuestras Medias" products={products} />
      </section>
      <Footer />
    </>
  )
}

export default Home
