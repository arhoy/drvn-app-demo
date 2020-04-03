import React from 'react';
import styled from '@emotion/styled';
import { H1 } from '../../../../reusableStyles/typography/Typography';

import { NewTeamForm } from './NewTeamForm';
import { ModalForForm } from './ModalForForm';
import { timeOfDayGreeting } from '../../../../../utils/dateTimeFun';

const Container = styled.div``;

const TitleContainer = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & p {
    text-align: center;
  }
`;

const StyledH1 = styled(H1)`
  text-align: center;
  line-height: 4rem;
`;

export const NewTeam = () => {
  return (
    <Container>
      <TitleContainer>
        <StyledH1> {timeOfDayGreeting()} Admin! </StyledH1>
        <p> Create Or View your Existing Teams</p>
      </TitleContainer>
      <ModalForForm>
        <NewTeamForm />
      </ModalForForm>
    </Container>
  );
};
