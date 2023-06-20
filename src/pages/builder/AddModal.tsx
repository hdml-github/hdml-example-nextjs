import Modal from '@/components/Modal';
import SelectList from '@/components/SelectList';

export type AddModalProps = {
  show: boolean;
  setShow: (show: boolean) => void;
};

export default function AddModal(props: AddModalProps) {
  return (
    <>
      {props.show && 
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
        </Modal>
      }
    </>
  );
}
