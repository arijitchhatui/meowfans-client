import { graphql } from '../generated';

export const GET_TAGS_QUERY = graphql(`
  query GetTags($input: PaginationInput!) {
    getTags(input: $input) {
      id
      label
    }
  }
`);
