import React, { useState, useMemo, useRef, useCallback } from "react";

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

// memo ko phải useMemo
// memo : cung cấp tính năng giúp sử lý component tránh trường hợp render lại không cần thiết 
// cơ chế memo(Content) nhận vào 1 component và check các props của nó xem có re-render ko nếu chỉ 1 cái props thay đổi thì nó sẽ re-render nó dùng toán tử=== để so sánh

// useCallback sử dụng trong trường hợp sử dụng memo nhưng vẫn re-render component
// reference types mỗi lần tạo cái biến mới sẽ vùng chứa rồi tham chiếu đến nó mỗi lần render component nó sẽ tham chiếu đến khác

// useCallback giúp tránh tạo ra những hàm mới một cách không cần thiết trong function component
