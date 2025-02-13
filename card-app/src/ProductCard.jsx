import React, { useState } from 'react';
import styled from 'styled-components';

const Card = styled.div`
  width: 300px;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
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
  color: #007BFF;
  cursor: pointer;
  font-size: 1em;
  display: flex;
  align-items: center;

  &:hover {
    text-decoration: underline;
  }
`;

const Count = styled.span`
  margin-left: 5px;
`;


const ProductCard = ({}) => {
    const [likes, setLikes] = useState(0);
    const [comments, setComments] = useState([]);

    const handleLike =() => {
        setLikes(likes + 1);
    }

    const handleAddComment = () => {
        const comment = prompt('Enter your name')
            if (comment){
                setComments([...comments, comment])
            }
        }
    }
  

    return(
        <Card>
            <Actions>
                <Button></Button>
                <Button></Button>
                
            </Actions>
        </Card>
    )
}





















// const ProductCard = ({ product }) => {
//     const [likes, setLikes] = useState(0);
//   const [comments, setComments] = useState([]);

//   const handleLike = () => {
//     setLikes(likes + 1);
//   };

//   const handleAddComment = () => {
//     const comment = prompt('Введіть ваш коментар:');
//     if (comment) {
//       setComments([...comments, comment]);
//     }
//   };

//   return (
//     <Card>
//       <Image src={product.image} alt={product.title} />
//       <Content>
//         <Title>{product.title}</Title>
//         <Description>{product.description}</Description>
//       </Content>
//       <Actions>
//         <Button onClick={handleLike}>
//           👍
//           <Count>{likes}</Count>
//         </Button>


//         <Button onClick={handleAddComment}>
//           💬
//           <Count>{comments.length}</Count>
//         </Button>
//       </Actions>
//       {comments.length > 0 && (
//         <div>
//           <h3>Коментарі:</h3>
//           <ul>
//             {comments.map((comment, index) => (
//               <li key={index}>{comment}</li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </Card>
//   );
// };

export default ProductCard;