import { graphql } from '../generated';

export const DOWNLOAD_CREATOR_OBJECTS_AS_BATCH_MUTATION = graphql(`
  mutation DownloadCreatorObjectsAsBatch($input: UploadVaultQueueInput!) {
    downloadCreatorObjectsAsBatch(input: $input)
  }
`);

export const TERMINATE_ALL_JOBS_MUTATION = graphql(`
  mutation Terminate {
    terminate
  }
`);

export const GET_TOTAL_VAULT_OBJECTS_COUNT_BY_TYPE_QUERY = graphql(`
  query GetTotalObjectsAsType($input: PaginationInput!) {
    getTotalObjectsAsType(input: $input)
  }
`);

export const CLEAN_UP_VAULT_OBJECTS_OF_A_CREATOR_MUTATION = graphql(`
  mutation CleanUpVaultObjectsOfACreator($input: CleanUpVaultInput!) {
    cleanUpVaultObjectsOfACreator(input: $input)
  }
`);

export const GET_ALL_OBJECTS_COUNT_OF_EACH_TYPE = graphql(`
  query GetCountOfObjectsOfEachType {
    getCountOfObjectsOfEachType {
      fulfilled
      pending
      processing
      rejected
    }
  }
`);

export const GET_VAULT_OBJECTS_BY_VAULT_ID_QUERY = graphql(`
  query GetVaultObjectsByVaultId($input: PaginationInput!) {
    getVaultObjectsByVaultId(input: $input) {
      count
      hasNext
      hasPrev
      totalPages
      vaultObjects {
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
        contentType
        fileType
        status
        vaultId
      }
      vault {
        createdAt
        creatorId
        deletedAt
        description
        id
        keywords
        preview
        updatedAt
        url
      }
    }
  }
`);

export const GET_DEFAULT_VAULTS_QUERY = graphql(`
  query GetDefaultVaults($input: PaginationInput!) {
    getDefaultVaults(input: $input) {
      count
      hasNext
      hasPrev
      totalPages
      vaults {
        creatorId
        description
        id
        keywords
        creatorProfile {
          creatorId
          user {
            avatarUrl
            bannerUrl
            id
            username
          }
        }
        createdAt
        preview
      }
    }
  }
`);
