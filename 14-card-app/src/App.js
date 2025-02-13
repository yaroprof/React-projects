import styled from "styled-components";
import ProductCard from "./ProductCard";
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

  const product = {
    title: 'Назва продукту',
    description: 'Опис продукту',
    image: 'https://images.unsplash.com/photo-1739036462754-6e86520998a2?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  }


  return (
    <Cards>

      <ProductCard product={product}  />
      <ProductCard product={product}  />
      <ProductCard product={product}  />
      <ProductCard product={product}  />
      <ProductCard product={product}  />
      <ProductCard product={product}  />
      <ProductCard product={product}  />
      <ProductCard product={product}  />

    </Cards>
  );
}

export default App;
