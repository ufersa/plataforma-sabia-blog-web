import React from 'react';
import * as S from './styles';

import { GalleryImage } from 'types/graphql-schema';

type Props = {
  gallery: GalleryImage[];
};

const ImagesCarousel = ({ gallery }: Props) => {
  console.log({ gallery });
  return (
    <div role="listbox" aria-label="Carrossel com imagens da tecnologia">
      <S.CarouselContainer
        arrows={false}
        dots
        infinite
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
      >
        {gallery.map((image) => (
          <>
            <S.ImageContainer key={image.url} src={image.url} />
            {image.caption && <S.Caption>{image.caption}</S.Caption>}
          </>
        ))}
      </S.CarouselContainer>
    </div>
  );
};

export default ImagesCarousel;
