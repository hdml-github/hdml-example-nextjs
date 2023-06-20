import { useContext, useEffect, useState } from 'react';
import { createPortal } from "react-dom";
import { ModalContext } from "@/contexts/ModalContext";
import Modal from '@/components/Modal';
import SelectList from '@/components/SelectList';

export type AddModalProps = {
  show: boolean;
  setShow: (show: boolean) => void;
};

export default function AddModal(props: AddModalProps) {
  const modalWrapperCtx = useContext(ModalContext);
  const [wrapper, setWrapper] = useState(modalWrapperCtx.current);
  useEffect(
    () => setWrapper(modalWrapperCtx.current),
    [modalWrapperCtx],
  );
  return (
    <>
      {props.show && wrapper && createPortal(
        <Modal close={ () => props.setShow(false) }>
          <SelectList
            items={[
              { id: "model", title: "Add new model" },
              { id: "frame", title: "Add new frame" },
            ]}
            onSelect={ (id: string) => {
              console.log(id);
              props.setShow(false);
            } }
          />
        </Modal>,
        wrapper as HTMLDivElement,
      )}
    </>
  );
}
