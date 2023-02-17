import React, { useState, useMemo, useRef } from "react";

function Memouse() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState([]);

  const nameRef = useRef();

  const handleSubmit = () => {
    setProducts([
      ...products,
      {
        name,
        price: +price,
      },
    ]);

    setName("");
    setPrice("");
    nameRef.current.focus();
  };
  // Sử dụng cách này sẽ thừa vì total được tính re-render lại tránh lặp lại
  //   const total = products.reduce((result, prod) => {
  //     return result + prod.price;
  //   }, 0);
  const total = useMemo(() => {
    const result = products.reduce((result, prod) => {
      return result + prod.price;
    }, 0);

    return result;
  }, [products]);

  return (
    <div>
      <input
        ref={nameRef}
        value={name}
        placeholder="Enter name..."
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        value={price}
        placeholder="Enter price..."
        onChange={(e) => setPrice(e.target.value)}
      />
      <button onClick={handleSubmit}>Add</button>
      <br />
      <span>Total: {total}</span>
      <br />
      <ul>
        {products.map((product, index) => (
          <li key={index}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Memouse;
