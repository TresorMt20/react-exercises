import React, { useState } from 'react';
import data from './data';
import Product from './Product';

export default function HomeProduct() {

    const [sum, setSum] = useState(0);
    const [instock, setinstock] = useState(data.products[1].countInStock)

    const Increment = () => {

        if (instock === 0) console.log("stock over");
        else {
            setSum(sum + data.products[1].price);
            setinstock(instock - 1);

        }

    }

    const Decrement = () => {
        if (instock < data.products[1].countInStock) {
            setSum(sum - data.products[1].price);
            setinstock(instock + 1);

        } else console.log("max of stock")

    }

    return (
        <div className="row">
            {/* {
                data.products.map(product => (<Product key={product._id} product={product}></Product>) )
            } */}
            <div className="col-2">
                <img src={data.products[1].image} className="medium" />
            </div>
            <div className="col-1">
                <div>
                    <ul>
                        <li>
                            <h1>{data.products[1].name}</h1>
                        </li>
                        <li>
                            The rating {data.products[1].rating}
                        </li>
                        <li>
                            Price : $ {data.products[1].price}
                        </li>
                        <li>
                            Description: <p>{data.products[1].description}</p>
                        </li>
                    </ul>
                </div>

            </div>
            <div className="col-1">
                <div>
                    <ul>In stock: {data.products[1].countInStock}</ul>
                    <ul>The sum: {sum}</ul>
                    <ul>Actual price: {data.products[1].price}</ul>
                    <button onClick={Increment}>
                        +
                    </button>
                    <div></div>
                    <button onClick={Decrement}>
                        -
                    </button>

                </div>

            </div>

        </div>
    )
}
