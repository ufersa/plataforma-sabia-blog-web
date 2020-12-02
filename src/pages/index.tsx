import { getPosts, getPostsCount } from 'services';
import HomeScreen, { HomeScreenProps } from 'screens/Home';
import EmptyScreen from 'screens/Empty';

export default function Home({ posts, postsCount }: HomeScreenProps) {
  return posts.length ? (
    <HomeScreen posts={posts} postsCount={postsCount} />
  ) : (
    <EmptyScreen />
  );
}

export async function getServerSideProps() {
  const posts = await getPosts();
  const postsCount = await getPostsCount();

  return {
    props: {
      posts,
      postsCount,
    },
  };
}
