module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.8). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateBathroom {
  count: Int!
}

type AggregateBookmark {
  count: Int!
}

type AggregateReview {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Bathroom {
  id: ID!
  createdAt: DateTime!
  businessName: String
  description: String!
  address: String!
  category: String!
  genderNeutral: String!
  lat: Float!
  lng: Float!
  changingStations: Boolean!
  purchaseRequired: Boolean!
  accessibleStall: Boolean!
  singleOccupancy: Boolean!
  postedBy: User
  reviews(where: ReviewWhereInput, orderBy: ReviewOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Review!]
  bookmarks(where: BookmarkWhereInput, orderBy: BookmarkOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Bookmark!]
}

type BathroomConnection {
  pageInfo: PageInfo!
  edges: [BathroomEdge]!
  aggregate: AggregateBathroom!
}

input BathroomCreateInput {
  id: ID
  businessName: String
  description: String!
  address: String!
  category: String!
  genderNeutral: String!
  lat: Float!
  lng: Float!
  changingStations: Boolean
  purchaseRequired: Boolean
  accessibleStall: Boolean
  singleOccupancy: Boolean
  postedBy: UserCreateOneWithoutBathroomsInput
  reviews: ReviewCreateManyWithoutBathroomInput
  bookmarks: BookmarkCreateManyWithoutBathroomInput
}

input BathroomCreateManyWithoutPostedByInput {
  create: [BathroomCreateWithoutPostedByInput!]
  connect: [BathroomWhereUniqueInput!]
}

input BathroomCreateOneWithoutBookmarksInput {
  create: BathroomCreateWithoutBookmarksInput
  connect: BathroomWhereUniqueInput
}

input BathroomCreateOneWithoutReviewsInput {
  create: BathroomCreateWithoutReviewsInput
  connect: BathroomWhereUniqueInput
}

input BathroomCreateWithoutBookmarksInput {
  id: ID
  businessName: String
  description: String!
  address: String!
  category: String!
  genderNeutral: String!
  lat: Float!
  lng: Float!
  changingStations: Boolean
  purchaseRequired: Boolean
  accessibleStall: Boolean
  singleOccupancy: Boolean
  postedBy: UserCreateOneWithoutBathroomsInput
  reviews: ReviewCreateManyWithoutBathroomInput
}

input BathroomCreateWithoutPostedByInput {
  id: ID
  businessName: String
  description: String!
  address: String!
  category: String!
  genderNeutral: String!
  lat: Float!
  lng: Float!
  changingStations: Boolean
  purchaseRequired: Boolean
  accessibleStall: Boolean
  singleOccupancy: Boolean
  reviews: ReviewCreateManyWithoutBathroomInput
  bookmarks: BookmarkCreateManyWithoutBathroomInput
}

input BathroomCreateWithoutReviewsInput {
  id: ID
  businessName: String
  description: String!
  address: String!
  category: String!
  genderNeutral: String!
  lat: Float!
  lng: Float!
  changingStations: Boolean
  purchaseRequired: Boolean
  accessibleStall: Boolean
  singleOccupancy: Boolean
  postedBy: UserCreateOneWithoutBathroomsInput
  bookmarks: BookmarkCreateManyWithoutBathroomInput
}

type BathroomEdge {
  node: Bathroom!
  cursor: String!
}

enum BathroomOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  businessName_ASC
  businessName_DESC
  description_ASC
  description_DESC
  address_ASC
  address_DESC
  category_ASC
  category_DESC
  genderNeutral_ASC
  genderNeutral_DESC
  lat_ASC
  lat_DESC
  lng_ASC
  lng_DESC
  changingStations_ASC
  changingStations_DESC
  purchaseRequired_ASC
  purchaseRequired_DESC
  accessibleStall_ASC
  accessibleStall_DESC
  singleOccupancy_ASC
  singleOccupancy_DESC
}

type BathroomPreviousValues {
  id: ID!
  createdAt: DateTime!
  businessName: String
  description: String!
  address: String!
  category: String!
  genderNeutral: String!
  lat: Float!
  lng: Float!
  changingStations: Boolean!
  purchaseRequired: Boolean!
  accessibleStall: Boolean!
  singleOccupancy: Boolean!
}

input BathroomScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  businessName: String
  businessName_not: String
  businessName_in: [String!]
  businessName_not_in: [String!]
  businessName_lt: String
  businessName_lte: String
  businessName_gt: String
  businessName_gte: String
  businessName_contains: String
  businessName_not_contains: String
  businessName_starts_with: String
  businessName_not_starts_with: String
  businessName_ends_with: String
  businessName_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  address: String
  address_not: String
  address_in: [String!]
  address_not_in: [String!]
  address_lt: String
  address_lte: String
  address_gt: String
  address_gte: String
  address_contains: String
  address_not_contains: String
  address_starts_with: String
  address_not_starts_with: String
  address_ends_with: String
  address_not_ends_with: String
  category: String
  category_not: String
  category_in: [String!]
  category_not_in: [String!]
  category_lt: String
  category_lte: String
  category_gt: String
  category_gte: String
  category_contains: String
  category_not_contains: String
  category_starts_with: String
  category_not_starts_with: String
  category_ends_with: String
  category_not_ends_with: String
  genderNeutral: String
  genderNeutral_not: String
  genderNeutral_in: [String!]
  genderNeutral_not_in: [String!]
  genderNeutral_lt: String
  genderNeutral_lte: String
  genderNeutral_gt: String
  genderNeutral_gte: String
  genderNeutral_contains: String
  genderNeutral_not_contains: String
  genderNeutral_starts_with: String
  genderNeutral_not_starts_with: String
  genderNeutral_ends_with: String
  genderNeutral_not_ends_with: String
  lat: Float
  lat_not: Float
  lat_in: [Float!]
  lat_not_in: [Float!]
  lat_lt: Float
  lat_lte: Float
  lat_gt: Float
  lat_gte: Float
  lng: Float
  lng_not: Float
  lng_in: [Float!]
  lng_not_in: [Float!]
  lng_lt: Float
  lng_lte: Float
  lng_gt: Float
  lng_gte: Float
  changingStations: Boolean
  changingStations_not: Boolean
  purchaseRequired: Boolean
  purchaseRequired_not: Boolean
  accessibleStall: Boolean
  accessibleStall_not: Boolean
  singleOccupancy: Boolean
  singleOccupancy_not: Boolean
  AND: [BathroomScalarWhereInput!]
  OR: [BathroomScalarWhereInput!]
  NOT: [BathroomScalarWhereInput!]
}

type BathroomSubscriptionPayload {
  mutation: MutationType!
  node: Bathroom
  updatedFields: [String!]
  previousValues: BathroomPreviousValues
}

input BathroomSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: BathroomWhereInput
  AND: [BathroomSubscriptionWhereInput!]
  OR: [BathroomSubscriptionWhereInput!]
  NOT: [BathroomSubscriptionWhereInput!]
}

input BathroomUpdateInput {
  businessName: String
  description: String
  address: String
  category: String
  genderNeutral: String
  lat: Float
  lng: Float
  changingStations: Boolean
  purchaseRequired: Boolean
  accessibleStall: Boolean
  singleOccupancy: Boolean
  postedBy: UserUpdateOneWithoutBathroomsInput
  reviews: ReviewUpdateManyWithoutBathroomInput
  bookmarks: BookmarkUpdateManyWithoutBathroomInput
}

input BathroomUpdateManyDataInput {
  businessName: String
  description: String
  address: String
  category: String
  genderNeutral: String
  lat: Float
  lng: Float
  changingStations: Boolean
  purchaseRequired: Boolean
  accessibleStall: Boolean
  singleOccupancy: Boolean
}

input BathroomUpdateManyMutationInput {
  businessName: String
  description: String
  address: String
  category: String
  genderNeutral: String
  lat: Float
  lng: Float
  changingStations: Boolean
  purchaseRequired: Boolean
  accessibleStall: Boolean
  singleOccupancy: Boolean
}

input BathroomUpdateManyWithoutPostedByInput {
  create: [BathroomCreateWithoutPostedByInput!]
  delete: [BathroomWhereUniqueInput!]
  connect: [BathroomWhereUniqueInput!]
  set: [BathroomWhereUniqueInput!]
  disconnect: [BathroomWhereUniqueInput!]
  update: [BathroomUpdateWithWhereUniqueWithoutPostedByInput!]
  upsert: [BathroomUpsertWithWhereUniqueWithoutPostedByInput!]
  deleteMany: [BathroomScalarWhereInput!]
  updateMany: [BathroomUpdateManyWithWhereNestedInput!]
}

input BathroomUpdateManyWithWhereNestedInput {
  where: BathroomScalarWhereInput!
  data: BathroomUpdateManyDataInput!
}

input BathroomUpdateOneRequiredWithoutBookmarksInput {
  create: BathroomCreateWithoutBookmarksInput
  update: BathroomUpdateWithoutBookmarksDataInput
  upsert: BathroomUpsertWithoutBookmarksInput
  connect: BathroomWhereUniqueInput
}

input BathroomUpdateOneWithoutReviewsInput {
  create: BathroomCreateWithoutReviewsInput
  update: BathroomUpdateWithoutReviewsDataInput
  upsert: BathroomUpsertWithoutReviewsInput
  delete: Boolean
  disconnect: Boolean
  connect: BathroomWhereUniqueInput
}

input BathroomUpdateWithoutBookmarksDataInput {
  businessName: String
  description: String
  address: String
  category: String
  genderNeutral: String
  lat: Float
  lng: Float
  changingStations: Boolean
  purchaseRequired: Boolean
  accessibleStall: Boolean
  singleOccupancy: Boolean
  postedBy: UserUpdateOneWithoutBathroomsInput
  reviews: ReviewUpdateManyWithoutBathroomInput
}

input BathroomUpdateWithoutPostedByDataInput {
  businessName: String
  description: String
  address: String
  category: String
  genderNeutral: String
  lat: Float
  lng: Float
  changingStations: Boolean
  purchaseRequired: Boolean
  accessibleStall: Boolean
  singleOccupancy: Boolean
  reviews: ReviewUpdateManyWithoutBathroomInput
  bookmarks: BookmarkUpdateManyWithoutBathroomInput
}

input BathroomUpdateWithoutReviewsDataInput {
  businessName: String
  description: String
  address: String
  category: String
  genderNeutral: String
  lat: Float
  lng: Float
  changingStations: Boolean
  purchaseRequired: Boolean
  accessibleStall: Boolean
  singleOccupancy: Boolean
  postedBy: UserUpdateOneWithoutBathroomsInput
  bookmarks: BookmarkUpdateManyWithoutBathroomInput
}

input BathroomUpdateWithWhereUniqueWithoutPostedByInput {
  where: BathroomWhereUniqueInput!
  data: BathroomUpdateWithoutPostedByDataInput!
}

input BathroomUpsertWithoutBookmarksInput {
  update: BathroomUpdateWithoutBookmarksDataInput!
  create: BathroomCreateWithoutBookmarksInput!
}

input BathroomUpsertWithoutReviewsInput {
  update: BathroomUpdateWithoutReviewsDataInput!
  create: BathroomCreateWithoutReviewsInput!
}

input BathroomUpsertWithWhereUniqueWithoutPostedByInput {
  where: BathroomWhereUniqueInput!
  update: BathroomUpdateWithoutPostedByDataInput!
  create: BathroomCreateWithoutPostedByInput!
}

input BathroomWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  businessName: String
  businessName_not: String
  businessName_in: [String!]
  businessName_not_in: [String!]
  businessName_lt: String
  businessName_lte: String
  businessName_gt: String
  businessName_gte: String
  businessName_contains: String
  businessName_not_contains: String
  businessName_starts_with: String
  businessName_not_starts_with: String
  businessName_ends_with: String
  businessName_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  address: String
  address_not: String
  address_in: [String!]
  address_not_in: [String!]
  address_lt: String
  address_lte: String
  address_gt: String
  address_gte: String
  address_contains: String
  address_not_contains: String
  address_starts_with: String
  address_not_starts_with: String
  address_ends_with: String
  address_not_ends_with: String
  category: String
  category_not: String
  category_in: [String!]
  category_not_in: [String!]
  category_lt: String
  category_lte: String
  category_gt: String
  category_gte: String
  category_contains: String
  category_not_contains: String
  category_starts_with: String
  category_not_starts_with: String
  category_ends_with: String
  category_not_ends_with: String
  genderNeutral: String
  genderNeutral_not: String
  genderNeutral_in: [String!]
  genderNeutral_not_in: [String!]
  genderNeutral_lt: String
  genderNeutral_lte: String
  genderNeutral_gt: String
  genderNeutral_gte: String
  genderNeutral_contains: String
  genderNeutral_not_contains: String
  genderNeutral_starts_with: String
  genderNeutral_not_starts_with: String
  genderNeutral_ends_with: String
  genderNeutral_not_ends_with: String
  lat: Float
  lat_not: Float
  lat_in: [Float!]
  lat_not_in: [Float!]
  lat_lt: Float
  lat_lte: Float
  lat_gt: Float
  lat_gte: Float
  lng: Float
  lng_not: Float
  lng_in: [Float!]
  lng_not_in: [Float!]
  lng_lt: Float
  lng_lte: Float
  lng_gt: Float
  lng_gte: Float
  changingStations: Boolean
  changingStations_not: Boolean
  purchaseRequired: Boolean
  purchaseRequired_not: Boolean
  accessibleStall: Boolean
  accessibleStall_not: Boolean
  singleOccupancy: Boolean
  singleOccupancy_not: Boolean
  postedBy: UserWhereInput
  reviews_every: ReviewWhereInput
  reviews_some: ReviewWhereInput
  reviews_none: ReviewWhereInput
  bookmarks_every: BookmarkWhereInput
  bookmarks_some: BookmarkWhereInput
  bookmarks_none: BookmarkWhereInput
  AND: [BathroomWhereInput!]
  OR: [BathroomWhereInput!]
  NOT: [BathroomWhereInput!]
}

input BathroomWhereUniqueInput {
  id: ID
}

type Bookmark {
  id: ID!
  user: User!
  bathroom: Bathroom!
}

type BookmarkConnection {
  pageInfo: PageInfo!
  edges: [BookmarkEdge]!
  aggregate: AggregateBookmark!
}

input BookmarkCreateInput {
  id: ID
  user: UserCreateOneWithoutBookmarksInput!
  bathroom: BathroomCreateOneWithoutBookmarksInput!
}

input BookmarkCreateManyWithoutBathroomInput {
  create: [BookmarkCreateWithoutBathroomInput!]
  connect: [BookmarkWhereUniqueInput!]
}

input BookmarkCreateManyWithoutUserInput {
  create: [BookmarkCreateWithoutUserInput!]
  connect: [BookmarkWhereUniqueInput!]
}

input BookmarkCreateWithoutBathroomInput {
  id: ID
  user: UserCreateOneWithoutBookmarksInput!
}

input BookmarkCreateWithoutUserInput {
  id: ID
  bathroom: BathroomCreateOneWithoutBookmarksInput!
}

type BookmarkEdge {
  node: Bookmark!
  cursor: String!
}

enum BookmarkOrderByInput {
  id_ASC
  id_DESC
}

type BookmarkPreviousValues {
  id: ID!
}

input BookmarkScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  AND: [BookmarkScalarWhereInput!]
  OR: [BookmarkScalarWhereInput!]
  NOT: [BookmarkScalarWhereInput!]
}

type BookmarkSubscriptionPayload {
  mutation: MutationType!
  node: Bookmark
  updatedFields: [String!]
  previousValues: BookmarkPreviousValues
}

input BookmarkSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: BookmarkWhereInput
  AND: [BookmarkSubscriptionWhereInput!]
  OR: [BookmarkSubscriptionWhereInput!]
  NOT: [BookmarkSubscriptionWhereInput!]
}

input BookmarkUpdateInput {
  user: UserUpdateOneRequiredWithoutBookmarksInput
  bathroom: BathroomUpdateOneRequiredWithoutBookmarksInput
}

input BookmarkUpdateManyWithoutBathroomInput {
  create: [BookmarkCreateWithoutBathroomInput!]
  delete: [BookmarkWhereUniqueInput!]
  connect: [BookmarkWhereUniqueInput!]
  set: [BookmarkWhereUniqueInput!]
  disconnect: [BookmarkWhereUniqueInput!]
  update: [BookmarkUpdateWithWhereUniqueWithoutBathroomInput!]
  upsert: [BookmarkUpsertWithWhereUniqueWithoutBathroomInput!]
  deleteMany: [BookmarkScalarWhereInput!]
}

input BookmarkUpdateManyWithoutUserInput {
  create: [BookmarkCreateWithoutUserInput!]
  delete: [BookmarkWhereUniqueInput!]
  connect: [BookmarkWhereUniqueInput!]
  set: [BookmarkWhereUniqueInput!]
  disconnect: [BookmarkWhereUniqueInput!]
  update: [BookmarkUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [BookmarkUpsertWithWhereUniqueWithoutUserInput!]
  deleteMany: [BookmarkScalarWhereInput!]
}

input BookmarkUpdateWithoutBathroomDataInput {
  user: UserUpdateOneRequiredWithoutBookmarksInput
}

input BookmarkUpdateWithoutUserDataInput {
  bathroom: BathroomUpdateOneRequiredWithoutBookmarksInput
}

input BookmarkUpdateWithWhereUniqueWithoutBathroomInput {
  where: BookmarkWhereUniqueInput!
  data: BookmarkUpdateWithoutBathroomDataInput!
}

input BookmarkUpdateWithWhereUniqueWithoutUserInput {
  where: BookmarkWhereUniqueInput!
  data: BookmarkUpdateWithoutUserDataInput!
}

input BookmarkUpsertWithWhereUniqueWithoutBathroomInput {
  where: BookmarkWhereUniqueInput!
  update: BookmarkUpdateWithoutBathroomDataInput!
  create: BookmarkCreateWithoutBathroomInput!
}

input BookmarkUpsertWithWhereUniqueWithoutUserInput {
  where: BookmarkWhereUniqueInput!
  update: BookmarkUpdateWithoutUserDataInput!
  create: BookmarkCreateWithoutUserInput!
}

input BookmarkWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  user: UserWhereInput
  bathroom: BathroomWhereInput
  AND: [BookmarkWhereInput!]
  OR: [BookmarkWhereInput!]
  NOT: [BookmarkWhereInput!]
}

input BookmarkWhereUniqueInput {
  id: ID
}

scalar DateTime

scalar Long

type Mutation {
  createBathroom(data: BathroomCreateInput!): Bathroom!
  updateBathroom(data: BathroomUpdateInput!, where: BathroomWhereUniqueInput!): Bathroom
  updateManyBathrooms(data: BathroomUpdateManyMutationInput!, where: BathroomWhereInput): BatchPayload!
  upsertBathroom(where: BathroomWhereUniqueInput!, create: BathroomCreateInput!, update: BathroomUpdateInput!): Bathroom!
  deleteBathroom(where: BathroomWhereUniqueInput!): Bathroom
  deleteManyBathrooms(where: BathroomWhereInput): BatchPayload!
  createBookmark(data: BookmarkCreateInput!): Bookmark!
  updateBookmark(data: BookmarkUpdateInput!, where: BookmarkWhereUniqueInput!): Bookmark
  upsertBookmark(where: BookmarkWhereUniqueInput!, create: BookmarkCreateInput!, update: BookmarkUpdateInput!): Bookmark!
  deleteBookmark(where: BookmarkWhereUniqueInput!): Bookmark
  deleteManyBookmarks(where: BookmarkWhereInput): BatchPayload!
  createReview(data: ReviewCreateInput!): Review!
  updateReview(data: ReviewUpdateInput!, where: ReviewWhereUniqueInput!): Review
  updateManyReviews(data: ReviewUpdateManyMutationInput!, where: ReviewWhereInput): BatchPayload!
  upsertReview(where: ReviewWhereUniqueInput!, create: ReviewCreateInput!, update: ReviewUpdateInput!): Review!
  deleteReview(where: ReviewWhereUniqueInput!): Review
  deleteManyReviews(where: ReviewWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  bathroom(where: BathroomWhereUniqueInput!): Bathroom
  bathrooms(where: BathroomWhereInput, orderBy: BathroomOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Bathroom]!
  bathroomsConnection(where: BathroomWhereInput, orderBy: BathroomOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BathroomConnection!
  bookmark(where: BookmarkWhereUniqueInput!): Bookmark
  bookmarks(where: BookmarkWhereInput, orderBy: BookmarkOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Bookmark]!
  bookmarksConnection(where: BookmarkWhereInput, orderBy: BookmarkOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BookmarkConnection!
  review(where: ReviewWhereUniqueInput!): Review
  reviews(where: ReviewWhereInput, orderBy: ReviewOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Review]!
  reviewsConnection(where: ReviewWhereInput, orderBy: ReviewOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ReviewConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Review {
  id: ID!
  title: String!
  description: String!
  createdBy: User!
  bathroom: Bathroom
}

type ReviewConnection {
  pageInfo: PageInfo!
  edges: [ReviewEdge]!
  aggregate: AggregateReview!
}

input ReviewCreateInput {
  id: ID
  title: String!
  description: String!
  createdBy: UserCreateOneWithoutReviewsInput!
  bathroom: BathroomCreateOneWithoutReviewsInput
}

input ReviewCreateManyWithoutBathroomInput {
  create: [ReviewCreateWithoutBathroomInput!]
  connect: [ReviewWhereUniqueInput!]
}

input ReviewCreateManyWithoutCreatedByInput {
  create: [ReviewCreateWithoutCreatedByInput!]
  connect: [ReviewWhereUniqueInput!]
}

input ReviewCreateWithoutBathroomInput {
  id: ID
  title: String!
  description: String!
  createdBy: UserCreateOneWithoutReviewsInput!
}

input ReviewCreateWithoutCreatedByInput {
  id: ID
  title: String!
  description: String!
  bathroom: BathroomCreateOneWithoutReviewsInput
}

type ReviewEdge {
  node: Review!
  cursor: String!
}

enum ReviewOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  description_ASC
  description_DESC
}

type ReviewPreviousValues {
  id: ID!
  title: String!
  description: String!
}

input ReviewScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  AND: [ReviewScalarWhereInput!]
  OR: [ReviewScalarWhereInput!]
  NOT: [ReviewScalarWhereInput!]
}

type ReviewSubscriptionPayload {
  mutation: MutationType!
  node: Review
  updatedFields: [String!]
  previousValues: ReviewPreviousValues
}

input ReviewSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ReviewWhereInput
  AND: [ReviewSubscriptionWhereInput!]
  OR: [ReviewSubscriptionWhereInput!]
  NOT: [ReviewSubscriptionWhereInput!]
}

input ReviewUpdateInput {
  title: String
  description: String
  createdBy: UserUpdateOneRequiredWithoutReviewsInput
  bathroom: BathroomUpdateOneWithoutReviewsInput
}

input ReviewUpdateManyDataInput {
  title: String
  description: String
}

input ReviewUpdateManyMutationInput {
  title: String
  description: String
}

input ReviewUpdateManyWithoutBathroomInput {
  create: [ReviewCreateWithoutBathroomInput!]
  delete: [ReviewWhereUniqueInput!]
  connect: [ReviewWhereUniqueInput!]
  set: [ReviewWhereUniqueInput!]
  disconnect: [ReviewWhereUniqueInput!]
  update: [ReviewUpdateWithWhereUniqueWithoutBathroomInput!]
  upsert: [ReviewUpsertWithWhereUniqueWithoutBathroomInput!]
  deleteMany: [ReviewScalarWhereInput!]
  updateMany: [ReviewUpdateManyWithWhereNestedInput!]
}

input ReviewUpdateManyWithoutCreatedByInput {
  create: [ReviewCreateWithoutCreatedByInput!]
  delete: [ReviewWhereUniqueInput!]
  connect: [ReviewWhereUniqueInput!]
  set: [ReviewWhereUniqueInput!]
  disconnect: [ReviewWhereUniqueInput!]
  update: [ReviewUpdateWithWhereUniqueWithoutCreatedByInput!]
  upsert: [ReviewUpsertWithWhereUniqueWithoutCreatedByInput!]
  deleteMany: [ReviewScalarWhereInput!]
  updateMany: [ReviewUpdateManyWithWhereNestedInput!]
}

input ReviewUpdateManyWithWhereNestedInput {
  where: ReviewScalarWhereInput!
  data: ReviewUpdateManyDataInput!
}

input ReviewUpdateWithoutBathroomDataInput {
  title: String
  description: String
  createdBy: UserUpdateOneRequiredWithoutReviewsInput
}

input ReviewUpdateWithoutCreatedByDataInput {
  title: String
  description: String
  bathroom: BathroomUpdateOneWithoutReviewsInput
}

input ReviewUpdateWithWhereUniqueWithoutBathroomInput {
  where: ReviewWhereUniqueInput!
  data: ReviewUpdateWithoutBathroomDataInput!
}

input ReviewUpdateWithWhereUniqueWithoutCreatedByInput {
  where: ReviewWhereUniqueInput!
  data: ReviewUpdateWithoutCreatedByDataInput!
}

input ReviewUpsertWithWhereUniqueWithoutBathroomInput {
  where: ReviewWhereUniqueInput!
  update: ReviewUpdateWithoutBathroomDataInput!
  create: ReviewCreateWithoutBathroomInput!
}

input ReviewUpsertWithWhereUniqueWithoutCreatedByInput {
  where: ReviewWhereUniqueInput!
  update: ReviewUpdateWithoutCreatedByDataInput!
  create: ReviewCreateWithoutCreatedByInput!
}

input ReviewWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  createdBy: UserWhereInput
  bathroom: BathroomWhereInput
  AND: [ReviewWhereInput!]
  OR: [ReviewWhereInput!]
  NOT: [ReviewWhereInput!]
}

input ReviewWhereUniqueInput {
  id: ID
}

type Subscription {
  bathroom(where: BathroomSubscriptionWhereInput): BathroomSubscriptionPayload
  bookmark(where: BookmarkSubscriptionWhereInput): BookmarkSubscriptionPayload
  review(where: ReviewSubscriptionWhereInput): ReviewSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  name: String!
  email: String!
  password: String!
  bathrooms(where: BathroomWhereInput, orderBy: BathroomOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Bathroom!]
  reviews(where: ReviewWhereInput, orderBy: ReviewOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Review!]
  bookmarks(where: BookmarkWhereInput, orderBy: BookmarkOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Bookmark!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  name: String!
  email: String!
  password: String!
  bathrooms: BathroomCreateManyWithoutPostedByInput
  reviews: ReviewCreateManyWithoutCreatedByInput
  bookmarks: BookmarkCreateManyWithoutUserInput
}

input UserCreateOneWithoutBathroomsInput {
  create: UserCreateWithoutBathroomsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutBookmarksInput {
  create: UserCreateWithoutBookmarksInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutReviewsInput {
  create: UserCreateWithoutReviewsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutBathroomsInput {
  id: ID
  name: String!
  email: String!
  password: String!
  reviews: ReviewCreateManyWithoutCreatedByInput
  bookmarks: BookmarkCreateManyWithoutUserInput
}

input UserCreateWithoutBookmarksInput {
  id: ID
  name: String!
  email: String!
  password: String!
  bathrooms: BathroomCreateManyWithoutPostedByInput
  reviews: ReviewCreateManyWithoutCreatedByInput
}

input UserCreateWithoutReviewsInput {
  id: ID
  name: String!
  email: String!
  password: String!
  bathrooms: BathroomCreateManyWithoutPostedByInput
  bookmarks: BookmarkCreateManyWithoutUserInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
  email: String!
  password: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  name: String
  email: String
  password: String
  bathrooms: BathroomUpdateManyWithoutPostedByInput
  reviews: ReviewUpdateManyWithoutCreatedByInput
  bookmarks: BookmarkUpdateManyWithoutUserInput
}

input UserUpdateManyMutationInput {
  name: String
  email: String
  password: String
}

input UserUpdateOneRequiredWithoutBookmarksInput {
  create: UserCreateWithoutBookmarksInput
  update: UserUpdateWithoutBookmarksDataInput
  upsert: UserUpsertWithoutBookmarksInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutReviewsInput {
  create: UserCreateWithoutReviewsInput
  update: UserUpdateWithoutReviewsDataInput
  upsert: UserUpsertWithoutReviewsInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneWithoutBathroomsInput {
  create: UserCreateWithoutBathroomsInput
  update: UserUpdateWithoutBathroomsDataInput
  upsert: UserUpsertWithoutBathroomsInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutBathroomsDataInput {
  name: String
  email: String
  password: String
  reviews: ReviewUpdateManyWithoutCreatedByInput
  bookmarks: BookmarkUpdateManyWithoutUserInput
}

input UserUpdateWithoutBookmarksDataInput {
  name: String
  email: String
  password: String
  bathrooms: BathroomUpdateManyWithoutPostedByInput
  reviews: ReviewUpdateManyWithoutCreatedByInput
}

input UserUpdateWithoutReviewsDataInput {
  name: String
  email: String
  password: String
  bathrooms: BathroomUpdateManyWithoutPostedByInput
  bookmarks: BookmarkUpdateManyWithoutUserInput
}

input UserUpsertWithoutBathroomsInput {
  update: UserUpdateWithoutBathroomsDataInput!
  create: UserCreateWithoutBathroomsInput!
}

input UserUpsertWithoutBookmarksInput {
  update: UserUpdateWithoutBookmarksDataInput!
  create: UserCreateWithoutBookmarksInput!
}

input UserUpsertWithoutReviewsInput {
  update: UserUpdateWithoutReviewsDataInput!
  create: UserCreateWithoutReviewsInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  bathrooms_every: BathroomWhereInput
  bathrooms_some: BathroomWhereInput
  bathrooms_none: BathroomWhereInput
  reviews_every: ReviewWhereInput
  reviews_some: ReviewWhereInput
  reviews_none: ReviewWhereInput
  bookmarks_every: BookmarkWhereInput
  bookmarks_some: BookmarkWhereInput
  bookmarks_none: BookmarkWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`
      }
    