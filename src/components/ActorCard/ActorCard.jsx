import styled from 'styled-components';

const ActorCardWrapper = styled.div`
  text-align: center;
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Img = styled.img`
  margin: 0 auto;
  height: 180px;
  border-radius: 50%;
`;

const Name = styled.p`
  margin-top: 8px;
  color: #333;
  font-size: 16px;
  font-weight: bold;
`;

export const ActorCard = ({ actor }) => {
  return (
    <ActorCardWrapper>
      <Img
        src={
          actor.profile_path
            ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
            : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ09uJRvSYTZguOy_L--3XALEwxqNIuvBvF8yJOHWNiew&s'
        }
        alt=""
        width={120}
      />
      <Name>{actor.name}</Name>
      <Name>Character: {actor.character}</Name>
    </ActorCardWrapper>
  );
};
