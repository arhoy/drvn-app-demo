import React, { useState, useContext } from 'react';

// styling
import styled from '@emotion/styled';
import { Menu, Dropdown } from 'antd';

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
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  outline: none;
  border: 2px solid black;
  padding: 0.4rem 0.5rem;
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
  const [sortField, setSortField] = useState('createdAt');
  const [sortOrder, setSortOrder] = useState('desc');

  // run graphQL operation
  const runSearchOperation = async (field, direction) => {
    if (searchTerm !== '') {
      const result = await API.graphql(
        graphqlOperation(searchTeams, {
          filter: {
            name: { matchPhrasePrefix: searchTerm },
          },
          sort: {
            field,
            direction,
          },
        }),
      );
      // update teams context
      setTeams({ ...teams, items: result.data.searchTeams.items });

      // update the state
      setHasSearched(true);
    } else {
      const result = await API.graphql(
        graphqlOperation(searchTeams, {
          filter: {
            name: { wildcard: '*' },
          },
          sort: {
            field: sortField,
            direction: sortOrder,
          },
        }),
      );
      // update teams context
      setTeams({ ...teams, items: result.data.searchTeams.items });

      // update the state
      setHasSearched(false);
    }
  };

  // update teams based on search
  const submitSearchHandler = e => {
    e.preventDefault();
    runSearchOperation(sortField, sortOrder);
  };

  // handle input
  const searchTermHandler = e => {
    setSearchTerm(e.target.value);
  };

  // clear search filters and inputs
  const clearSearchHandler = async (field, direction) => {
    const result = await API.graphql(
      graphqlOperation(searchTeams, {
        filter: {
          name: { wildcard: '*' },
        },
        sort: {
          field,
          direction,
        },
      }),
    );
    // update context
    setTeams({ ...teams, items: result.data.searchTeams.items });
    // update state
    setSearchTerm('');
    setHasSearched(false);
  };

  // sort order button handler
  const sortOrderButtonHandler = () => {
    if (sortOrder === 'desc') {
      setSortOrder('asc');
      runSearchOperation(sortField, 'asc');
    } else {
      setSortOrder('desc');
      runSearchOperation(sortField, 'desc');
    }
  };

  // sort field button handler
  const sortFieldButtonHandler = e => {
    console.log(e.key);
    setSortField(e.key);
    runSearchOperation(e.key, sortOrder);
  };

  // sort field menu options
  const sortFieldMenu = (
    <Menu>
      <Menu.Item onClick={sortFieldButtonHandler} key="name">
        Name
      </Menu.Item>
      <Menu.Item onClick={sortFieldButtonHandler} key="createdAt">
        Created At
      </Menu.Item>
      <Menu.Item onClick={sortFieldButtonHandler} key="updatedAt">
        Updated At
      </Menu.Item>
    </Menu>
  );

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
        <ButtonContainer>
          {/* Submit Search  */}
          <Button type="submit">Search</Button>
          {/* Clear Search  */}
          <Button
            onClick={() => clearSearchHandler(sortField, sortOrder)}
            type="button"
          >
            Clear
          </Button>
          {/* Order Search   */}
          <Button onClick={sortOrderButtonHandler} type="button">
            {sortOrder === 'desc' ? 'Sort Asc' : 'Sort Desc'}
          </Button>

          {/* Choose Sort Field   */}
          <Dropdown overlay={sortFieldMenu} trigger={['click']}>
            <Button
              className="ant-dropdown-link"
              onClick={e => e.preventDefault()}
            >
              Sort By
            </Button>
          </Dropdown>
        </ButtonContainer>
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
