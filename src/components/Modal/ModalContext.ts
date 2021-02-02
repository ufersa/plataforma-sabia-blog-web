import React from 'react';

export const INITIAL_STATE = {
  modal: '',
  props: {},
  // Props applied to modal wrapper
  modalProps: {
    // Modal X icon color
    closerColor: undefined,
    // If true, do not use `Modal` and `CloseIcon`.
    // Returns only `ModalComponent`
    customModal: false,
    // If false, do not let user close the current modal by clicking its overlay
    overlayClick: true,
  },
};

export type ModalContextProps = {
  state: Record<string, unknown>;
  openModal: (
    name: string,
    props?: Record<string, unknown>,
    modalProps?: typeof INITIAL_STATE.modalProps,
  ) => void;
  closeModal: () => void;
};

export default React.createContext<ModalContextProps>({
  state: {},
  openModal: () => undefined,
  closeModal: () => undefined,
});
