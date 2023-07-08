export const typeDefs = `#graphql
 type Game {
    id: ID!,
    title: String!,
    platform: [String!]!,
 }
 type Review {
    id: ID!,
    rating: Int!
    content: String!
 }
 type Author {
    id: ID!
    name: String!
    verified: Boolean!
 }
 type Query {
   reviews: [Review]
   games: [Game] 
   authors: [Author]
 }
`











// a place to define all types of data
// by using #graphql syntax highlight in the beginning  of `` we can highlight our syntax

// gql data types: int, float, string, boolean, ID


//start defining types and giving its properties
// by adding ! we make the prop required
// the Query type is required in all gql schema : defines the entry point to the graph and specify the return types of those entires