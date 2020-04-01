// this file connects to remote prisma db and query db in JS
const { Prisma } = require('prisma-binding'); 

const db = new Prisma({
    typeDefs: 'src/generated/prisma.graphql',
    endpoint: process.env.PRISMA_ENDPOINT,
    secret: process.env.PRISMA_SECRET,
    debug: false
});

module.exports = db; 