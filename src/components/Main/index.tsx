import * as S from './styles';

const Main = ({
  title = 'Boilerplate',
  description = 'A boilerplate with TypeScript, React, NextJS and styled-components.',
}) => (
  <S.Container>
    <S.Logo
      src="/img/nextjs-illustration.svg"
      alt="Moça com o cabelo rosa e vestes pretas, ao seu lado um quadro com as escritas Next JS e ao lado desse quadro uma pequena árvore"
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Description>
      Created based on React Avançado by Willian Justen.
    </S.Description>
    <S.Illustration
      src="/img/code-typing.svg"
      alt="Um rapaz segurando um símbolo de menor seguido por três pontos e um símbolo de maior, com uma moça segurando."
    />
  </S.Container>
);

export default Main;
