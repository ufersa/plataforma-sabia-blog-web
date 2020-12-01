import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import PostScreen from 'screens/Post';
import { getPost } from 'services';

type Params = {
  slug: string;
};

export default function Post({
  post,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return <PostScreen post={post} />;
}

export const getServerSideProps = async ({
  params,
}: GetServerSidePropsContext<Params>) => {
  const post = await getPost(params?.slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
  };
};
