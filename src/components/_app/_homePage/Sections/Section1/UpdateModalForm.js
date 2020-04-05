import React, { useState, useEffect, useContext } from 'react';

// styling
import styled from '@emotion/styled';
import { Modal } from 'antd';

// aws
import { API, graphqlOperation } from 'aws-amplify';

// aws functions
import { updateTeam } from '../../../../../graphql/mutations';
import { onUpdateTeam } from '../../../../../graphql/subscriptions';

// reusableStyles
import { H3 } from '../../../../reusableStyles/typography/Typography';
import { TeamsContext } from '../../../../../context/teams-context';
import { UserContext } from '../../../../../context/user-context';
import { StyledButton } from './Styled';
import { openNotification } from '../../../../../utils/notification/openNotification';

const Container = styled.div``;

const ModalButton = styled(StyledButton)`
  &:hover {
    color: ${props => props.theme.colors.primary};
    border: 1px solid ${props => props.theme.colors.primary};
  }
`;

const FormContainer = styled.div`
  max-width: ${props => props.theme.screenSize.mobileL};
  margin: 0 auto;
  background: white;
  padding: 2rem;
`;

const Form = styled.form`
  margin: 2rem 0;
`;

const Field = styled.div`
  margin-bottom: 2rem;
  & input,
  select {
    width: 100%;
    padding: 5px;
    padding-left: 10px;
    background: transparent;
    border: none;
    border-radius: 5px;
    border: 2px solid rgba(14, 30, 37, 0.15);
    font-family: Poppins, Roboto;
    font-size: 1.4rem;
    font-weight: 400;
    outline-color: ${props => props.theme.colors.secondary};
  }
  & .label_shipped {
    display: inline-block;
    margin-bottom: 0.5rem;
  }
  & img {
    width: 20rem;
    margin-bottom: 1rem;
  }
`;

const SubmitButton = styled.button`
  outline: none;
  border: 2px solid black;
  padding: 4px 8px;
  border-radius: 4px;
  background: white;
  cursor: pointer;
  &:hover {
    background: ${props => props.theme.colors.lightgrey};
  }
  &:disabled {
    cursor: not-allowed;
  }
`;

export const UpdateModalForm = ({ team }) => {
  // context to update
  const [teams, setTeams] = useContext(TeamsContext);
  //  watch for subscription onTeamUpdate
  useEffect(() => {
    const updateTeamListener = API.graphql(
      graphqlOperation(onUpdateTeam),
    ).subscribe({
      next: teamData => {
        const updatedTeam = teamData.value.data.onUpdateTeam;
        setTeams(prevTeams => {
          const index = prevTeams.items.findIndex(
            team => team.id === updatedTeam.id,
          );
          const updatedTeams = [
            ...prevTeams.items.slice(0, index),
            updatedTeam,
            ...prevTeams.items.slice(index + 1),
          ];
          return { ...teams, items: updatedTeams };
        });
      },
    });

    // cleanup
    return () => {
      updateTeamListener.unsubscribe();
    };
  }, [setTeams, teams]);

  // context
  const user = useContext(UserContext);

  // state
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // populate form values
  const [name, setName] = useState(team.name);

  const showModal = () => {
    if (user.role_type !== 'admin') {
      openNotification('Attention', 'Only administrators can update this', 3);
      return;
    }
    setVisible(true);
  };
  const handleOk = () => {
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  // update handler for Team
  const updateTeamHandler = async e => {
    e.preventDefault();
    try {
      // grab id and new input values
      const input = {
        id: team.id,
        name,
      };

      await API.graphql(graphqlOperation(updateTeam, { input }));

      // reset state
      setName('');
      setSuccess(true);

      setTimeout(() => {
        setSuccess(false);
        setVisible(false);
        setName(name);
      }, 2000);
    } catch (err) {
      console.error(err);
      setError(err);
    }
  };

  return (
    <Container>
      <ModalButton onClick={showModal}>Update</ModalButton>
      <Modal
        title="Update Team"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <FormContainer>
          <H3>{success ? 'Team Updated!' : 'Update Team'}</H3>
          <Form onSubmit={updateTeamHandler}>
            <Field>
              <input
                onChange={event => setName(event.target.value)}
                placeholder="Enter Your Team Name"
                name="name"
                value={name}
                required
              />
            </Field>

            <Field>
              <SubmitButton disabled={!name} type="submit">
                Update Team
              </SubmitButton>
            </Field>
            {success && <p className="success"> Successfully Updated! </p>}
            {error && <p className="error"> Not Able To Update Team </p>}
          </Form>
        </FormContainer>
      </Modal>
    </Container>
  );
};
