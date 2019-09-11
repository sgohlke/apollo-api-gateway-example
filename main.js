const { ApolloServer } = require("apollo-server");
const { ApolloGateway } = require("@apollo/gateway");

const gateway = new ApolloGateway({
    serviceList: [
        { name: "persons", url: "http://localhost:7000/graphql" },
        // List of federation-capable GraphQL endpoints...
    ],
    debug: true
});

const server = new ApolloServer({ gateway, subscriptions: false });

server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});