import React, { useEffect, useState } from 'react'

export default function Products() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const url = "https://dummyjson.com/products";

      const data = await fetch(url)

      const p = await data.json()

      setProducts(p.products)

      console.log(p.products)
    }

    fetchProducts()

  }, [])

  return (
    <ul className='grid grid-cols-1 md:grid-cols-4 gap-1'>
      {products.map((product, index) => (
        <li className='bg-bgColor text-gray p-5 rounded-[20px]' key={index}>
          <img src={product.images[0]} width="1000rem" alt="Product Image" />
          <p>{product.title}</p>
          <p>${product.price}</p>
          <p>⭐{product.rating}</p>
        </li>
      ))}
    </ul>
  )
}
