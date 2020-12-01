import Image from 'next/image';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Container } from 'components/Container';
import * as S from './styles';

const NotFound = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/');
  };

  return (
    <>
      <Head>
        <title>404: Página não encontrada</title>
      </Head>
      <Container>
        <S.Content>
          <S.ImageWrapper>
            <Image
              src="/img/not-found-rafiki.svg"
              layout="responsive"
              width={360}
              height={360}
            />
          </S.ImageWrapper>

          <h1>Oops, esta página não existe!</h1>
          <p>
            Desculpe, mas não conseguimos localizar a página que você procura.
          </p>

          <S.Button onClick={handleClick}>
            Voltar para a página inicial
          </S.Button>
        </S.Content>
      </Container>
    </>
  );
};

export default NotFound;
