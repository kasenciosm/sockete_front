import ProductCard from "./ProductCard"
import Title from "./Title"

function ProductList({ heading, products }) {
    return (
        <>
            <div className="flex justify-between items-center py-5">
                <Title text={heading} />

            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4" >
                {products && products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </>
    )
}

export default ProductList