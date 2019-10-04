const { GraphQLServer } = require('graphql-yoga');
const { prisma } = require('./generated/prisma-client');
const Mutation = require('./resolvers/Mutation');
const Query = require('./resolvers/Query');
const User = require('./resolvers/User');
const Bathroom = require('./resolvers/Bathroom');
const Review = require('./resolvers/Review');
const Bookmark = require('./resolvers/Bookmark');

const resolvers = {
    Mutation,
    Query,
    User,
    Bathroom,
    Review,
    Bookmark,
};

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
    context: request => {
        return {
            ...request,
            prisma,
        }
    },
});

server.start(() => console.log(`Server is running on http://localhost:4000`));