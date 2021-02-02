import {
  useEffect,
  useReducer,
  useCallback,
  createElement,
  ReactNode,
  FunctionComponent,
} from 'react';
import { CloseCircle } from '@styled-icons/ionicons-solid';
import { ModalOverlay, Modal, ModalCloseIcon } from './styles';

import ModalContext, { INITIAL_STATE } from './ModalContext';
import ShareModal from './ShareModal';

enum ModalActionTypes {
  OPEN = 'OPEN_MODAL',
  CLOSE = 'CLOSE_MODAL',
}

type ModalActions =
  | {
      type: ModalActionTypes.OPEN;
      payload: {
        name: string;
        props: typeof INITIAL_STATE.props;
        modalProps: typeof INITIAL_STATE.modalProps;
      };
    }
  | { type: ModalActionTypes.CLOSE };

const modalReducer = (state: typeof INITIAL_STATE, action: ModalActions) => {
  switch (action.type) {
    case ModalActionTypes.OPEN: {
      const { payload } = action;
      return {
        modal: payload.name,
        props: payload.props,
        modalProps: { ...INITIAL_STATE.modalProps, ...payload.modalProps },
      };
    }
    case ModalActionTypes.CLOSE:
      return INITIAL_STATE;
    default:
      throw new Error('Invalid action');
  }
};

const mapping: {
  [key: string]: FunctionComponent<{ closeModal: () => void }> | undefined;
} = {
  share: ShareModal,
};

const getModalComponent = (modalName: string) => {
  return mapping[modalName] || null;
};

type ModalProviderProps = {
  children: ReactNode;
};

export const ModalProvider = ({ children }: ModalProviderProps) => {
  const [state, dispatch] = useReducer(modalReducer, INITIAL_STATE);
  const ModalComponent = getModalComponent(state.modal);

  const closeModal = useCallback(
    () => dispatch({ type: ModalActionTypes.CLOSE }),
    [],
  );

  useEffect(() => {
    const handleKeyUp = ({ key }: KeyboardEvent) => {
      if (key === 'Escape') closeModal();
    };

    if (ModalComponent && document) {
      document.body.classList.add('modal-open');

      window.addEventListener('keyup', handleKeyUp);
    }

    return () => {
      if (document) {
        document.body.classList.remove('modal-open');

        window.removeEventListener('keyup', handleKeyUp);
      }
    };
  }, [ModalComponent, closeModal]);

  const openModal = useCallback(
    (name, props = {}, modalProps = INITIAL_STATE.modalProps) =>
      dispatch({
        type: ModalActionTypes.OPEN,
        payload: { name, props, modalProps },
      }),
    [],
  );

  const getModalWrapper = () => {
    if (!ModalComponent) return null;

    const { modalProps } = state;

    if (modalProps.customModal) {
      return createElement<>(ModalComponent, {
        closeModal,
        ...state.props,
      });
    }

    return (
      <Modal data-testid="modal">
        <ModalCloseIcon aria-label="Close modal" onClick={() => closeModal()}>
          <CloseCircle color={state.modalProps.closerColor} />
        </ModalCloseIcon>
        {createElement(ModalComponent, { ...state.props, closeModal })}
      </Modal>
    );
  };

  const ModalWrapper = getModalWrapper();

  const handleOverlayClick = useCallback(
    (e) => {
      if (e.target === e.currentTarget) closeModal();
    },
    [closeModal],
  );

  return (
    <ModalContext.Provider value={{ state, openModal, closeModal }}>
      {ModalWrapper && (
        <ModalOverlay
          onClick={
            state.modalProps.overlayClick ? handleOverlayClick : () => undefined
          }
        >
          {ModalWrapper}
        </ModalOverlay>
      )}
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
