import { GraphQLClient, gql } from 'graphql-request';

const apiEndpoint = process.env.NEXT_PUBLIC_GRAPHQL_API;

const client = new GraphQLClient(apiEndpoint!);

export const getPosts = async () => {
  const query = gql`
    {
      posts {
        id
        thumbnail {
          id
          url
        }
        title
        subtitle
        content
        categories {
          id
          name
        }
        slug
        published_at
      }
    }
  `;

  const { posts } = await client.request(query);

  return posts;
};
