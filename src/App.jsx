import { useState } from 'react';
import './App.css'


function App() {
  const [num, setNum] = useState(0);
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const users = [
    {
      "id": 7,
      "email": "michael.lawson@reqres.in",
      "first_name": "Michael",
      "last_name": "Lawson",
      "avatar": "https://reqres.in/img/faces/7-image.jpg"
    },
    {
      "id": 8,
      "email": "lindsay.ferguson@reqres.in",
      "first_name": "Lindsay",
      "last_name": "Ferguson",
      "avatar": "https://reqres.in/img/faces/8-image.jpg"
    },
    {
      "id": 9,
      "email": "tobias.funke@reqres.in",
      "first_name": "Tobias",
      "last_name": "Funke",
      "avatar": "https://reqres.in/img/faces/9-image.jpg"
    },
    {
      "id": 10,
      "email": "byron.fields@reqres.in",
      "first_name": "Byron",
      "last_name": "Fields",
      "avatar": "https://reqres.in/img/faces/10-image.jpg"
    }
  ];
  // const [text, setText] = useState("Hello");
  const handleChange = (e) => setText(e.target.value);
  const handleChange_2 = (e) => setNum(e.target.value);
  const products = [
    { title: 'Iphone 8', price: 600 },
    { title: 'Iphone X', price: 800 },
    { title: 'Iphone 11', price: 1000 },
    { title: 'Iphone 12', price: 1100 },
    { title: 'Macbook Air 13', price: 1000 },
    { title: 'Macbook Pro 13', price: 1000 },
    { title: 'Macbook Pro 14.2', price: 1500 },
    { title: 'Macbook Pro 16.2', price: 1700 },
  ];
  const [text, setText] = useState("Ip");

  return (
    <div className="App">
      {/* {
        users.map((u) => {
          return (<div key={u.id} className="card">
            <img src={u.avatar} alt={u.first_name} />
            <p>{u.first_name}</p>
            <p>{u.last_name}</p>
            <p>{u.email}</p>
          </div>
          );
        })
      } */}

      {/* <div>
        <p>{text}</p>
        <input type="text" value={text} onChange={handleChange} />
      </div>

      <div>
        <p>{num}</p>
        <input type="num" value={num} onChange={handleChange_2} />
        <p>{num % 2 == 0 ? "even" : "odd"}</p>
      </div> */}

      <div>
        <p>{text}</p>
        <input type="text" value={text} />
        <div>
          {products.filter((p) => p.title.includes(text)).map((u) => {
            return <li key={u.id}>{u.title}</li>
          })}
        </div>
      </div>
    </div>


  );
}

export default App
