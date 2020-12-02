import { getPosts } from 'services';
import HomeScreen, { HomeScreenProps } from 'screens/Home';
import EmptyScreen from 'screens/Empty';

export default function Home({ posts }: HomeScreenProps) {
  return posts.length ? <HomeScreen posts={posts} /> : <EmptyScreen />;
}

export async function getServerSideProps() {
  const posts = await getPosts();

  return {
    props: {
      posts,
    },
  };
}
