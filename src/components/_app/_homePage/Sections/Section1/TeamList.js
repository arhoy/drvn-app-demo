import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { TeamsContext } from '../../../../../context/teams-context';
import { IoMdSad } from 'react-icons/io';
import { TeamItem } from './TeamItem';

const Container = styled.div``;

const NoTeamsContainer = styled.div`
  font-size: 1.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  & h3,
  p {
    text-align: center;
  }
`;

const StyledIcon = styled(IoMdSad)`
  color: ${props => props.theme.colors.primaryDark};
  font-size: 6rem;
`;

export const TeamList = () => {
  const [teams] = useContext(TeamsContext);

  console.log('teams ', teams);
  return (
    <Container>
      {teams.items.length > 0 ? (
        teams.items.map(item => <TeamItem key={item.id} data={item} />)
      ) : (
        <NoTeamsContainer>
          <h3>No Teams Found</h3>
          <StyledIcon />
          <p>Add one above to get started!</p>
        </NoTeamsContainer>
      )}
    </Container>
  );
};
