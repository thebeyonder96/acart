import Title from "./Title";
import { useAtom } from "jotai";
import { cartAmountAtom, currencyAtom, deliveryFeeAtom } from "../store/cart.atom";

const CartTotal = () => {
  const [totalAmount] = useAtom(cartAmountAtom)
  const [currency] = useAtom(currencyAtom)
  const [delivery_fee] = useAtom(deliveryFeeAtom)
  return (
    <div className="w-full">
      <div className="text-2xl">
        <Title text1="Cart" text2="Totals" />
      </div>
      <div className="flex flex-col gap-2 mt-2 text-sm">
        <div className="flex justify-between">
            <p>Subtotal</p>
            <p>{currency}{totalAmount}.00</p>
        </div>
        <hr />
        <div className="flex justify-between">
            <p>Shipping Fee</p>
            <p>{currency}{delivery_fee}.00</p>
        </div>
        <hr />
        <div className="flex justify-between">
            <p>Total</p>
            <p>{currency}{totalAmount === 0 ? 0 : totalAmount + delivery_fee}.00</p>
        </div>

      </div>
    </div>
  )
}

export default CartTotal
