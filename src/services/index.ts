import { GraphQLClient, gql } from 'graphql-request';
import envConfig from 'config/env';

const client = new GraphQLClient(envConfig.GRAPHQL_API!);

const queryPostFragment = `
  id
  thumbnail {
    id
    url
    alternativeText
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
`;

type getPostsProps = {
  start: number;
  limit: number;
};

/**
 * Gets all posts
 *
 * @returns {array} All posts
 */
export const getPosts = async ({ start, limit }: getPostsProps) => {
  const query = gql`
    query getPosts($start: Int!, $limit: Int!) {
      posts(sort: "created_at:desc", start: $start, limit: $limit) {
        ${queryPostFragment}
      }
    }
  `;

  const { posts } = await client.request(query, { start, limit });

  return posts;
};

/**
 * Gets a single post by slug
 *
 * @returns {object} Post object
 */
export const getPost = async (slug = '') => {
  const query = gql`
    query getPost($slug: String!) {
      posts(where: { slug: $slug }) {
        ${queryPostFragment}
      }
    }
  `;

  const { posts } = await client.request(query, { slug });

  return posts[0] || null;
};

/**
 * Gets posts count
 *
 * @return {number} Posts count
 */
export const getPostsCount = async () => {
  const query = gql`
    {
      postsCount
    }
  `;

  const { postsCount } = await client.request(query);

  return postsCount;
};
