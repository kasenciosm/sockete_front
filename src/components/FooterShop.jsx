import { useCart } from "../hooks/useCart";
import { useFilters } from "../hooks/UseFilters";

export function FooterShop() {
    const { filters } = useFilters()
    const { cart } = useCart()

    return (
        <footer className="bg-slate-600 bg-opacity-80 top-60 fixed px-2 py-2 rounded-lg">
            {
                JSON.stringify(filters, null, 2)
            }
            {
                JSON.stringify(cart, null, 2)
            }
        </footer>
    )
}