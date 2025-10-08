import { graphql } from '../generated';

export const GET_CREATOR_ASSETS_QUERY = graphql(`
  query GetCreatorAssets($input: PaginationInput!) {
    getCreatorAssets(input: $input) {
      assetId
      createdAt
      creatorId
      deletedAt
      id
      type
      asset {
        blurredUrl
        createdAt
        creatorId
        fileType
        id
        mediaType
        mimeType
        rawUrl
        updatedAt
      }
    }
  }
`);

export const GET_DEFAULT_ASSETS = graphql(`
  query GetDefaultAssets($input: PaginationInput!) {
    getDefaultAssets(input: $input) {
      totalPages
      hasPrev
      hasNext
      count
      assets {
        assetId
        createdAt
        creatorId
        deletedAt
        id
        type
        asset {
          blurredUrl
          createdAt
          creatorId
          fileType
          id
          mediaType
          mimeType
          rawUrl
          updatedAt
          vaultObjectId
        }
        creatorProfile {
          bio
          creatorId
          user {
            avatarUrl
            bannerUrl
            id
            username
          }
        }
      }
    }
  }
`);

export const GET_DEFAULT_CREATOR_ASSETS_QUERY = graphql(`
  query GetDefaultCreatorAssets($input: PaginationInput!) {
    getDefaultCreatorAssets(input: $input) {
      assetId
      createdAt
      creatorId
      deletedAt
      id
      type
      asset {
        blurredUrl
        createdAt
        creatorId
        fileType
        id
        mediaType
        mimeType
        rawUrl
        updatedAt
        vaultObject {
          vault {
            keywords
            description
            id
          }
          contentType
          fileType
          id
          status
        }
      }
      creatorProfile {
        creatorId
        bio
        displayOnlineStatus
        user {
          avatarUrl
          bannerUrl
          id
          username
        }
      }
    }
  }
`);
