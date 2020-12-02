import { Container } from 'components/Container';
import Image from 'next/image';
import React from 'react';

import * as S from './styles';

const Empty = () => {
  return (
    <Container>
      <S.Content>
        <S.ImageWrapper>
          <Image
            src="/img/empty-rafiki.svg"
            layout="responsive"
            width={360}
            height={360}
          />
        </S.ImageWrapper>
        <p>Não existem itens a serem exibidos até o momento.</p>
        <p>Que tal voltar mais tarde e checar novamente?</p>
      </S.Content>
    </Container>
  );
};

export default Empty;
