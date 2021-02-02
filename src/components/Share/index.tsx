import { useModal } from 'hooks';
import * as S from './styles';

const Share = () => {
  const { openModal } = useModal();

  return (
    <S.Container onClick={() => openModal('share')}>
      <S.ShareIcon />
    </S.Container>
  );
};

export default Share;
