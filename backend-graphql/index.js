const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const { createServer } = require('http')
const mongoose = require('mongoose')
const config = require('config')
const typeDefs = require('./schema')
const resolvers = require('./resolvers')

const app = express()
const server = new ApolloServer({
    typeDefs,
    resolvers,
    playground: {
        endpoint: 'http://localhost:3000/graphql',
        settings: {
            'editor.theme': 'light'
        }
    }
})
server.applyMiddleware({ app })

const httpServer = createServer(app)
server.installSubscriptionHandlers(httpServer)

const port = process.env.PORT || 3000;
mongoose
    .connect(config.get('db'), { useUnifiedTopology: true, useNewUrlParser: true })
    .then( (res) => {
        httpServer.listen(port, () => {
            console.log('connected!')
        })
    })
    .catch( (err) => {
        console.error('Error while connecting to MongoDB', err);
    })
