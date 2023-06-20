import { useRef, type ReactNode } from 'react';
import { ModalContext } from "@/contexts/ModalContext";
import ModalWrapper from '@/components/ModalWrapper';

export type ModalWrapperStorageProps = {
  children: ReactNode;
};

/**
 * Modal window wrapper storage component.
 */
export function ModalProvider(props: ModalWrapperStorageProps) {
  const modalRef = useRef<null | HTMLDivElement>(null);
  return (
    <ModalContext.Provider value={modalRef}>
      {props.children}
      <ModalWrapper />
    </ModalContext.Provider>
  );
}
