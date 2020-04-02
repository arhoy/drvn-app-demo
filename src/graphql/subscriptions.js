/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTeam = /* GraphQL */ `
  subscription OnCreateTeam {
    onCreateTeam {
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
export const onUpdateTeam = /* GraphQL */ `
  subscription OnUpdateTeam {
    onUpdateTeam {
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
export const onDeleteTeam = /* GraphQL */ `
  subscription OnDeleteTeam {
    onDeleteTeam {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
