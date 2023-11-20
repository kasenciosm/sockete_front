import { useId } from 'react'
import { useFilters } from '../hooks/UseFilters'

export function Filters() {
    const { filters, setFilters } = useFilters()

    const minPriceFilterId = useId()
    const categoryFilterId = useId()

    const handleChangeMinPrice = (event) => {
        setFilters(prevState => ({
            ...prevState,
            minPrice: event.target.value
        }))
    }

    const handleChangeCategory = (event => {
        setFilters(prevState => ({
            ...prevState,
            category: event.target.value
        }))
    })

    return (
        <section className='flex justify-between xl:px-10 px-2 py-8 gap-8'>
            <div className='flex flex-col  items-center md:flex-row gap-4 '>
                <label htmlFor={minPriceFilterId}>Precio a partir de: </label>
                <input
                    type='range'
                    id={minPriceFilterId}
                    min='25'
                    max='50'
                    onChange={handleChangeMinPrice}
                    value={filters.minPrice}
                />
                <span>S/.{filters.minPrice}</span>
            </div>
            <div className='flex md:flex-row flex-col gap-4'>
                <label htmlFor={categoryFilterId}>Categorias</label>
                <select id={categoryFilterId} onChange={handleChangeCategory}>
                    <option value='all'>Todas</option>
                    <option value='colores'>Colores</option>
                    <option value='clasicos'>Clasicos</option>
                    <option value='caricaturas'>Caricaturas</option>
                    <option value='random'>Random</option>
                </select>
            </div>
        </section>
    )
}

export default Filters