import { Author, Text } from './Reviews.styled';

export const Reviews = ({ review }) => {
  return (
    <>
      <Author>Author: {review.author}</Author>
      <Text>{review.content}</Text>
    </>
  );
};
