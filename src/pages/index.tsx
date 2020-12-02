import { getPosts, getPostsCount } from 'services';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import HomeScreen from 'screens/Home';
import EmptyScreen from 'screens/Empty';
import envConfig from 'config/env';

export default function Home({
  posts,
  postsCount,
  currentPage,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return posts.length ? (
    <HomeScreen
      posts={posts}
      postsCount={postsCount}
      currentPage={currentPage}
    />
  ) : (
    <EmptyScreen />
  );
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const { query } = ctx;
  const page = Number(query.page) || 1;

  const startPost = page === 1 ? 0 : envConfig.ITEMS_PER_PAGE * (page - 1);
  const posts = await getPosts({
    start: startPost,
    limit: envConfig.ITEMS_PER_PAGE,
  });
  const postsCount = await getPostsCount();

  return {
    props: {
      posts,
      postsCount,
      currentPage: page,
    },
  };
}
