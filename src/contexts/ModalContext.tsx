import { createContext, type MutableRefObject } from 'react';

/**
 * Modal window wrapper context.
 */
export const ModalContext =
  createContext<MutableRefObject<HTMLDivElement | null>>({
    current: null,
  });
