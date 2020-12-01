import { getPosts } from 'services';
import HomeScreen, { HomeScreenProps } from 'screens/Home';

export default function Home({ posts }: HomeScreenProps) {
  return <HomeScreen posts={posts} />;
}

export async function getServerSideProps() {
  const posts = await getPosts();

  return {
    props: {
      posts,
    },
  };
}
