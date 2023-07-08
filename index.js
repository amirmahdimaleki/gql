// don't forget that in package.json file the type should be module 

import {ApolloServer} from '@apollo/server'
import {startStandaloneServer} from '@apollo/server/standalone'
import {typeDefs} from './schema'

// server setup

const server = new ApolloServer ({
   // has two properties 
   // 1.typeDefs = definition for data types and their relationship
   //2. resolvers = funcs that determine how we respond to queries
   
   typeDefs,
})

const { url } = await startStandaloneServer(server,{
    listen: { port: 40000}
})