const { ApolloServer } = require("apollo-server");
const { ApolloGateway, IntrospectAndCompose } = require("@apollo/gateway");

const gateway = new ApolloGateway({
    supergraphSdl: new IntrospectAndCompose({
      subgraphs: [
        { name: "persons", url: "http://localhost:7001/graphql" },
        { name: "employees", url: "http://localhost:7002/graphql" }
      ],
    }),
});

const server = new ApolloServer({ gateway, subscriptions: false });

server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});