import React, { useEffect, useContext } from 'react';

// formating
import Moment from 'react-moment';
import 'moment-timezone';

// styling
import styled from '@emotion/styled';

// routing
import { Link } from '@reach/router';

// aws
import { API, graphqlOperation } from 'aws-amplify';

// aws functions
import { deleteTeam } from '../../../../../graphql/mutations';
import { onDeleteTeam } from '../../../../../graphql/subscriptions';

// reusable components
import { TagContainer, Tag } from '../../../../reusableStyles/tags/Tag';
import { UpdateModalForm } from './UpdateModalForm';

// context
import { TeamsContext } from '../../../../../context/teams-context';
import { UserContext } from '../../../../../context/user-context';
import { StyledButton } from './Styled';

const Container = styled.div`
  color: ${props => props.theme.colors.black};
  background: ${props => props.theme.colors.lightgrey};
  padding: 1rem 1.5rem;
  display: grid;
  font-size: 1.6rem;
  margin: 1.25rem 0;
  &:hover {
    -webkit-box-shadow: 10px 11px 8px -5px rgba(0, 0, 0, 0.08);
    -moz-box-shadow: 10px 11px 8px -5px rgba(0, 0, 0, 0.08);
    box-shadow: 10px 11px 8px -5px rgba(0, 0, 0, 0.08);
  }
  @media (min-width: ${props => props.theme.screenSize.mobileL}) {
    grid-template-columns: 3fr 1fr;
  }
`;

const SubContainerContent = styled.div``;

const SubContainerButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    justify-content: flex-start;
  }
`;

const LinkContainer = styled(Link)`
  background: ${props => props.theme.colors.lightgrey};
`;

const TitleContainer = styled.div`
  & h4 {
    font-weight: bold;
    font-size: 1.8rem;
  }
  & p {
    margin: 0;
    padding: 0;
    font-size: 1.3rem;
    opacity: 0.9;
    color: ${props => props.theme.colors.black};
  }
`;

export const TeamItem = ({ data }) => {
  // context
  const [teams, setTeams] = useContext(TeamsContext);

  const user = useContext(UserContext);
  console.log('user is', user);

  useEffect(() => {
    const deleteProductListener = API.graphql(
      graphqlOperation(onDeleteTeam),
    ).subscribe({
      next: item => {
        const deleteItem = item.value.data.onDeleteTeam;
        setTeams(prevTeams => {
          const updatedItems = prevTeams.items.filter(
            team => team.id !== deleteItem.id,
          );

          return { ...teams, items: updatedItems };
        });
      },
    });

    // clean up
    return () => {
      deleteProductListener.unsubscribe();
    };
    // pass in teams to ensure it listens for change in teams array
  }, [teams]);
  const deleteButtonHandler = async () => {
    try {
      const input = {
        id: data.id,
      };
      await API.graphql(graphqlOperation(deleteTeam, { input }));
    } catch (error) {
      console.error('Could Not Delete Team at this Time', error);
    }
  };

  return (
    <Container>
      <SubContainerContent>
        <LinkContainer to={`/app/teams/${data.id}`}>
          <TitleContainer>
            <h4>{data.name}</h4>
            <h5>Created By: {data.owner}</h5>

            <p>
              Created At:{' '}
              <Moment
                format="MMMM Do YYYY | LT"
                date={new Date(data.createdAt)}
              />
            </p>
            {data.createdAt !== data.updatedAt && (
              <p>
                Last Updated:{' '}
                <Moment
                  format="MMMM Do YYYY | LT"
                  date={new Date(data.updatedAt)}
                />
              </p>
            )}
          </TitleContainer>
          <TagContainer>
            <Tag>{data.tags && data.tags[0]}</Tag>
          </TagContainer>
        </LinkContainer>
      </SubContainerContent>

      <SubContainerButtons>
        <StyledButton onClick={deleteButtonHandler}>Delete</StyledButton>
        <UpdateModalForm team={data} />
      </SubContainerButtons>
    </Container>
  );
};
