import { useState } from 'react';

function Shoppingcart() {

    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [cart, setCart] = useState([]);

    const addProduct = () => {
        // Waxaan hubinaynaa in labada input-na wax ku qoran yihiin
        if (productName.trim() === '' || productPrice.trim() === '') return;

        //  (Product object)
        const newProduct = {
            id: Date.now(), 
            name: productName,
            price: parseFloat(productPrice),
            quantity: 1 
        };

        
        setCart([...cart, newProduct]);
        setProductName('');
        setProductPrice('');
    };

    
    const increaseQuantity = (id) => {
        setCart(cart.map(item =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        ));
    };

    
    const decreaseQuantity = (id) => {
        setCart(cart.map(item =>
            item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
        ));
    };

    
    const removeFromCart = (id) => {
        setCart(cart.filter(item => item.id !== id));
    };

    const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

    return (
        <div>
            <h1>Simple Shopping Cart</h1>

            <h2>Add A Product</h2>
            <input
                type="text"
                placeholder="Product Name"
                value={productName}
                onChange={(e) => setProductName(e.target.value)} />

            <input
                type="text"
                placeholder="Product Price"
                value={productPrice}
                onChange={(e) => setProductPrice(e.target.value)} />

            <button onClick={addProduct}>Add Product</button>

    

            <div>
                <h2>products in cart</h2>

                {cart.map((item) => (
                    <div key={item.id} style={{ marginBottom: '15px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
                        <ul>
                            <li>Product Name: {item.name}</li>
                            <li>Product Price: ${item.price}</li>
                            <li>
                                Quantity: {item.quantity}
                                {/* Buttons + iyo - */}
                                <button onClick={() => increaseQuantity(item.id)} style={{ marginLeft: '10px' }}>+</button>
                                <button onClick={() => decreaseQuantity(item.id)} style={{ marginLeft: '5px' }}>-</button>
                            </li>
                        </ul>
                        {/* remove button */}
                        <button onClick={() => removeFromCart(item.id)}>Remove</button>
                    </div>
                ))}

                {/* Total price */}
                <span>Total Price: ${totalPrice.toFixed(2)}</span>
            </div>
        </div>
    )
}

export default Shoppingcart
