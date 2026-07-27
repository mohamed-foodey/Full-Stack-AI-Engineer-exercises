import { useContext } from "react";
import { CartContext } from "./CartContext";


const Cart = () => {


const {cart, dispatch} = useContext(CartContext);



const removeItem = (id) => {

  dispatch({
    type:"REMOVE_FROM_CART",
    payload:id
  })

}



return (

<div>

<h2>
Cart Summary
</h2>


<p>
Total Items: {cart.length}
</p>



{
cart.map(item => (

<div key={item.id}>

<p>
{item.name} - ${item.price}
</p>


<button 
onClick={() => removeItem(item.id)}
>
Delete
</button>


</div>

))

}


</div>

)

}


export default Cart;