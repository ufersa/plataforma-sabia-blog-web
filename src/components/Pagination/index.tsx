import { useMemo } from 'react';
import { useRouter } from 'next/router';

import * as S from './styles';
import envConfig from 'config/env';

type PaginationProps = {
  postsCount: number;
  currentPage: number;
};

const Pagination = ({ postsCount, currentPage }: PaginationProps) => {
  const router = useRouter();

  const totalPages = useMemo(
    () => Math.ceil(postsCount / Number(envConfig.ITEMS_PER_PAGE)),
    [postsCount],
  );

  const handlePagination = (pageToSum: number) => {
    const { pathname } = router;

    router.push({
      pathname,
      query: {
        page: currentPage + pageToSum,
      },
    });
  };

  return (
    <S.Container>
      <S.NavigationButton
        disabled={currentPage === 1}
        onClick={() => handlePagination(-1)}
      >
        Anterior
      </S.NavigationButton>
      <S.Pages>
        Página {currentPage} de {totalPages}
      </S.Pages>
      <S.NavigationButton
        disabled={currentPage === totalPages}
        onClick={() => handlePagination(+1)}
      >
        Próxima
      </S.NavigationButton>
    </S.Container>
  );
};

export default Pagination;
