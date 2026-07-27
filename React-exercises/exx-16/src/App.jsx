import { CartProvider } from "./CartContext";
import Product from "./Product";
import Cart from "./Cart";


const App = () => {

const products = [
  {
    id:1,
    name:"Widget",
    price:19.99
  },
  {
    id:2,
    name:"Gadget",
    price:29.99
  }
];
return (
<CartProvider>
<h1>Simple Shop</h1>
{
products.map(product => (
<Product 
key={product.id}
product={product}
/>
))}
<Cart />
</CartProvider>
)}


export default App;