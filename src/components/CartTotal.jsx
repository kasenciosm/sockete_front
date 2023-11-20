import { useContext } from "react";
import { CartContext } from "../context/Cart";

const CartTotal = () => {
    const { cart } = useContext(CartContext)

    const total = cart.reduce((acc, el) => acc + el.price * el.quantity, 0)
    return (
        <div>
            <h3 className="font-semibold text-center"> Total a pagar: S/. {total}</h3>
        </div>
    )
}

export default CartTotal