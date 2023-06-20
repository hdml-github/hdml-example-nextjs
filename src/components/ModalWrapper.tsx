import { useContext } from 'react';
import { ModalContext } from '@/contexts/ModalContext';

/**
 * Modal window wrapper DOM-element.
 */
export default function ModalWrapper() {
  const modalWrapperCtx = useContext(ModalContext);
  return <div ref={modalWrapperCtx}></div>
}
