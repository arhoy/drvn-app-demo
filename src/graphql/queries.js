/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTeam = /* GraphQL */ `
  query GetTeam($id: ID!) {
    getTeam(id: $id) {
      id
      name
      users {
        items {
          id
          username
          email
          registered
          role
          createdAt
          updatedAt
        }
        nextToken
      }
      tags
      owner
      updatedAt
      createdAt
    }
  }
`;
export const listTeams = /* GraphQL */ `
  query ListTeams(
    $filter: ModelTeamFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTeams(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        users {
          nextToken
        }
        tags
        owner
        updatedAt
        createdAt
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      email
      registered
      role
      team {
        id
        name
        users {
          nextToken
        }
        tags
        owner
        updatedAt
        createdAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        email
        registered
        role
        team {
          id
          name
          tags
          owner
          updatedAt
          createdAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const searchTeams = /* GraphQL */ `
  query SearchTeams(
    $filter: SearchableTeamFilterInput
    $sort: SearchableTeamSortInput
    $limit: Int
    $nextToken: String
  ) {
    searchTeams(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        users {
          nextToken
        }
        tags
        owner
        updatedAt
        createdAt
      }
      nextToken
      total
    }
  }
`;
export const searchUsers = /* GraphQL */ `
  query SearchUsers(
    $filter: SearchableUserFilterInput
    $sort: SearchableUserSortInput
    $limit: Int
    $nextToken: String
  ) {
    searchUsers(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        username
        email
        registered
        role
        team {
          id
          name
          tags
          owner
          updatedAt
          createdAt
        }
        createdAt
        updatedAt
      }
      nextToken
      total
    }
  }
`;
