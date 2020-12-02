export default {
  GRAPHQL_API:
    process.env.NEXT_PUBLIC_GRAPHQL_API || 'http://127.0.0.1:1337/graphql',
  ITEMS_PER_PAGE: Number(process.env.NEXT_PUBLIC_ITEMS_PER_PAGE) || 10,
} as const;
