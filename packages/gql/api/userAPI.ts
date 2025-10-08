import { graphql } from '../generated';

export const GET_USER_QUERY = graphql(`
  query GetUser($username: String!) {
    getUser(username: $username) {
      avatarUrl
      bannerUrl
      createdAt
      deletedAt
      firstName
      id
      lastLoginAt
      lastName
      roles
      updatedAt
      username
    }
  }
`);

export const GET_DEFAULT_CREATORS_QUERY = graphql(`
  query GetDefaultCreators($input: PaginationInput!) {
    getDefaultCreators(input: $input) {
      count
      totalPages
      hasNext
      hasPrev
      creators {
        avatarUrl
        bannerUrl
        createdAt
        deletedAt
        firstName
        id
        lastLoginAt
        lastName
        roles
        updatedAt
        username
      }
    }
  }
`);
