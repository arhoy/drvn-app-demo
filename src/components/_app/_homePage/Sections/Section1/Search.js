import React, { useState, useContext } from 'react';

// styling
import styled from '@emotion/styled';

// aws
import { API, graphqlOperation } from 'aws-amplify';

// context
import { TeamsContext } from '../../../../../context/teams-context';
import { searchTeams } from '../../../../../graphql/queries';

const Container = styled.div`
  max-width: ${props => props.theme.screenSize.mobileL};
  margin: 0 auto;
`;

const Form = styled.form`
  margin: 2rem 0;
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
    margin-bottom: 1rem;
  }
  & option {
    &.disabled {
      opacity: 0.7;
    }
  }
`;

const Button = styled.button`
  outline: none;
  border: 2px solid black;
  padding: 4px 8px;
  border-radius: 4px;
  background: white;
  cursor: pointer;
  margin-right: 0.7rem;
  &:hover {
    background: ${props => props.theme.colors.lightgrey};
  }
`;

const SearchSummary = styled.div`
  & span {
    font-weight: bold;
  }
`;

export const Search = () => {
  // context
  const [teams, setTeams] = useContext(TeamsContext);

  // state
  const [searchTerm, setSearchTerm] = useState('');
  const [hasSearched, setHasSearched] = useState(false);

  // update teams based on search
  const submitSearchHandler = async e => {
    e.preventDefault();
    console.log('I was submitted', searchTerm);
    const result = await API.graphql(
      graphqlOperation(searchTeams, {
        filter: {
          name: { matchPhrasePrefix: searchTerm },
        },
        sort: {
          field: 'createdAt',
          direction: 'desc',
        },
      }),
    );
    // update teams context
    setTeams({ ...teams, items: result.data.searchTeams.items });

    // update the state
    setHasSearched(true);
  };

  // handle input
  const searchTermHandler = e => {
    setSearchTerm(e.target.value);
  };
  // clear search filters and inputs
  const clearSearchHandler = async () => {
    const result = await API.graphql(
      graphqlOperation(searchTeams, {
        filter: {
          name: { wildcard: '*' },
        },
        sort: {
          field: 'createdAt',
          direction: 'desc',
        },
      }),
    );
    // update context
    setTeams({ ...teams, items: result.data.searchTeams.items });
    // update state
    setSearchTerm('');
    setHasSearched(false);
  };

  return (
    <Container>
      <Form onSubmit={submitSearchHandler}>
        <input
          onChange={searchTermHandler}
          placeholder="Search"
          name="search"
          value={searchTerm}
          required
        />

        <Button type="submit">Search</Button>
        <Button onClick={clearSearchHandler} type="button">
          Clear
        </Button>
      </Form>
      {hasSearched && (
        <SearchSummary>
          {teams.items.length} Search Result{teams.items.length !== 1 && 's'}{' '}
          for <span>{searchTerm}</span>
        </SearchSummary>
      )}
    </Container>
  );
};
