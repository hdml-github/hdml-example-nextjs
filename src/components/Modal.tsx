import { useContext, useEffect, useState, type ReactNode, type SyntheticEvent } from 'react';
import { createPortal } from "react-dom";
import { ModalContext } from "@/contexts/ModalContext";

export type ModalProps = {
  children: ReactNode;
  close: () => void;
  popup?: boolean;
  overlay?: boolean;
};

export default function Modal(props: ModalProps) {
  const modalWrapperCtx = useContext(ModalContext);
  const [wrapper, setWrapper] = useState(modalWrapperCtx.current);
  const preventPropagation = (event: SyntheticEvent) => {
    if (props.popup !== true) {
      event.stopPropagation();
    }
  };

  useEffect(
    () => setWrapper(modalWrapperCtx.current),
    [modalWrapperCtx],
  );

  return (
    <>
      {wrapper && createPortal(
        <div
          onClick={ props.close }
          className={
            `block absolute w-full h-screen top-0 ${
              props.overlay
                ? "bg-black/75"
                : ""
            }`
          }>
          <div className="flex flex-row justify-center h-screen px-12">
            <div className="flex flex-col justify-center h-screen">
              <div
                onClick={ preventPropagation }
                className="py-3 bg-white shadow-md shadow-black/50 rounded-lg">
                {props.children}
              </div>
            </div>
          </div>
        </div>,
        wrapper,
      )}
    </>
  );
}
