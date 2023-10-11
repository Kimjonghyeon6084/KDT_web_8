import { createContext } from "react";

//context
const createContext = createContext({
  cart : [],
  setCart : () => {},
})

//provider component
export function CartProvider(props) {
  const [cart, setCart]
}