/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTeam = /* GraphQL */ `
  mutation CreateTeam(
    $input: CreateTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    createTeam(input: $input, condition: $condition) {
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
export const updateTeam = /* GraphQL */ `
  mutation UpdateTeam(
    $input: UpdateTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    updateTeam(input: $input, condition: $condition) {
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
export const deleteTeam = /* GraphQL */ `
  mutation DeleteTeam(
    $input: DeleteTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    deleteTeam(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
