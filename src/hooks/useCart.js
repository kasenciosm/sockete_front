import { useContext } from "react";
import { CartContext } from "../context/Cart";

export const useCart = () => {
    const context = useContext(CartContext)

    if (context === undefined) {
        throw new Error('useCart debe ser usado dentro del CartProvider')
    }

    return context
}