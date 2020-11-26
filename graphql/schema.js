const { gql } = require('apollo-server-express');
const { faqs, homepage } = require('./content');

const typeDefs = gql`

  type Faq {
    title: String
    body: String
  }

  type Homepage {
    heading: String
    subheading: String
    heroImageUrl: String
  }

  type Query {
    faqs: [Faq],
    homepage: Homepage
  }
`;

const resolvers = {
  Query: {
    faqs: () => faqs,
    homepage: () => homepage
  },
};

module.exports = {
  resolvers,
  typeDefs
}