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
      authors(){
        return db.authors
      },
      reviews(){
        return db.reviews
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