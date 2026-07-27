import { useContext } from "react";
import { CartContext } from "./CartContext";

const Product = ({product}) => {

const {dispatch} = useContext(CartContext);

const addCart = () => {
dispatch({
type:"ADD_TO_CART",
payload:product
})
}

return (
<div>
<h2>{product.name}</h2>
<p>Price: ${product.price}</p>
<button onClick={addCart}>Add to Cart</button>
</div>
)}


export default Product;