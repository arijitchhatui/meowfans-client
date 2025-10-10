/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
};

export enum AssetType {
  Archive = 'ARCHIVE',
  Hidden = 'HIDDEN',
  Private = 'PRIVATE'
}

export type AssetsEntity = {
  __typename?: 'AssetsEntity';
  blurredUrl?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  creatorAssets: Array<CreatorAssetsEntity>;
  creatorId: Scalars['String']['output'];
  creatorProfile: CreatorProfilesEntity;
  fanAssets: Array<FanAssetsEntity>;
  fileType: FileType;
  id: Scalars['String']['output'];
  mediaType: MediaType;
  messageAssets: Array<MessageAssetsEntity>;
  mimeType: Scalars['String']['output'];
  postAssets: Array<PostAssetsEntity>;
  rawUrl: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  vaultObject?: Maybe<VaultObjectsEntity>;
  vaultObjectId?: Maybe<Scalars['ID']['output']>;
};

export type BlockFanInput = {
  fanId: Scalars['String']['input'];
};

export type CleanUpVaultInput = {
  creatorId: Scalars['String']['input'];
};

export enum ContentType {
  Nsfw = 'NSFW',
  Sfw = 'SFW'
}

export type CreateChannelInput = {
  creatorId: Scalars['String']['input'];
  fanId: Scalars['String']['input'];
};

export type CreateCommentInput = {
  comment: Scalars['String']['input'];
  postId: Scalars['String']['input'];
};

export type CreateImportQueueInput = {
  creatorId: Scalars['String']['input'];
  exceptions?: InputMaybe<Array<Scalars['String']['input']>>;
  exclude?: Scalars['Int']['input'];
  fileType?: FileType;
  importType?: ImportTypes;
  isNewCreator?: Scalars['Boolean']['input'];
  qualityType?: DocumentQualityType;
  serviceType?: ServiceType;
  start?: Scalars['Int']['input'];
  subDirectory: Scalars['String']['input'];
  totalContent?: Scalars['Int']['input'];
  url: Scalars['String']['input'];
};

export type CreatePostInput = {
  assetIds: Array<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  types: Array<PostTypes>;
  unlockPrice?: InputMaybe<Scalars['Int']['input']>;
};

export type CreatorAssetsEntity = {
  __typename?: 'CreatorAssetsEntity';
  asset: AssetsEntity;
  assetId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  creatorId: Scalars['String']['output'];
  creatorProfile: CreatorProfilesEntity;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  type: AssetType;
};

export type CreatorBlocksEntity = {
  __typename?: 'CreatorBlocksEntity';
  blockedAt: Scalars['DateTime']['output'];
  creatorId: Scalars['String']['output'];
  creatorProfile: CreatorProfilesEntity;
  fanId: Scalars['String']['output'];
  fanProfile: FanProfilesEntity;
  id: Scalars['String']['output'];
  unBlockedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CreatorFollowsEntity = {
  __typename?: 'CreatorFollowsEntity';
  creatorId: Scalars['String']['output'];
  creatorProfile: CreatorProfilesEntity;
  fanId: Scalars['String']['output'];
  fanProfile: FanProfilesEntity;
  followedAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  unFollowedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CreatorInterfacesEntity = {
  __typename?: 'CreatorInterfacesEntity';
  backgroundImage: Scalars['String']['output'];
  canReceiveCall: Scalars['Boolean']['output'];
  creatorId: Scalars['String']['output'];
  creatorProfile: CreatorProfilesEntity;
  id: Scalars['String']['output'];
  isPGFilterOn: Scalars['Boolean']['output'];
  mode: Scalars['String']['output'];
};

export type CreatorPaymentProfilesEntity = {
  __typename?: 'CreatorPaymentProfilesEntity';
  canTransfer: Scalars['Boolean']['output'];
  createdAt: Scalars['DateTime']['output'];
  creatorId: Scalars['String']['output'];
  creatorProfile: CreatorProfilesEntity;
  id: Scalars['String']['output'];
  stripe_connect_id: Scalars['String']['output'];
  subscriptions: Array<SubscriptionsEntity>;
};

export type CreatorProfile = {
  __typename?: 'CreatorProfile';
  avatarUrl: Scalars['String']['output'];
  creatorId: Scalars['String']['output'];
  fullName: Scalars['String']['output'];
  username: Scalars['String']['output'];
};

export type CreatorProfileOutput = {
  __typename?: 'CreatorProfileOutput';
  avatarUrl: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  username: Scalars['String']['output'];
};

export type CreatorProfilesEntity = {
  __typename?: 'CreatorProfilesEntity';
  acceptedAt?: Maybe<Scalars['DateTime']['output']>;
  allowsComment: Scalars['Boolean']['output'];
  allowsMessaging: Scalars['Boolean']['output'];
  bio?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  creatorId: Scalars['String']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  displayOnlineStatus: Scalars['Boolean']['output'];
  displayTotalPost: Scalars['Boolean']['output'];
  displayTotalSubscriber: Scalars['Boolean']['output'];
  interfaces: Array<CreatorInterfacesEntity>;
  rejectedAt?: Maybe<Scalars['DateTime']['output']>;
  socialAccount: Array<SocialAccountsEntity>;
  themeColor: Scalars['String']['output'];
  totalExclusivePost: Scalars['Float']['output'];
  totalPost: Scalars['Float']['output'];
  totalPublicPost: Scalars['Float']['output'];
  totalSubscriber: Scalars['Float']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user: UsersEntity;
  verified: Scalars['Boolean']['output'];
};

export type CreatorRestrictsEntity = {
  __typename?: 'CreatorRestrictsEntity';
  creatorId: Scalars['String']['output'];
  creatorProfile: CreatorProfilesEntity;
  fanId: Scalars['String']['output'];
  fanProfile: FanProfilesEntity;
  id: Scalars['String']['output'];
  restrictedAt: Scalars['DateTime']['output'];
  unRestrictedAt?: Maybe<Scalars['DateTime']['output']>;
};

export enum DataFetchType {
  InfiniteScroll = 'InfiniteScroll',
  Pagination = 'Pagination'
}

export type DeleteCommentInput = {
  commentId: Scalars['String']['input'];
  postId: Scalars['String']['input'];
};

export type DeleteCreatorAsset = {
  assetIds: Array<Scalars['ID']['input']>;
};

export type DeleteFollowerInput = {
  fanId: Scalars['String']['input'];
};

export type DeleteMessageInput = {
  messageId: Scalars['String']['input'];
};

export type DeleteMessagesInput = {
  messageIds: Array<Scalars['ID']['input']>;
};

export type DeletePostInput = {
  postId: Scalars['String']['input'];
};

export type DeletePostsInput = {
  postIds: Array<Scalars['ID']['input']>;
};

export type DeleteSharePostInput = {
  postId: Scalars['String']['input'];
  shareId: Scalars['String']['input'];
};

export enum DocumentQualityType {
  DefaultDefinition = 'DEFAULT_DEFINITION',
  DivDefinition = 'DIV_DEFINITION',
  HighDefinition = 'HIGH_DEFINITION',
  LowDefinition = 'LOW_DEFINITION',
  SourceDefinition = 'SOURCE_DEFINITION'
}

export type DownloadAllCreatorObjectsAsBatchInput = {
  creatorIds: Array<Scalars['ID']['input']>;
};

export enum DownloadStates {
  Fulfilled = 'FULFILLED',
  Pending = 'PENDING',
  Processing = 'PROCESSING',
  Rejected = 'REJECTED'
}

export type ExtendedUpdateCreatorProfileInput = {
  allowsComment?: InputMaybe<Scalars['Boolean']['input']>;
  allowsMessaging?: InputMaybe<Scalars['Boolean']['input']>;
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  bannerUrl?: InputMaybe<Scalars['String']['input']>;
  bio?: InputMaybe<Scalars['String']['input']>;
  creatorId: Scalars['String']['input'];
  displayOnlineStatus?: InputMaybe<Scalars['Boolean']['input']>;
  displayTotalPost?: InputMaybe<Scalars['Boolean']['input']>;
  displayTotalSubscriber?: InputMaybe<Scalars['Boolean']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type ExtendedUsersEntity = {
  __typename?: 'ExtendedUsersEntity';
  assetCount: Scalars['Int']['output'];
  avatarUrl?: Maybe<Scalars['String']['output']>;
  bannerUrl?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  creatorProfile: CreatorProfilesEntity;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  fanProfile: FanProfilesEntity;
  firstName: Scalars['String']['output'];
  fulfilledObjectCount: Scalars['Int']['output'];
  id: Scalars['String']['output'];
  lastLoginAt?: Maybe<Scalars['DateTime']['output']>;
  lastName: Scalars['String']['output'];
  pendingObjectCount: Scalars['Int']['output'];
  processingObjectCount: Scalars['Int']['output'];
  rejectedObjectCount: Scalars['Int']['output'];
  roles: Array<UserRoles>;
  updatedAt: Scalars['DateTime']['output'];
  username: Scalars['String']['output'];
  vaultCount: Scalars['Int']['output'];
};

export type FanAssetsEntity = {
  __typename?: 'FanAssetsEntity';
  asset: AssetsEntity;
  assetId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  fanId: Scalars['String']['output'];
  fanProfile: FanProfilesEntity;
  id: Scalars['String']['output'];
};

export type FanPaymentProfilesEntity = {
  __typename?: 'FanPaymentProfilesEntity';
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  fanId: Scalars['String']['output'];
  fanProfile: FanProfilesEntity;
  id: Scalars['String']['output'];
  stripeCustomerId: Scalars['String']['output'];
};

export type FanProfile = {
  __typename?: 'FanProfile';
  avatarUrl: Scalars['String']['output'];
  fanId: Scalars['String']['output'];
  fullName: Scalars['String']['output'];
  username: Scalars['String']['output'];
};

export type FanProfileOutput = {
  __typename?: 'FanProfileOutput';
  avatarUrl?: Maybe<Scalars['String']['output']>;
  firstName: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  username: Scalars['String']['output'];
};

export type FanProfilesEntity = {
  __typename?: 'FanProfilesEntity';
  appliedAt?: Maybe<Scalars['DateTime']['output']>;
  blockedByCreators: Array<CreatorBlocksEntity>;
  channels: Array<MessageChannelsEntity>;
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  fanAssets: Array<FanAssetsEntity>;
  fanId: Scalars['String']['output'];
  fanPaymentProfiles: Array<FanPaymentProfilesEntity>;
  following: Array<CreatorFollowsEntity>;
  groupMessageReplies: Array<GroupMessageRepliesEntity>;
  groupReceivers: Array<GroupMessagesEntity>;
  isBanned: Scalars['Boolean']['output'];
  messagePurchases: Array<MessagePurchasesEntity>;
  moderatorGroups: Array<GroupsEntity>;
  participantGroups: Array<GroupsEntity>;
  payments: Array<PaymentsEntity>;
  postComments: Array<PostCommentsEntity>;
  postLikes: Array<MessageRepliesEntity>;
  postPurchases: Array<PostPurchasesEntity>;
  postSaves: Array<PostSavesEntity>;
  postShares: Array<PostSharesEntity>;
  postUnlocks: Array<PremiumPostUnlocksEntity>;
  restrictedByCreators: Array<CreatorRestrictsEntity>;
  subscriptions: Array<SubscriptionsEntity>;
  updatedAt: Scalars['DateTime']['output'];
  user: UsersEntity;
};

export enum FileType {
  Audio = 'AUDIO',
  Document = 'DOCUMENT',
  Image = 'IMAGE',
  Video = 'VIDEO'
}

export type FollowCreatorInput = {
  creatorId: Scalars['String']['input'];
};

export type GetAllAssetsOutput = {
  __typename?: 'GetAllAssetsOutput';
  assets: Array<CreatorAssetsEntity>;
  count: Scalars['Int']['output'];
};

export type GetAllCreatorsOutput = {
  __typename?: 'GetAllCreatorsOutput';
  count: Scalars['Int']['output'];
  creators: Array<ExtendedUsersEntity>;
  hasNext: Scalars['Boolean']['output'];
  hasPrev: Scalars['Boolean']['output'];
  totalPages: Scalars['Int']['output'];
};

export type GetAllObjectsCountOutput = {
  __typename?: 'GetAllObjectsCountOutput';
  fulfilled: Scalars['Float']['output'];
  pending: Scalars['Float']['output'];
  processing: Scalars['Float']['output'];
  rejected: Scalars['Float']['output'];
};

export type GetAllVaultsOutput = {
  __typename?: 'GetAllVaultsOutput';
  count: Scalars['Int']['output'];
  vaults: Array<VaultObjectsEntity>;
};

export type GetChannelInput = {
  channelId: Scalars['String']['input'];
};

export type GetChannelOutput = {
  __typename?: 'GetChannelOutput';
  createdAt: Scalars['DateTime']['output'];
  creatorId: Scalars['String']['output'];
  creatorLastSeenAt?: Maybe<Scalars['DateTime']['output']>;
  creatorLastSentAt?: Maybe<Scalars['DateTime']['output']>;
  creatorProfile?: Maybe<CreatorProfile>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  fanId: Scalars['String']['output'];
  fanLastSeenAt: Scalars['DateTime']['output'];
  fanLastSentAt: Scalars['DateTime']['output'];
  fanProfile?: Maybe<FanProfile>;
  id: Scalars['String']['output'];
  isMessagingBlocked: Scalars['Boolean']['output'];
  isMuted: Scalars['Boolean']['output'];
  isPinned: Scalars['Boolean']['output'];
  isRestricted: Scalars['Boolean']['output'];
  label: Scalars['String']['output'];
  totalEarning: Scalars['Float']['output'];
};

export type GetCreatorVaultObjectsOutput = {
  __typename?: 'GetCreatorVaultObjectsOutput';
  count: Scalars['Int']['output'];
  vaultObjects: Array<VaultObjectsEntity>;
};

export type GetDefaultAssetsOutput = {
  __typename?: 'GetDefaultAssetsOutput';
  assets: Array<CreatorAssetsEntity>;
  count: Scalars['Int']['output'];
  hasNext: Scalars['Boolean']['output'];
  hasPrev: Scalars['Boolean']['output'];
  totalPages: Scalars['Int']['output'];
};

export type GetDefaultCreatorsOutput = {
  __typename?: 'GetDefaultCreatorsOutput';
  count?: Maybe<Scalars['Int']['output']>;
  creators: Array<UsersEntity>;
  hasNext?: Maybe<Scalars['Boolean']['output']>;
  hasPrev?: Maybe<Scalars['Boolean']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type GetDefaultVaultObjectsOutput = {
  __typename?: 'GetDefaultVaultObjectsOutput';
  count: Scalars['Int']['output'];
  hasNext: Scalars['Boolean']['output'];
  hasPrev: Scalars['Boolean']['output'];
  totalPages: Scalars['Int']['output'];
  vault: VaultsEntity;
  vaultObjects: Array<VaultObjectsEntity>;
};

export type GetDefaultVaultsOutput = {
  __typename?: 'GetDefaultVaultsOutput';
  count?: Maybe<Scalars['Int']['output']>;
  hasNext?: Maybe<Scalars['Boolean']['output']>;
  hasPrev?: Maybe<Scalars['Boolean']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
  vaults: Array<VaultsEntity>;
};

export type GetPostsInfoOutput = {
  __typename?: 'GetPostsInfoOutput';
  caption?: Maybe<Scalars['String']['output']>;
  commentCount: Scalars['Float']['output'];
  createdAt: Scalars['DateTime']['output'];
  creatorId: Scalars['String']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  lastCommentId?: Maybe<Scalars['String']['output']>;
  latestComment?: Maybe<Scalars['String']['output']>;
  likeCount: Scalars['Float']['output'];
  saveCount: Scalars['Float']['output'];
  shareCount: Scalars['Float']['output'];
  totalEarning: Scalars['Float']['output'];
  types: Array<PostTypes>;
  unlockPrice?: Maybe<Scalars['Int']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type GetUserOutput = {
  __typename?: 'GetUserOutput';
  avatarUrl?: Maybe<Scalars['String']['output']>;
  bannerUrl?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  creatorProfile: CreatorProfilesEntity;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  fanProfile: FanProfilesEntity;
  firstName: Scalars['String']['output'];
  fulfilledCount: Scalars['Int']['output'];
  id: Scalars['String']['output'];
  lastLoginAt?: Maybe<Scalars['DateTime']['output']>;
  lastName: Scalars['String']['output'];
  pendingCount: Scalars['Int']['output'];
  processingCount: Scalars['Int']['output'];
  rejectedCount: Scalars['Int']['output'];
  roles: Array<UserRoles>;
  updatedAt: Scalars['DateTime']['output'];
  username: Scalars['String']['output'];
};

export type GroupMessageRepliesEntity = {
  __typename?: 'GroupMessageRepliesEntity';
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  groupMessage: GroupMessagesEntity;
  id: Scalars['String']['output'];
  messageId: Scalars['String']['output'];
  repliers: Array<FanProfilesEntity>;
  updatedAt: Scalars['DateTime']['output'];
};

export type GroupMessagesEntity = {
  __typename?: 'GroupMessagesEntity';
  createdAt: Scalars['DateTime']['output'];
  creatorProfile: CreatorProfilesEntity;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  group: GroupsEntity;
  groupId: Scalars['String']['output'];
  groupMessageReplies: Array<GroupMessageRepliesEntity>;
  id: Scalars['String']['output'];
  isCreator: Scalars['Boolean']['output'];
  isExclusive: Scalars['Boolean']['output'];
  isPinned: Scalars['Boolean']['output'];
  message: Scalars['String']['output'];
  receivers: Array<FanProfilesEntity>;
  senderId: Scalars['String']['output'];
  unlockPrice: Scalars['Float']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type GroupsEntity = {
  __typename?: 'GroupsEntity';
  admin: CreatorProfilesEntity;
  adminId: Scalars['String']['output'];
  backgroundColor: Scalars['String']['output'];
  bannerUrl: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  description: Scalars['String']['output'];
  groupMessages: Array<GroupMessagesEntity>;
  groupName: Scalars['String']['output'];
  iconUrl: Scalars['String']['output'];
  id: Scalars['String']['output'];
  isBlocked: Scalars['Boolean']['output'];
  isMuted: Scalars['Boolean']['output'];
  isPinned: Scalars['Boolean']['output'];
  isRestricted: Scalars['Boolean']['output'];
  moderators: Array<FanProfilesEntity>;
  participants: Array<FanProfilesEntity>;
};

export enum ImportTypes {
  Branch = 'BRANCH',
  Ok = 'OK',
  Page = 'PAGE',
  Profile = 'PROFILE',
  Single = 'SINGLE'
}

export type LikePostInput = {
  postId: Scalars['String']['input'];
};

export enum MediaType {
  MessageMedia = 'MESSAGE_MEDIA',
  PostMedia = 'POST_MEDIA',
  ProfileMedia = 'PROFILE_MEDIA'
}

export type MessageAssetsEntity = {
  __typename?: 'MessageAssetsEntity';
  asset: AssetsEntity;
  assetId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  deletedAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  message: MessagesEntity;
  messageId: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type MessageChannelsEntity = {
  __typename?: 'MessageChannelsEntity';
  createdAt: Scalars['DateTime']['output'];
  creatorProfile: CreatorProfilesEntity;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  fanProfile: FanProfilesEntity;
  id: Scalars['String']['output'];
  isMessagingBlocked: Scalars['Boolean']['output'];
  isMuted: Scalars['Boolean']['output'];
  isPinned: Scalars['Boolean']['output'];
  isRestricted: Scalars['Boolean']['output'];
  label: Scalars['String']['output'];
  lastMessage: MessagesEntity;
  lastMessageId?: Maybe<Scalars['String']['output']>;
  messages: Array<MessagesEntity>;
  totalEarning: Scalars['Float']['output'];
};

export type MessagePurchasesEntity = {
  __typename?: 'MessagePurchasesEntity';
  fanId: Scalars['String']['output'];
  fanProfile: FanProfilesEntity;
  id: Scalars['String']['output'];
  message: MessagesEntity;
  messageId: Scalars['String']['output'];
  purchasedAt: Scalars['String']['output'];
};

export type MessageReactionsEntity = {
  __typename?: 'MessageReactionsEntity';
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  message: MessagesEntity;
  messageId: Scalars['String']['output'];
  reaction: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['String']['output'];
};

export type MessageRepliesEntity = {
  __typename?: 'MessageRepliesEntity';
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  message: MessagesEntity;
  messageId: Scalars['String']['output'];
  replierId: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type MessagesEntity = {
  __typename?: 'MessagesEntity';
  channel: MessageChannelsEntity;
  channelId: Scalars['String']['output'];
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  hasAccess: Scalars['Boolean']['output'];
  id: Scalars['String']['output'];
  isExclusive: Scalars['Boolean']['output'];
  messageAssets: Array<MessageAssetsEntity>;
  messagePurchases: Array<MessagePurchasesEntity>;
  reaction: MessageReactionsEntity;
  recipientUserId: Scalars['String']['output'];
  repliedTo?: Maybe<MessagesEntity>;
  replies: Array<MessageRepliesEntity>;
  senderId: Scalars['String']['output'];
  unlockPrice?: Maybe<Scalars['Float']['output']>;
  unlockedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  blockFan: Scalars['Boolean']['output'];
  cleanUpVaultObjectsOfACreator: Scalars['Float']['output'];
  createChannel: MessageChannelsEntity;
  createComment: PostCommentsEntity;
  createPost: PostsEntity;
  deleteAllAssets: Scalars['Boolean']['output'];
  deleteComment: Scalars['Boolean']['output'];
  deleteCreatorAssets: Scalars['Boolean']['output'];
  deleteFollower: Scalars['Boolean']['output'];
  deleteMessage: Scalars['Boolean']['output'];
  deleteMessages: Scalars['Boolean']['output'];
  deletePost: Scalars['Boolean']['output'];
  deletePosts: Scalars['Boolean']['output'];
  deleteShare: Scalars['Boolean']['output'];
  deleteUser: Scalars['Boolean']['output'];
  downloadAllCreatorObjects: Scalars['String']['output'];
  downloadCreatorObjectsAsBatch: Scalars['String']['output'];
  followCreator: CreatorFollowsEntity;
  initiate: Scalars['String']['output'];
  initiateCreatorObjectsImport: Scalars['String']['output'];
  likePost: PostsEntity;
  restrictFan: Scalars['Boolean']['output'];
  savePost: PostsEntity;
  sendMessageFromCreator: MessagesEntity;
  sendMessageFromFan: MessagesEntity;
  sendOrDeleteMessageReaction: MessageReactionsEntity;
  sendReplyFromCreator: MessagesEntity;
  sendReplyFromFan: MessagesEntity;
  sharePost: PostSharesEntity;
  terminate: Scalars['Boolean']['output'];
  terminateDownloading: Scalars['String']['output'];
  unBlockFan: Scalars['Boolean']['output'];
  unFollowCreator: Scalars['Boolean']['output'];
  unRestrictFan: Scalars['Boolean']['output'];
  updateAllCreatorProfiles: Scalars['String']['output'];
  updateAssets: Array<CreatorAssetsEntity>;
  updateChannel: MessageChannelsEntity;
  updateComment: PostCommentsEntity;
  updateCreatorProfile: CreatorProfilesEntity;
  updateCreatorProfileByAdmin: CreatorProfilesEntity;
  updateFanProfile: FanProfilesEntity;
  updateMessage: MessagesEntity;
  updatePost: PostsEntity;
  updatePreviewOfVaults: Scalars['String']['output'];
  uploadVault: Scalars['String']['output'];
};


export type MutationBlockFanArgs = {
  input: BlockFanInput;
};


export type MutationCleanUpVaultObjectsOfACreatorArgs = {
  input: CleanUpVaultInput;
};


export type MutationCreateChannelArgs = {
  input: CreateChannelInput;
};


export type MutationCreateCommentArgs = {
  input: CreateCommentInput;
};


export type MutationCreatePostArgs = {
  input: CreatePostInput;
};


export type MutationDeleteCommentArgs = {
  input: DeleteCommentInput;
};


export type MutationDeleteCreatorAssetsArgs = {
  input: DeleteCreatorAsset;
};


export type MutationDeleteFollowerArgs = {
  input: DeleteFollowerInput;
};


export type MutationDeleteMessageArgs = {
  input: DeleteMessageInput;
};


export type MutationDeleteMessagesArgs = {
  input: DeleteMessagesInput;
};


export type MutationDeletePostArgs = {
  input: DeletePostInput;
};


export type MutationDeletePostsArgs = {
  input: DeletePostsInput;
};


export type MutationDeleteShareArgs = {
  input: DeleteSharePostInput;
};


export type MutationDownloadAllCreatorObjectsArgs = {
  input: DownloadAllCreatorObjectsAsBatchInput;
};


export type MutationDownloadCreatorObjectsAsBatchArgs = {
  input: UploadVaultQueueInput;
};


export type MutationFollowCreatorArgs = {
  input: FollowCreatorInput;
};


export type MutationInitiateArgs = {
  input: CreateImportQueueInput;
};


export type MutationInitiateCreatorObjectsImportArgs = {
  input: CreateImportQueueInput;
};


export type MutationLikePostArgs = {
  input: LikePostInput;
};


export type MutationRestrictFanArgs = {
  input: RestrictFanInput;
};


export type MutationSavePostArgs = {
  input: SavePostInput;
};


export type MutationSendMessageFromCreatorArgs = {
  input: SendMessageFromCreatorInput;
};


export type MutationSendMessageFromFanArgs = {
  input: SendMessageFromFanInput;
};


export type MutationSendOrDeleteMessageReactionArgs = {
  input: SendReactionInput;
};


export type MutationSendReplyFromCreatorArgs = {
  input: SendMessageFromCreatorInput;
};


export type MutationSendReplyFromFanArgs = {
  input: SendMessageFromFanInput;
};


export type MutationSharePostArgs = {
  input: LikePostInput;
};


export type MutationUnBlockFanArgs = {
  input: BlockFanInput;
};


export type MutationUnFollowCreatorArgs = {
  input: UnFollowCreatorInput;
};


export type MutationUnRestrictFanArgs = {
  input: RestrictFanInput;
};


export type MutationUpdateAllCreatorProfilesArgs = {
  input: UpdateUsersInput;
};


export type MutationUpdateAssetsArgs = {
  input: UpdateAssetsInput;
};


export type MutationUpdateChannelArgs = {
  input: UpdateChannelInput;
};


export type MutationUpdateCommentArgs = {
  input: UpdateCommentInput;
};


export type MutationUpdateCreatorProfileArgs = {
  input: UpdateCreatorProfileInput;
};


export type MutationUpdateCreatorProfileByAdminArgs = {
  input: ExtendedUpdateCreatorProfileInput;
};


export type MutationUpdateFanProfileArgs = {
  input: UpdateUserProfileInput;
};


export type MutationUpdateMessageArgs = {
  input: UpdateMessageInput;
};


export type MutationUpdatePostArgs = {
  input: UpdatePostInput;
};


export type MutationUploadVaultArgs = {
  input: UploadVaultInput;
};

export type PaginationInput = {
  assetType?: InputMaybe<AssetType>;
  dataFetchType?: InputMaybe<DataFetchType>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<SortOrder>;
  pageNumber?: Scalars['Int']['input'];
  postTypes?: InputMaybe<Array<PostTypes>>;
  relatedEntityId?: InputMaybe<Scalars['ID']['input']>;
  relatedUserId?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<UserRoles>;
  searchTerm?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  status?: DownloadStates;
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type PaymentsEntity = {
  __typename?: 'PaymentsEntity';
  amountInCents: Scalars['Float']['output'];
  createdAt: Scalars['DateTime']['output'];
  creatorId: Scalars['String']['output'];
  creatorProfile: CreatorProfilesEntity;
  currency: Scalars['String']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  fanId: Scalars['String']['output'];
  fanProfile: FanProfilesEntity;
  id: Scalars['String']['output'];
  relatedEntityId: Scalars['String']['output'];
  status: Scalars['String']['output'];
  stripePaymentId: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type PostAssetsEntity = {
  __typename?: 'PostAssetsEntity';
  asset: AssetsEntity;
  assetId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  post: PostsEntity;
  postId: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type PostCommentsEntity = {
  __typename?: 'PostCommentsEntity';
  comment: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  fanId: Scalars['String']['output'];
  fanProfile: FanProfilesEntity;
  id: Scalars['String']['output'];
  post: PostsEntity;
  postId: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type PostLikesEntity = {
  __typename?: 'PostLikesEntity';
  createdAt: Scalars['DateTime']['output'];
  fanId: Scalars['String']['output'];
  fanProfile: FanProfilesEntity;
  id: Scalars['String']['output'];
  post: PostsEntity;
  postId: Scalars['String']['output'];
};

export type PostPurchasesEntity = {
  __typename?: 'PostPurchasesEntity';
  fanId: Scalars['String']['output'];
  fanProfile: FanProfilesEntity;
  id: Scalars['String']['output'];
  post: PostsEntity;
  postId: Scalars['String']['output'];
  purchasedAt: Scalars['DateTime']['output'];
  type: Scalars['String']['output'];
};

export type PostSavesEntity = {
  __typename?: 'PostSavesEntity';
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  fanId: Scalars['String']['output'];
  fanProfile: FanProfilesEntity;
  id: Scalars['String']['output'];
  post: PostsEntity;
  postId: Scalars['String']['output'];
};

export type PostSharesEntity = {
  __typename?: 'PostSharesEntity';
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  fanId: Scalars['String']['output'];
  fanProfile: FanProfilesEntity;
  id: Scalars['String']['output'];
  post: PostsEntity;
  postId: Scalars['String']['output'];
};

export enum PostTypes {
  Archived = 'ARCHIVED',
  Banned = 'BANNED',
  Exclusive = 'EXCLUSIVE',
  Hidden = 'HIDDEN',
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type PostsEntity = {
  __typename?: 'PostsEntity';
  caption?: Maybe<Scalars['String']['output']>;
  commentCount: Scalars['Float']['output'];
  createdAt: Scalars['DateTime']['output'];
  creatorId: Scalars['String']['output'];
  creatorProfile: CreatorProfilesEntity;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  lastCommentId?: Maybe<Scalars['String']['output']>;
  latestComment?: Maybe<PostCommentsEntity>;
  likeCount: Scalars['Float']['output'];
  postAssets: Array<PostAssetsEntity>;
  postComments: Array<PostCommentsEntity>;
  postLikes: Array<PostLikesEntity>;
  postPurchases: Array<PostPurchasesEntity>;
  postSaves: Array<PostSavesEntity>;
  postShares: Array<PostSharesEntity>;
  postUnlocks: Array<PremiumPostUnlocksEntity>;
  saveCount: Scalars['Float']['output'];
  shareCount: Scalars['Float']['output'];
  totalEarning: Scalars['Float']['output'];
  types: Array<PostTypes>;
  unlockPrice?: Maybe<Scalars['Int']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type PremiumPostUnlocksEntity = {
  __typename?: 'PremiumPostUnlocksEntity';
  amount: Scalars['Float']['output'];
  createdAt: Scalars['DateTime']['output'];
  fanId: Scalars['String']['output'];
  id: Scalars['String']['output'];
  postId: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type Query = {
  __typename?: 'Query';
  getAllAssetsByAdmin: GetAllAssetsOutput;
  getAllComments: Array<PostCommentsEntity>;
  getAllVaultsByAdmin: GetAllVaultsOutput;
  getBlockedUsers: Array<CreatorBlocksEntity>;
  getChannel: GetChannelOutput;
  getChannelMessages: Array<MessagesEntity>;
  getChannels: Array<MessageChannelsEntity>;
  getCountOfObjectsOfEachType: GetAllObjectsCountOutput;
  getCreatorAssets: Array<CreatorAssetsEntity>;
  getCreatorAssetsByAdmin: Array<CreatorAssetsEntity>;
  getCreatorProfile: CreatorProfilesEntity;
  getCreatorProfileByAdmin: CreatorProfilesEntity;
  getCreatorVaultObjects: Array<VaultObjectsEntity>;
  getCreatorVaultObjectsByAdmin: GetCreatorVaultObjectsOutput;
  getCreatorsByAdmin: GetAllCreatorsOutput;
  getDefaultAssets: GetDefaultAssetsOutput;
  getDefaultCreatorAssets: Array<CreatorAssetsEntity>;
  getDefaultCreators: GetDefaultCreatorsOutput;
  getDefaultVaults: GetDefaultVaultsOutput;
  getFanProfile: FanProfilesEntity;
  getFollowers: Array<CreatorFollowsEntity>;
  getFollowing: Array<CreatorFollowsEntity>;
  getPost: PostsEntity;
  getPostCommentsByPostId: Array<PostCommentsEntity>;
  getPosts: Array<PostsEntity>;
  getPostsInfo: Array<GetPostsInfoOutput>;
  getRestrictedUsers: Array<CreatorRestrictsEntity>;
  getTags: Array<TagsEntity>;
  getTotalObjectsAsType: Scalars['Int']['output'];
  getUser: GetUserOutput;
  getVaultObjectsByVaultId: GetDefaultVaultObjectsOutput;
};


export type QueryGetAllAssetsByAdminArgs = {
  input: PaginationInput;
};


export type QueryGetAllCommentsArgs = {
  input: PaginationInput;
};


export type QueryGetAllVaultsByAdminArgs = {
  input: PaginationInput;
};


export type QueryGetBlockedUsersArgs = {
  input: PaginationInput;
};


export type QueryGetChannelArgs = {
  input: GetChannelInput;
};


export type QueryGetChannelMessagesArgs = {
  input: PaginationInput;
};


export type QueryGetChannelsArgs = {
  input: PaginationInput;
};


export type QueryGetCreatorAssetsArgs = {
  input: PaginationInput;
};


export type QueryGetCreatorAssetsByAdminArgs = {
  input: PaginationInput;
};


export type QueryGetCreatorProfileByAdminArgs = {
  creatorId: Scalars['String']['input'];
};


export type QueryGetCreatorVaultObjectsArgs = {
  input: PaginationInput;
};


export type QueryGetCreatorVaultObjectsByAdminArgs = {
  input: PaginationInput;
};


export type QueryGetCreatorsByAdminArgs = {
  input: PaginationInput;
};


export type QueryGetDefaultAssetsArgs = {
  input: PaginationInput;
};


export type QueryGetDefaultCreatorAssetsArgs = {
  input: PaginationInput;
};


export type QueryGetDefaultCreatorsArgs = {
  input: PaginationInput;
};


export type QueryGetDefaultVaultsArgs = {
  input: PaginationInput;
};


export type QueryGetFollowersArgs = {
  input: PaginationInput;
};


export type QueryGetFollowingArgs = {
  input: PaginationInput;
};


export type QueryGetPostArgs = {
  input: PaginationInput;
};


export type QueryGetPostCommentsByPostIdArgs = {
  input: PaginationInput;
};


export type QueryGetPostsArgs = {
  input: PaginationInput;
};


export type QueryGetPostsInfoArgs = {
  input: PaginationInput;
};


export type QueryGetRestrictedUsersArgs = {
  input: PaginationInput;
};


export type QueryGetTagsArgs = {
  input: PaginationInput;
};


export type QueryGetTotalObjectsAsTypeArgs = {
  input: PaginationInput;
};


export type QueryGetUserArgs = {
  username: Scalars['String']['input'];
};


export type QueryGetVaultObjectsByVaultIdArgs = {
  input: PaginationInput;
};

export type RestrictFanInput = {
  fanId: Scalars['String']['input'];
};

export type SavePostInput = {
  postId: Scalars['String']['input'];
};

export type SendMessageFromCreatorInput = {
  assetIds: Array<Scalars['ID']['input']>;
  content: Scalars['String']['input'];
  isExclusive?: Scalars['Boolean']['input'];
  messageId?: InputMaybe<Scalars['String']['input']>;
  recipientUserId: Scalars['String']['input'];
  senderId: Scalars['String']['input'];
  unlockAmount: Scalars['Int']['input'];
};

export type SendMessageFromFanInput = {
  content: Scalars['String']['input'];
  messageId?: InputMaybe<Scalars['String']['input']>;
  recipientUserId: Scalars['String']['input'];
  senderId: Scalars['String']['input'];
};

export type SendReactionInput = {
  messageId: Scalars['String']['input'];
  reaction: Scalars['String']['input'];
};

export enum ServiceType {
  Dos = 'DOS',
  Ras = 'RAS'
}

export type SocialAccountsEntity = {
  __typename?: 'SocialAccountsEntity';
  createdAt: Scalars['DateTime']['output'];
  creatorId: Scalars['String']['output'];
  creatorProfile: CreatorProfilesEntity;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  faceBook?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  instagram?: Maybe<Scalars['String']['output']>;
  twitter?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  website?: Maybe<Scalars['String']['output']>;
};

export enum SortOrder {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type SubscriptionPlansEntity = {
  __typename?: 'SubscriptionPlansEntity';
  bannerUrl: Scalars['String']['output'];
  creatorId: Scalars['String']['output'];
  creatorProfile: CreatorProfilesEntity;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  subscribedAt: Scalars['DateTime']['output'];
  subscription: SubscriptionsEntity;
  syncedAt: Scalars['DateTime']['output'];
  tier: Scalars['String']['output'];
};

export type SubscriptionsEntity = {
  __typename?: 'SubscriptionsEntity';
  createdAt: Scalars['DateTime']['output'];
  creatorId: Scalars['String']['output'];
  creatorPaymentProfile: CreatorPaymentProfilesEntity;
  creatorPaymentProfileId: Scalars['String']['output'];
  creatorProfile: CreatorProfilesEntity;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  fanId: Scalars['String']['output'];
  fanProfile: FanProfilesEntity;
  id: Scalars['String']['output'];
  months: Scalars['Float']['output'];
  price: Scalars['Float']['output'];
  stripeSubscriptionId: Scalars['String']['output'];
  subscriptionPlan: SubscriptionPlansEntity;
  subscriptionPlanId: Scalars['String']['output'];
  syncedAt: Scalars['DateTime']['output'];
};

export type TagsEntity = {
  __typename?: 'TagsEntity';
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type UnFollowCreatorInput = {
  creatorId: Scalars['String']['input'];
};

export type UpdateAssetsInput = {
  assetIds: Array<Scalars['ID']['input']>;
  assetType: AssetType;
};

export type UpdateChannelInput = {
  channelId: Scalars['String']['input'];
  isBlocked?: InputMaybe<Scalars['Boolean']['input']>;
  isMessagingBlocked?: InputMaybe<Scalars['Boolean']['input']>;
  isMuted?: InputMaybe<Scalars['Boolean']['input']>;
  isRestricted?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateCommentInput = {
  comment: Scalars['String']['input'];
  commentId: Scalars['String']['input'];
  postId: Scalars['String']['input'];
};

export type UpdateCreatorProfileInput = {
  allowsComment?: InputMaybe<Scalars['Boolean']['input']>;
  allowsMessaging?: InputMaybe<Scalars['Boolean']['input']>;
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  bannerUrl?: InputMaybe<Scalars['String']['input']>;
  bio?: InputMaybe<Scalars['String']['input']>;
  displayOnlineStatus?: InputMaybe<Scalars['Boolean']['input']>;
  displayTotalPost?: InputMaybe<Scalars['Boolean']['input']>;
  displayTotalSubscriber?: InputMaybe<Scalars['Boolean']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateMessageInput = {
  content: Scalars['String']['input'];
  messageId: Scalars['String']['input'];
};

export type UpdatePostInput = {
  caption?: InputMaybe<Scalars['String']['input']>;
  postId: Scalars['String']['input'];
  types?: Array<PostTypes>;
  unlockPrice?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateUserProfileInput = {
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  bannerUrl?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUsersInput = {
  adminId: Scalars['ID']['input'];
};

export type UploadVaultInput = {
  destination?: AssetType;
  vaultObjectIds: Array<Scalars['ID']['input']>;
};

export type UploadVaultQueueInput = {
  creatorId: Scalars['String']['input'];
  destination?: AssetType;
  vaultObjectIds: Array<Scalars['ID']['input']>;
};

export enum UserRoles {
  Admin = 'ADMIN',
  Creator = 'CREATOR',
  Fan = 'FAN',
  SuperViewer = 'SUPER_VIEWER'
}

export type UsersEntity = {
  __typename?: 'UsersEntity';
  avatarUrl?: Maybe<Scalars['String']['output']>;
  bannerUrl?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  creatorProfile: CreatorProfilesEntity;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  fanProfile: FanProfilesEntity;
  firstName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  lastLoginAt?: Maybe<Scalars['DateTime']['output']>;
  lastName: Scalars['String']['output'];
  roles: Array<UserRoles>;
  updatedAt: Scalars['DateTime']['output'];
  username: Scalars['String']['output'];
};

export type VaultObjectsEntity = {
  __typename?: 'VaultObjectsEntity';
  asset?: Maybe<AssetsEntity>;
  contentType: ContentType;
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  fileType: FileType;
  id: Scalars['String']['output'];
  importedAt?: Maybe<Scalars['DateTime']['output']>;
  objectUrl: Scalars['String']['output'];
  status: DownloadStates;
  suffix?: Maybe<Scalars['Float']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  vault: VaultsEntity;
  vaultId: Scalars['String']['output'];
};

export type VaultsEntity = {
  __typename?: 'VaultsEntity';
  createdAt: Scalars['DateTime']['output'];
  creatorId: Scalars['String']['output'];
  creatorProfile: CreatorProfilesEntity;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  keywords?: Maybe<Array<Scalars['String']['output']>>;
  preview: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  url: Scalars['String']['output'];
  vaultObjects: Array<VaultObjectsEntity>;
};

export type GetCreatorAssetsQueryVariables = Exact<{
  input: PaginationInput;
}>;


export type GetCreatorAssetsQuery = { __typename?: 'Query', getCreatorAssets: Array<{ __typename?: 'CreatorAssetsEntity', assetId: string, createdAt: any, creatorId: string, deletedAt?: any | null, id: string, type: AssetType, asset: { __typename?: 'AssetsEntity', blurredUrl?: string | null, createdAt: any, creatorId: string, fileType: FileType, id: string, mediaType: MediaType, mimeType: string, rawUrl: string, updatedAt: any } }> };

export type GetDefaultAssetsQueryVariables = Exact<{
  input: PaginationInput;
}>;


export type GetDefaultAssetsQuery = { __typename?: 'Query', getDefaultAssets: { __typename?: 'GetDefaultAssetsOutput', totalPages: number, hasPrev: boolean, hasNext: boolean, count: number, assets: Array<{ __typename?: 'CreatorAssetsEntity', assetId: string, createdAt: any, creatorId: string, deletedAt?: any | null, id: string, type: AssetType, asset: { __typename?: 'AssetsEntity', blurredUrl?: string | null, createdAt: any, creatorId: string, fileType: FileType, id: string, mediaType: MediaType, mimeType: string, rawUrl: string, updatedAt: any, vaultObjectId?: string | null }, creatorProfile: { __typename?: 'CreatorProfilesEntity', bio?: string | null, creatorId: string, user: { __typename?: 'UsersEntity', avatarUrl?: string | null, bannerUrl?: string | null, id: string, username: string } } }> } };

export type GetDefaultCreatorAssetsQueryVariables = Exact<{
  input: PaginationInput;
}>;


export type GetDefaultCreatorAssetsQuery = { __typename?: 'Query', getDefaultCreatorAssets: Array<{ __typename?: 'CreatorAssetsEntity', assetId: string, createdAt: any, creatorId: string, deletedAt?: any | null, id: string, type: AssetType, asset: { __typename?: 'AssetsEntity', blurredUrl?: string | null, createdAt: any, creatorId: string, fileType: FileType, id: string, mediaType: MediaType, mimeType: string, rawUrl: string, updatedAt: any, vaultObject?: { __typename?: 'VaultObjectsEntity', contentType: ContentType, fileType: FileType, id: string, status: DownloadStates, vault: { __typename?: 'VaultsEntity', keywords?: Array<string> | null, description?: string | null, id: string } } | null }, creatorProfile: { __typename?: 'CreatorProfilesEntity', creatorId: string, bio?: string | null, displayOnlineStatus: boolean, user: { __typename?: 'UsersEntity', avatarUrl?: string | null, bannerUrl?: string | null, id: string, username: string } } }> };

export type CreateChannelMutationVariables = Exact<{
  input: CreateChannelInput;
}>;


export type CreateChannelMutation = { __typename?: 'Mutation', createChannel: { __typename?: 'MessageChannelsEntity', createdAt: any, deletedAt?: any | null, id: string, isMessagingBlocked: boolean, isMuted: boolean, isPinned: boolean, isRestricted: boolean, label: string, lastMessageId?: string | null, totalEarning: number } };

export type GetPostCommentsByPostIdQueryVariables = Exact<{
  input: PaginationInput;
}>;


export type GetPostCommentsByPostIdQuery = { __typename?: 'Query', getPostCommentsByPostId: Array<{ __typename?: 'PostCommentsEntity', comment: string, createdAt: any, deletedAt?: any | null, fanId: string, id: string, postId: string, updatedAt: any, fanProfile: { __typename?: 'FanProfilesEntity', user: { __typename?: 'UsersEntity', avatarUrl?: string | null, firstName: string, lastName: string, username: string } } }> };

export type GetAllCommentsQueryVariables = Exact<{
  input: PaginationInput;
}>;


export type GetAllCommentsQuery = { __typename?: 'Query', getAllComments: Array<{ __typename?: 'PostCommentsEntity', comment: string, createdAt: any, deletedAt?: any | null, fanId: string, id: string, postId: string, updatedAt: any, fanProfile: { __typename?: 'FanProfilesEntity', user: { __typename?: 'UsersEntity', avatarUrl?: string | null, firstName: string, lastName: string, username: string } } }> };

export type GetCreatorProfileByAdminQueryVariables = Exact<{
  creatorId: Scalars['String']['input'];
}>;


export type GetCreatorProfileByAdminQuery = { __typename?: 'Query', getCreatorProfileByAdmin: { __typename?: 'CreatorProfilesEntity', allowsComment: boolean, allowsMessaging: boolean, bio?: string | null, creatorId: string, displayOnlineStatus: boolean, displayTotalPost: boolean, displayTotalSubscriber: boolean, themeColor: string, totalExclusivePost: number, totalPost: number, totalPublicPost: number, totalSubscriber: number, user: { __typename?: 'UsersEntity', avatarUrl?: string | null, bannerUrl?: string | null, createdAt: any, deletedAt?: any | null, firstName: string, id: string, lastLoginAt?: any | null, lastName: string, roles: Array<UserRoles>, updatedAt: any, username: string } } };

export type GetCreatorProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCreatorProfileQuery = { __typename?: 'Query', getCreatorProfile: { __typename?: 'CreatorProfilesEntity', allowsComment: boolean, allowsMessaging: boolean, bio?: string | null, creatorId: string, displayOnlineStatus: boolean, displayTotalPost: boolean, displayTotalSubscriber: boolean, themeColor: string, totalExclusivePost: number, totalPost: number, totalPublicPost: number, totalSubscriber: number, user: { __typename?: 'UsersEntity', avatarUrl?: string | null, bannerUrl?: string | null, createdAt: any, deletedAt?: any | null, firstName: string, id: string, lastLoginAt?: any | null, lastName: string, roles: Array<UserRoles>, updatedAt: any, username: string } } };

export type UpdateCreatorProfileByAdminMutationVariables = Exact<{
  input: ExtendedUpdateCreatorProfileInput;
}>;


export type UpdateCreatorProfileByAdminMutation = { __typename?: 'Mutation', updateCreatorProfileByAdmin: { __typename?: 'CreatorProfilesEntity', allowsComment: boolean, allowsMessaging: boolean, bio?: string | null, creatorId: string, displayOnlineStatus: boolean, displayTotalPost: boolean, displayTotalSubscriber: boolean, themeColor: string, totalExclusivePost: number, totalPost: number, totalPublicPost: number, totalSubscriber: number, user: { __typename?: 'UsersEntity', avatarUrl?: string | null, bannerUrl?: string | null, username: string } } };

export type GetBlockedUsersQueryVariables = Exact<{
  input: PaginationInput;
}>;


export type GetBlockedUsersQuery = { __typename?: 'Query', getBlockedUsers: Array<{ __typename?: 'CreatorBlocksEntity', blockedAt: any, creatorId: string, fanId: string, id: string, unBlockedAt?: any | null, fanProfile: { __typename?: 'FanProfilesEntity', fanId: string, user: { __typename?: 'UsersEntity', avatarUrl?: string | null, firstName: string, lastName: string, username: string } } }> };

export type BlockFanMutationVariables = Exact<{
  input: BlockFanInput;
}>;


export type BlockFanMutation = { __typename?: 'Mutation', blockFan: boolean };

export type UnBlockFanMutationVariables = Exact<{
  input: BlockFanInput;
}>;


export type UnBlockFanMutation = { __typename?: 'Mutation', blockFan: boolean };

export type RestrictFanMutationVariables = Exact<{
  input: RestrictFanInput;
}>;


export type RestrictFanMutation = { __typename?: 'Mutation', restrictFan: boolean };

export type UnRestrictFanMutationVariables = Exact<{
  input: RestrictFanInput;
}>;


export type UnRestrictFanMutation = { __typename?: 'Mutation', restrictFan: boolean };

export type GetRestrictedUsersQueryVariables = Exact<{
  input: PaginationInput;
}>;


export type GetRestrictedUsersQuery = { __typename?: 'Query', getRestrictedUsers: Array<{ __typename?: 'CreatorRestrictsEntity', creatorId: string, fanId: string, id: string, restrictedAt: any, unRestrictedAt?: any | null, fanProfile: { __typename?: 'FanProfilesEntity', fanId: string, user: { __typename?: 'UsersEntity', avatarUrl?: string | null, firstName: string, lastName: string, username: string } } }> };

export type GetFanProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type GetFanProfileQuery = { __typename?: 'Query', getFanProfile: { __typename?: 'FanProfilesEntity', fanId: string, appliedAt?: any | null, user: { __typename?: 'UsersEntity', firstName: string, lastName: string, username: string, avatarUrl?: string | null, bannerUrl?: string | null } } };

export type UpdateFanProfileMutationVariables = Exact<{
  input: UpdateUserProfileInput;
}>;


export type UpdateFanProfileMutation = { __typename?: 'Mutation', updateFanProfile: { __typename?: 'FanProfilesEntity', appliedAt?: any | null, createdAt: any, deletedAt?: any | null, fanId: string, isBanned: boolean, updatedAt: any, user: { __typename?: 'UsersEntity', avatarUrl?: string | null, bannerUrl?: string | null, createdAt: any, deletedAt?: any | null, firstName: string, id: string, lastLoginAt?: any | null, lastName: string, roles: Array<UserRoles>, updatedAt: any, username: string } } };

export type InitiateCreatorObjectsImportMutationVariables = Exact<{
  input: CreateImportQueueInput;
}>;


export type InitiateCreatorObjectsImportMutation = { __typename?: 'Mutation', initiateCreatorObjectsImport: string };

export type InitiateMutationVariables = Exact<{
  input: CreateImportQueueInput;
}>;


export type InitiateMutation = { __typename?: 'Mutation', initiate: string };

export type GetPostsQueryVariables = Exact<{
  input: PaginationInput;
}>;


export type GetPostsQuery = { __typename?: 'Query', getPosts: Array<{ __typename?: 'PostsEntity', caption?: string | null, commentCount: number, createdAt: any, creatorId: string, deletedAt?: any | null, id: string, lastCommentId?: string | null, likeCount: number, saveCount: number, shareCount: number, totalEarning: number, types: Array<PostTypes>, unlockPrice?: number | null, updatedAt: any }> };

export type GetPostsInfoQueryVariables = Exact<{
  input: PaginationInput;
}>;


export type GetPostsInfoQuery = { __typename?: 'Query', getPostsInfo: Array<{ __typename?: 'GetPostsInfoOutput', caption?: string | null, commentCount: number, createdAt: any, creatorId: string, deletedAt?: any | null, id: string, lastCommentId?: string | null, latestComment?: string | null, likeCount: number, saveCount: number, shareCount: number, totalEarning: number, types: Array<PostTypes>, unlockPrice?: number | null, updatedAt: any }> };

export type CreatePostMutationVariables = Exact<{
  input: CreatePostInput;
}>;


export type CreatePostMutation = { __typename?: 'Mutation', createPost: { __typename?: 'PostsEntity', caption?: string | null, commentCount: number, createdAt: any, creatorId: string, deletedAt?: any | null, id: string, lastCommentId?: string | null, likeCount: number, saveCount: number, shareCount: number, totalEarning: number, types: Array<PostTypes>, unlockPrice?: number | null, updatedAt: any } };

export type CreateCommentMutationVariables = Exact<{
  input: CreateCommentInput;
}>;


export type CreateCommentMutation = { __typename?: 'Mutation', createComment: { __typename?: 'PostCommentsEntity', comment: string, createdAt: any, deletedAt?: any | null, fanId: string, id: string, postId: string, updatedAt: any } };

export type UpdateCommentMutationVariables = Exact<{
  input: UpdateCommentInput;
}>;


export type UpdateCommentMutation = { __typename?: 'Mutation', updateComment: { __typename?: 'PostCommentsEntity', comment: string, createdAt: any, deletedAt?: any | null, fanId: string, id: string, postId: string, updatedAt: any } };

export type DeleteCommentMutationVariables = Exact<{
  input: DeleteCommentInput;
}>;


export type DeleteCommentMutation = { __typename?: 'Mutation', deleteComment: boolean };

export type UpdatePostMutationVariables = Exact<{
  input: UpdatePostInput;
}>;


export type UpdatePostMutation = { __typename?: 'Mutation', updatePost: { __typename?: 'PostsEntity', caption?: string | null, commentCount: number, createdAt: any, creatorId: string, deletedAt?: any | null, id: string, likeCount: number, saveCount: number, shareCount: number, totalEarning: number, types: Array<PostTypes>, unlockPrice?: number | null, updatedAt: any } };

export type DeletePostMutationVariables = Exact<{
  input: DeletePostInput;
}>;


export type DeletePostMutation = { __typename?: 'Mutation', deletePost: boolean };

export type DeletePostsMutationVariables = Exact<{
  input: DeletePostsInput;
}>;


export type DeletePostsMutation = { __typename?: 'Mutation', deletePosts: boolean };

export type LikePostMutationVariables = Exact<{
  input: LikePostInput;
}>;


export type LikePostMutation = { __typename?: 'Mutation', likePost: { __typename?: 'PostsEntity', caption?: string | null, commentCount: number, createdAt: any, creatorId: string, deletedAt?: any | null, id: string, likeCount: number, saveCount: number, shareCount: number, totalEarning: number, types: Array<PostTypes>, unlockPrice?: number | null, updatedAt: any } };

export type SavePostMutationVariables = Exact<{
  input: SavePostInput;
}>;


export type SavePostMutation = { __typename?: 'Mutation', savePost: { __typename?: 'PostsEntity', caption?: string | null, commentCount: number, createdAt: any, creatorId: string, deletedAt?: any | null, id: string, likeCount: number, saveCount: number, shareCount: number, totalEarning: number, types: Array<PostTypes>, unlockPrice?: number | null, updatedAt: any } };

export type GetTagsQueryVariables = Exact<{
  input: PaginationInput;
}>;


export type GetTagsQuery = { __typename?: 'Query', getTags: Array<{ __typename?: 'TagsEntity', id: string, label: string }> };

export type GetUserQueryVariables = Exact<{
  username: Scalars['String']['input'];
}>;


export type GetUserQuery = { __typename?: 'Query', getUser: { __typename?: 'GetUserOutput', avatarUrl?: string | null, bannerUrl?: string | null, createdAt: any, deletedAt?: any | null, firstName: string, id: string, lastLoginAt?: any | null, lastName: string, roles: Array<UserRoles>, updatedAt: any, username: string } };

export type GetDefaultCreatorsQueryVariables = Exact<{
  input: PaginationInput;
}>;


export type GetDefaultCreatorsQuery = { __typename?: 'Query', getDefaultCreators: { __typename?: 'GetDefaultCreatorsOutput', count?: number | null, totalPages?: number | null, hasNext?: boolean | null, hasPrev?: boolean | null, creators: Array<{ __typename?: 'UsersEntity', avatarUrl?: string | null, bannerUrl?: string | null, createdAt: any, deletedAt?: any | null, firstName: string, id: string, lastLoginAt?: any | null, lastName: string, roles: Array<UserRoles>, updatedAt: any, username: string }> } };

export type DownloadCreatorObjectsAsBatchMutationVariables = Exact<{
  input: UploadVaultQueueInput;
}>;


export type DownloadCreatorObjectsAsBatchMutation = { __typename?: 'Mutation', downloadCreatorObjectsAsBatch: string };

export type TerminateMutationVariables = Exact<{ [key: string]: never; }>;


export type TerminateMutation = { __typename?: 'Mutation', terminate: boolean };

export type GetTotalObjectsAsTypeQueryVariables = Exact<{
  input: PaginationInput;
}>;


export type GetTotalObjectsAsTypeQuery = { __typename?: 'Query', getTotalObjectsAsType: number };

export type CleanUpVaultObjectsOfACreatorMutationVariables = Exact<{
  input: CleanUpVaultInput;
}>;


export type CleanUpVaultObjectsOfACreatorMutation = { __typename?: 'Mutation', cleanUpVaultObjectsOfACreator: number };

export type GetCountOfObjectsOfEachTypeQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCountOfObjectsOfEachTypeQuery = { __typename?: 'Query', getCountOfObjectsOfEachType: { __typename?: 'GetAllObjectsCountOutput', fulfilled: number, pending: number, processing: number, rejected: number } };

export type GetVaultObjectsByVaultIdQueryVariables = Exact<{
  input: PaginationInput;
}>;


export type GetVaultObjectsByVaultIdQuery = { __typename?: 'Query', getVaultObjectsByVaultId: { __typename?: 'GetDefaultVaultObjectsOutput', count: number, hasNext: boolean, hasPrev: boolean, totalPages: number, vaultObjects: Array<{ __typename?: 'VaultObjectsEntity', contentType: ContentType, fileType: FileType, status: DownloadStates, vaultId: string, asset?: { __typename?: 'AssetsEntity', blurredUrl?: string | null, createdAt: any, creatorId: string, fileType: FileType, id: string, mediaType: MediaType, mimeType: string, rawUrl: string, updatedAt: any, vaultObjectId?: string | null } | null }>, vault: { __typename?: 'VaultsEntity', createdAt: any, creatorId: string, deletedAt?: any | null, description?: string | null, id: string, keywords?: Array<string> | null, preview: string, updatedAt: any, url: string } } };

export type GetDefaultVaultsQueryVariables = Exact<{
  input: PaginationInput;
}>;


export type GetDefaultVaultsQuery = { __typename?: 'Query', getDefaultVaults: { __typename?: 'GetDefaultVaultsOutput', count?: number | null, hasNext?: boolean | null, hasPrev?: boolean | null, totalPages?: number | null, vaults: Array<{ __typename?: 'VaultsEntity', creatorId: string, description?: string | null, id: string, keywords?: Array<string> | null, createdAt: any, preview: string, creatorProfile: { __typename?: 'CreatorProfilesEntity', creatorId: string, user: { __typename?: 'UsersEntity', avatarUrl?: string | null, bannerUrl?: string | null, id: string, username: string } } }> } };


export const GetCreatorAssetsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCreatorAssets"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PaginationInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getCreatorAssets"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"assetId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"creatorId"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"asset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blurredUrl"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"creatorId"}},{"kind":"Field","name":{"kind":"Name","value":"fileType"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"mediaType"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"rawUrl"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]} as unknown as DocumentNode<GetCreatorAssetsQuery, GetCreatorAssetsQueryVariables>;
export const GetDefaultAssetsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetDefaultAssets"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PaginationInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getDefaultAssets"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalPages"}},{"kind":"Field","name":{"kind":"Name","value":"hasPrev"}},{"kind":"Field","name":{"kind":"Name","value":"hasNext"}},{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"assets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"assetId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"creatorId"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"asset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blurredUrl"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"creatorId"}},{"kind":"Field","name":{"kind":"Name","value":"fileType"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"mediaType"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"rawUrl"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"vaultObjectId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"creatorProfile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"creatorId"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}},{"kind":"Field","name":{"kind":"Name","value":"bannerUrl"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetDefaultAssetsQuery, GetDefaultAssetsQueryVariables>;
export const GetDefaultCreatorAssetsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetDefaultCreatorAssets"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PaginationInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getDefaultCreatorAssets"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"assetId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"creatorId"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"asset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blurredUrl"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"creatorId"}},{"kind":"Field","name":{"kind":"Name","value":"fileType"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"mediaType"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"rawUrl"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"vaultObject"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"vault"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"keywords"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}},{"kind":"Field","name":{"kind":"Name","value":"fileType"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"creatorProfile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"creatorId"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"displayOnlineStatus"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}},{"kind":"Field","name":{"kind":"Name","value":"bannerUrl"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetDefaultCreatorAssetsQuery, GetDefaultCreatorAssetsQueryVariables>;
export const CreateChannelDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateChannel"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateChannelInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createChannel"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isMessagingBlocked"}},{"kind":"Field","name":{"kind":"Name","value":"isMuted"}},{"kind":"Field","name":{"kind":"Name","value":"isPinned"}},{"kind":"Field","name":{"kind":"Name","value":"isRestricted"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"lastMessageId"}},{"kind":"Field","name":{"kind":"Name","value":"totalEarning"}}]}}]}}]} as unknown as DocumentNode<CreateChannelMutation, CreateChannelMutationVariables>;
export const GetPostCommentsByPostIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPostCommentsByPostId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PaginationInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPostCommentsByPostId"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"comment"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}},{"kind":"Field","name":{"kind":"Name","value":"fanId"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"postId"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"fanProfile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetPostCommentsByPostIdQuery, GetPostCommentsByPostIdQueryVariables>;
export const GetAllCommentsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllComments"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PaginationInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAllComments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"comment"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}},{"kind":"Field","name":{"kind":"Name","value":"fanId"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"postId"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"fanProfile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetAllCommentsQuery, GetAllCommentsQueryVariables>;
export const GetCreatorProfileByAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCreatorProfileByAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"creatorId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getCreatorProfileByAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"creatorId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"creatorId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allowsComment"}},{"kind":"Field","name":{"kind":"Name","value":"allowsMessaging"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"creatorId"}},{"kind":"Field","name":{"kind":"Name","value":"displayOnlineStatus"}},{"kind":"Field","name":{"kind":"Name","value":"displayTotalPost"}},{"kind":"Field","name":{"kind":"Name","value":"displayTotalSubscriber"}},{"kind":"Field","name":{"kind":"Name","value":"themeColor"}},{"kind":"Field","name":{"kind":"Name","value":"totalExclusivePost"}},{"kind":"Field","name":{"kind":"Name","value":"totalPost"}},{"kind":"Field","name":{"kind":"Name","value":"totalPublicPost"}},{"kind":"Field","name":{"kind":"Name","value":"totalSubscriber"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}},{"kind":"Field","name":{"kind":"Name","value":"bannerUrl"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"lastLoginAt"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"roles"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]} as unknown as DocumentNode<GetCreatorProfileByAdminQuery, GetCreatorProfileByAdminQueryVariables>;
export const GetCreatorProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCreatorProfile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getCreatorProfile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allowsComment"}},{"kind":"Field","name":{"kind":"Name","value":"allowsMessaging"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"creatorId"}},{"kind":"Field","name":{"kind":"Name","value":"displayOnlineStatus"}},{"kind":"Field","name":{"kind":"Name","value":"displayTotalPost"}},{"kind":"Field","name":{"kind":"Name","value":"displayTotalSubscriber"}},{"kind":"Field","name":{"kind":"Name","value":"themeColor"}},{"kind":"Field","name":{"kind":"Name","value":"totalExclusivePost"}},{"kind":"Field","name":{"kind":"Name","value":"totalPost"}},{"kind":"Field","name":{"kind":"Name","value":"totalPublicPost"}},{"kind":"Field","name":{"kind":"Name","value":"totalSubscriber"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}},{"kind":"Field","name":{"kind":"Name","value":"bannerUrl"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"lastLoginAt"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"roles"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]} as unknown as DocumentNode<GetCreatorProfileQuery, GetCreatorProfileQueryVariables>;
export const UpdateCreatorProfileByAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateCreatorProfileByAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ExtendedUpdateCreatorProfileInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateCreatorProfileByAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allowsComment"}},{"kind":"Field","name":{"kind":"Name","value":"allowsMessaging"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"creatorId"}},{"kind":"Field","name":{"kind":"Name","value":"displayOnlineStatus"}},{"kind":"Field","name":{"kind":"Name","value":"displayTotalPost"}},{"kind":"Field","name":{"kind":"Name","value":"displayTotalSubscriber"}},{"kind":"Field","name":{"kind":"Name","value":"themeColor"}},{"kind":"Field","name":{"kind":"Name","value":"totalExclusivePost"}},{"kind":"Field","name":{"kind":"Name","value":"totalPost"}},{"kind":"Field","name":{"kind":"Name","value":"totalPublicPost"}},{"kind":"Field","name":{"kind":"Name","value":"totalSubscriber"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}},{"kind":"Field","name":{"kind":"Name","value":"bannerUrl"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateCreatorProfileByAdminMutation, UpdateCreatorProfileByAdminMutationVariables>;
export const GetBlockedUsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetBlockedUsers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PaginationInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getBlockedUsers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blockedAt"}},{"kind":"Field","name":{"kind":"Name","value":"creatorId"}},{"kind":"Field","name":{"kind":"Name","value":"fanId"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"unBlockedAt"}},{"kind":"Field","name":{"kind":"Name","value":"fanProfile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fanId"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetBlockedUsersQuery, GetBlockedUsersQueryVariables>;
export const BlockFanDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"BlockFan"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"BlockFanInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blockFan"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<BlockFanMutation, BlockFanMutationVariables>;
export const UnBlockFanDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UnBlockFan"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"BlockFanInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blockFan"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<UnBlockFanMutation, UnBlockFanMutationVariables>;
export const RestrictFanDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RestrictFan"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RestrictFanInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"restrictFan"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<RestrictFanMutation, RestrictFanMutationVariables>;
export const UnRestrictFanDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UnRestrictFan"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RestrictFanInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"restrictFan"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<UnRestrictFanMutation, UnRestrictFanMutationVariables>;
export const GetRestrictedUsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetRestrictedUsers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PaginationInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getRestrictedUsers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"creatorId"}},{"kind":"Field","name":{"kind":"Name","value":"fanId"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"restrictedAt"}},{"kind":"Field","name":{"kind":"Name","value":"unRestrictedAt"}},{"kind":"Field","name":{"kind":"Name","value":"fanProfile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fanId"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetRestrictedUsersQuery, GetRestrictedUsersQueryVariables>;
export const GetFanProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getFanProfile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getFanProfile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fanId"}},{"kind":"Field","name":{"kind":"Name","value":"appliedAt"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}},{"kind":"Field","name":{"kind":"Name","value":"bannerUrl"}}]}}]}}]}}]} as unknown as DocumentNode<GetFanProfileQuery, GetFanProfileQueryVariables>;
export const UpdateFanProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateFanProfile"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateUserProfileInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateFanProfile"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"appliedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}},{"kind":"Field","name":{"kind":"Name","value":"fanId"}},{"kind":"Field","name":{"kind":"Name","value":"isBanned"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}},{"kind":"Field","name":{"kind":"Name","value":"bannerUrl"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"lastLoginAt"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"roles"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateFanProfileMutation, UpdateFanProfileMutationVariables>;
export const InitiateCreatorObjectsImportDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"InitiateCreatorObjectsImport"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateImportQueueInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"initiateCreatorObjectsImport"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<InitiateCreatorObjectsImportMutation, InitiateCreatorObjectsImportMutationVariables>;
export const InitiateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Initiate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateImportQueueInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"initiate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<InitiateMutation, InitiateMutationVariables>;
export const GetPostsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPosts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PaginationInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPosts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"commentCount"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"creatorId"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"lastCommentId"}},{"kind":"Field","name":{"kind":"Name","value":"likeCount"}},{"kind":"Field","name":{"kind":"Name","value":"saveCount"}},{"kind":"Field","name":{"kind":"Name","value":"shareCount"}},{"kind":"Field","name":{"kind":"Name","value":"totalEarning"}},{"kind":"Field","name":{"kind":"Name","value":"types"}},{"kind":"Field","name":{"kind":"Name","value":"unlockPrice"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<GetPostsQuery, GetPostsQueryVariables>;
export const GetPostsInfoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPostsInfo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PaginationInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPostsInfo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"commentCount"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"creatorId"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"lastCommentId"}},{"kind":"Field","name":{"kind":"Name","value":"latestComment"}},{"kind":"Field","name":{"kind":"Name","value":"likeCount"}},{"kind":"Field","name":{"kind":"Name","value":"saveCount"}},{"kind":"Field","name":{"kind":"Name","value":"shareCount"}},{"kind":"Field","name":{"kind":"Name","value":"totalEarning"}},{"kind":"Field","name":{"kind":"Name","value":"types"}},{"kind":"Field","name":{"kind":"Name","value":"unlockPrice"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<GetPostsInfoQuery, GetPostsInfoQueryVariables>;
export const CreatePostDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreatePost"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreatePostInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPost"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"commentCount"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"creatorId"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"lastCommentId"}},{"kind":"Field","name":{"kind":"Name","value":"likeCount"}},{"kind":"Field","name":{"kind":"Name","value":"saveCount"}},{"kind":"Field","name":{"kind":"Name","value":"shareCount"}},{"kind":"Field","name":{"kind":"Name","value":"totalEarning"}},{"kind":"Field","name":{"kind":"Name","value":"types"}},{"kind":"Field","name":{"kind":"Name","value":"unlockPrice"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<CreatePostMutation, CreatePostMutationVariables>;
export const CreateCommentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateComment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateCommentInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createComment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"comment"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}},{"kind":"Field","name":{"kind":"Name","value":"fanId"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"postId"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<CreateCommentMutation, CreateCommentMutationVariables>;
export const UpdateCommentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateComment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateCommentInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateComment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"comment"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}},{"kind":"Field","name":{"kind":"Name","value":"fanId"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"postId"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<UpdateCommentMutation, UpdateCommentMutationVariables>;
export const DeleteCommentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteComment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeleteCommentInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteComment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<DeleteCommentMutation, DeleteCommentMutationVariables>;
export const UpdatePostDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdatePost"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdatePostInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatePost"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"commentCount"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"creatorId"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"likeCount"}},{"kind":"Field","name":{"kind":"Name","value":"saveCount"}},{"kind":"Field","name":{"kind":"Name","value":"shareCount"}},{"kind":"Field","name":{"kind":"Name","value":"totalEarning"}},{"kind":"Field","name":{"kind":"Name","value":"types"}},{"kind":"Field","name":{"kind":"Name","value":"unlockPrice"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<UpdatePostMutation, UpdatePostMutationVariables>;
export const DeletePostDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeletePost"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeletePostInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deletePost"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<DeletePostMutation, DeletePostMutationVariables>;
export const DeletePostsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeletePosts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeletePostsInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deletePosts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<DeletePostsMutation, DeletePostsMutationVariables>;
export const LikePostDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LikePost"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LikePostInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"likePost"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"commentCount"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"creatorId"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"likeCount"}},{"kind":"Field","name":{"kind":"Name","value":"saveCount"}},{"kind":"Field","name":{"kind":"Name","value":"shareCount"}},{"kind":"Field","name":{"kind":"Name","value":"totalEarning"}},{"kind":"Field","name":{"kind":"Name","value":"types"}},{"kind":"Field","name":{"kind":"Name","value":"unlockPrice"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<LikePostMutation, LikePostMutationVariables>;
export const SavePostDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SavePost"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SavePostInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"savePost"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"commentCount"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"creatorId"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"likeCount"}},{"kind":"Field","name":{"kind":"Name","value":"saveCount"}},{"kind":"Field","name":{"kind":"Name","value":"shareCount"}},{"kind":"Field","name":{"kind":"Name","value":"totalEarning"}},{"kind":"Field","name":{"kind":"Name","value":"types"}},{"kind":"Field","name":{"kind":"Name","value":"unlockPrice"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<SavePostMutation, SavePostMutationVariables>;
export const GetTagsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTags"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PaginationInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getTags"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}}]}}]} as unknown as DocumentNode<GetTagsQuery, GetTagsQueryVariables>;
export const GetUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}},{"kind":"Field","name":{"kind":"Name","value":"bannerUrl"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"lastLoginAt"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"roles"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]} as unknown as DocumentNode<GetUserQuery, GetUserQueryVariables>;
export const GetDefaultCreatorsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetDefaultCreators"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PaginationInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getDefaultCreators"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}},{"kind":"Field","name":{"kind":"Name","value":"hasNext"}},{"kind":"Field","name":{"kind":"Name","value":"hasPrev"}},{"kind":"Field","name":{"kind":"Name","value":"creators"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}},{"kind":"Field","name":{"kind":"Name","value":"bannerUrl"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"lastLoginAt"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"roles"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]} as unknown as DocumentNode<GetDefaultCreatorsQuery, GetDefaultCreatorsQueryVariables>;
export const DownloadCreatorObjectsAsBatchDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DownloadCreatorObjectsAsBatch"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UploadVaultQueueInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"downloadCreatorObjectsAsBatch"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<DownloadCreatorObjectsAsBatchMutation, DownloadCreatorObjectsAsBatchMutationVariables>;
export const TerminateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Terminate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"terminate"}}]}}]} as unknown as DocumentNode<TerminateMutation, TerminateMutationVariables>;
export const GetTotalObjectsAsTypeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTotalObjectsAsType"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PaginationInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getTotalObjectsAsType"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<GetTotalObjectsAsTypeQuery, GetTotalObjectsAsTypeQueryVariables>;
export const CleanUpVaultObjectsOfACreatorDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CleanUpVaultObjectsOfACreator"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CleanUpVaultInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cleanUpVaultObjectsOfACreator"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<CleanUpVaultObjectsOfACreatorMutation, CleanUpVaultObjectsOfACreatorMutationVariables>;
export const GetCountOfObjectsOfEachTypeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCountOfObjectsOfEachType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getCountOfObjectsOfEachType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fulfilled"}},{"kind":"Field","name":{"kind":"Name","value":"pending"}},{"kind":"Field","name":{"kind":"Name","value":"processing"}},{"kind":"Field","name":{"kind":"Name","value":"rejected"}}]}}]}}]} as unknown as DocumentNode<GetCountOfObjectsOfEachTypeQuery, GetCountOfObjectsOfEachTypeQueryVariables>;
export const GetVaultObjectsByVaultIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetVaultObjectsByVaultId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PaginationInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getVaultObjectsByVaultId"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"hasNext"}},{"kind":"Field","name":{"kind":"Name","value":"hasPrev"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}},{"kind":"Field","name":{"kind":"Name","value":"vaultObjects"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"asset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blurredUrl"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"creatorId"}},{"kind":"Field","name":{"kind":"Name","value":"fileType"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"mediaType"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"rawUrl"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"vaultObjectId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}},{"kind":"Field","name":{"kind":"Name","value":"fileType"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"vaultId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"vault"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"creatorId"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"keywords"}},{"kind":"Field","name":{"kind":"Name","value":"preview"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]} as unknown as DocumentNode<GetVaultObjectsByVaultIdQuery, GetVaultObjectsByVaultIdQueryVariables>;
export const GetDefaultVaultsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetDefaultVaults"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PaginationInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getDefaultVaults"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"hasNext"}},{"kind":"Field","name":{"kind":"Name","value":"hasPrev"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}},{"kind":"Field","name":{"kind":"Name","value":"vaults"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"creatorId"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"keywords"}},{"kind":"Field","name":{"kind":"Name","value":"creatorProfile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"creatorId"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}},{"kind":"Field","name":{"kind":"Name","value":"bannerUrl"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"preview"}}]}}]}}]}}]} as unknown as DocumentNode<GetDefaultVaultsQuery, GetDefaultVaultsQueryVariables>;