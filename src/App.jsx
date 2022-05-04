import { useState } from 'react';
import './App.css';
import Axios from 'axios';


function App() {
  const axios = Axios.create({ baseURL: "http://localhost:1337" });

  const [products, setProducts] = useState();

  function getProducts() {

    axios.get("http://localhost:1337/api/products").then((res) => {

      setProducts(res.data.data);
    })

    console.log(products);
  }


  return (
    <div className="App">
      {
        <button onClick={getProducts} >Get Products</button>
      }
      {
        products.map((product) => {
          return (<div key={product.id} className="card">

            <p>{product.title}</p>
            <p>{product.price}</p>
            <p>{product.category.title}</p>
          </div>
          );
        })
      }
    </div>


  );
}
export default App
