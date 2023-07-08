// don't forget that in package.json file the type should be module 

import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import db from './_db.js'
import { typeDefs } from './schema'

const resolvers = {
    Query: {


      games(){
        return db.games
      },
      game(_, args){
        return db.games.find((game) => game.id === args.id )
      },
      authors(){
        return db.authors
      },
      author(_, args){
        return db.authors.find((author) => author.id === args.id )
      },
      reviews(){
        return db.reviews
      },
      review(_, args){
        // the _ is "parent"  but don't needed here. there is a third one called context that we don't need it either
        return db.reviews.find((review) => review.id === args.id )
      },





      // nested queries with connection to each other :
      Game: {
        reviews(parent){
          // here the parent is the line 13 func. (parents are queries)
          return db.reviews.filter((r) => r.game_id === parent.id)
        }
      },
      Review: {
        author(parent) {
          return db.authors.find((a) => a.id === parent.author_id)
        },
        game(parent) {
          return db.games.find((g) => g.id === parent.game_id)
        }
      },
      Author: {
        reviews(parent) {
          return db.reviews.filter((r) => r.author_id === parent.id)
        }
      },



      Mutation: {
        addGame(_, args) {
          let game = {
            ...args.game, 
            id: Math.floor(Math.random() * 10000).toString()
          }
          db.games.push(game)
    
          return game
        },
        deleteGame(_, args) {
          db.games = db.games.filter((g) => g.id !== args.id)
    
          return db.games
        },
        updateGame(_, args) {
          db.games = db.games.map((g) => {
            if (g.id === args.id) {
              return {...g, ...args.edits}
            }
    
            return g
          })
    
          return db.games.find((g) => g.id === args.id)
        }
      }




    }
}

/* frontend query style : 
  authors{
   name
  }
*/

// server setup
const server = new ApolloServer ({
   // has two properties 
   // 1.typeDefs = definition for data types and their relationship
   // 2. resolvers = funcs that determine how we respond to queries
   
   typeDefs,
   resolvers
})

const { url } = await startStandaloneServer(server,{
    listen: { port: 40000}
})
console.log(`server is running at${url}`)