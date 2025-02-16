import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 300px;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin: 20px;
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 15px;
`;

const Title = styled.h2`
  font-size: 1.5em;
  margin: 0;
`;

const Description = styled.p`
  color: #555;
`;

const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 15px 15px;
`;

const Button = styled.button`
  background: none;
  border: none;
  color: #007bff;
  cursor: pointer;
  font-size: 1em;
  display: flex;
  align-items: center;

  &:hover {
    text-decoration: underline;
  }
`;

const DeleteButton = styled.button`
  background: none;
  border: none;
  color: red;
  cursor: pointer;
  font-size: 1em;
  display: flex;
  aign-items: center;

  &:hover {
    text-decoration: underline;
  }
`;

const Count = styled.span`
  margin-left: 5px;
`;

const ProductCard = ({ product, onDelete }) => {
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);


  useEffect(() => {
    const savedLikes = localStorage.getItem(`likes-${product.id}`);
    const savedComments = JSON.parse(
      localStorage.getItem(`comments-${product.id}`)
    );

    if (savedLikes) {
      setLikes(Number(savedLikes));
    }

    if (savedComments) {
      setComments(savedComments);
    }
  }, [product.id]);

  useEffect(() => {
    if (likes > 0) {
      localStorage.setItem(`likes-${product.id}`, likes);
    }
  }, [likes, product.id]);


  useEffect(() => {
    if (comments.length > 0) {
      localStorage.setItem(`comments-${product.id}`, JSON.stringify(comments));
    }
  }, [comments, product.id]);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleAddComment = () => {
    const comment = prompt("Enter your name");
    if (comment) {
      setComments([...comments, comment]);
    }
  };

  return (
    <Card>
      <Image src={product.image} alt={product.title} />
      <Content>
        <Title>{product.title}</Title>
        <Description>{product.description}</Description>
      </Content>

      <Actions>
        <Button onClick={handleLike}>👍</Button>
        <Count>{likes}</Count>
        <Button onClick={handleAddComment}>💬</Button>
        <Count>{comments.length}</Count>
      </Actions>

      <DeleteButton onClick={() => onDelete(product.id)}>🗑 Видалити</DeleteButton>


      {comments.length > 0 && (
        <div>
          <h3>Comments:</h3>
          <ul>
            {comments.map((comment, index) => (
              <li key={index}>{comment}</li>
            ))}
          </ul>
        </div>
      )}
    </Card>
  );
};

export default ProductCard;
