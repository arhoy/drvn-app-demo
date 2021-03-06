import React, { useState, useEffect } from 'react';

// aws
import { API, graphqlOperation } from 'aws-amplify';
import { searchTeams } from '.././../../graphql/queries';

// layout
import { DashboardLayout } from '../layouts/DashboardLayout';
import { Section0 } from './Sections/Section0/_Section0';
import { Section1 } from './Sections/Section1/Section1';

// context
import { TeamsContext } from '../../../context/teams-context';

export const HomePage = () => {
  // state
  const [teams, setTeams] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  /**
   * get the list of all created teams
   * using searchTeams to order by created date
   **/

  const handleGetTeams = async () => {
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
    setTeams(result.data.searchTeams);
    setIsLoading(false);
  };
  useEffect(() => {
    handleGetTeams();
  }, [isLoading, setTeams]);

  if (isLoading) return <p> Loading... </p>;

  return (
    <TeamsContext.Provider value={[teams, setTeams]}>
      <DashboardLayout>
        <Section0 />
        <Section1 />
      </DashboardLayout>
    </TeamsContext.Provider>
  );
};
