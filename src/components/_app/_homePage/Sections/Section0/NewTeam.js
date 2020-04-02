import React from 'react';
import styled from '@emotion/styled';
import { H1 } from '../../../../reusableStyles/typography/Typography';

import { NewTeamForm } from './NewTeamForm';
import { ModalForForm } from './ModalForForm';

const Container = styled.div``;

const TitleContainer = styled.div`
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
`;

export const NewTeam = () => {
  return (
    <Container>
      <TitleContainer>
        <StyledH1>Hello Admin! Here are your Teams!</StyledH1>
        <p> Create Or View your Existing Teams</p>
      </TitleContainer>
      <ModalForForm>
        <NewTeamForm />
      </ModalForForm>
    </Container>
  );
};
