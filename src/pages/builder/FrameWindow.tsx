import Modal from '@/components/Modal';

export type FrameWindowProps = {
  show: boolean;
  close: () => void;
};

export default function FrameWindow(props: FrameWindowProps) {
  return (
    <>
      {props.show && 
        <Modal close={ props.close } overlay={ true }>
          FrameWindow
        </Modal>
      }
    </>
  );
}
