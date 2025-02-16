import styled from "styled-components";
import ProductCard from "./ProductCard";
import { useState } from "react";
// import styled from 'styled-components';

const Cards = styled.div`
  margin: 5em auto;
  padding: 2em;
  display: flex;
  justify-content: center;
  max-width: 90%;
  border: 1px solid #ccc;
  background-color: #f9f9f9;
  flex-wrap: wrap;
`

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      title: 'Назва продукту 1',
      description: 'Опис продукту 1',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 2,
      title: 'Назва продукту 2',
      description: 'Опис продукту 2',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 3,
      title: 'Назва продукту 3',
      description: 'Опис продукту 3',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 4,
      title: 'Назва продукту 4',
      description: 'Опис продукту 4',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 5,
      title: 'Назва продукту 5',
      description: 'Опис продукту 5',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 6,
      title: 'Назва продукту 6',
      description: 'Опис продукту 6',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 7,
      title: 'Назва продукту 7',
      description: 'Опис продукту 7',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 8,
      title: 'Назва продукту 8',
      description: 'Опис продукту 8',
      image: 'https://images.unsplash.com/photo-8?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },

  ])


  const handleDelete = (id) => {
    setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id))
  }

  // const handleDelete = (id) => {
  //   setProducts(products.filter((product) => product.id !== id))
  // }


  return (
    <Cards>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onDelete={() => handleDelete(product.id)} />
      ))}
    </Cards>
  );
}

export default App;
