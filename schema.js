export const typeDefs = `#graphql

 type Game {
    id: ID!,
    title: String!,
    platform: [String!]!,
    reviews: [Review!]
 }
 type Review {
    id: ID!
    rating: Int!
    content: String!
    game: Game!
    author: Author!
 }
 type Author {
    id: ID!
    name: String!
    verified: Boolean!
    reviews: [Review!]
 }


 type Query {
   reviews: [Review]
   review(id: ID!): Review
   games: [Game] 
   game(id: ID!): Game
   authors: [Author]
   author(id:ID!): Author
 }

 type Mutation {
   addGame(game: AddGameInput!): Game
    deleteGame(id: ID!): [Game]
    updateGame(id: ID!, edits: EditGameInput): Game
 }


 input AddGameInput {
    title: String!,
    platform: [String!]!
  }
  input EditGameInput {
    title: String,
    platform: [String!]
  }
`
// mutation is for any change on the db like delete or add











// a place to define all types of data
// by using #graphql syntax highlight in the beginning  of `` we can highlight our syntax

// gql data types: int, float, string, boolean, ID


//start defining types and giving its properties
// by adding ! we make the prop required
// the Query type is required in all gql schema : defines the entry point to the graph and specify the return types of those entires