import Modal from '@/components/Modal';
import SelectList from '@/components/SelectList';

export type AddWindowProps = {
  show: boolean;
  close: () => void;
  action: (id: "model" | "frame") => void;
};

export default function AddWindow(props: AddWindowProps) {
  return (
    <>
      {props.show && 
        <Modal close={ props.close } overlay={ true }>
          <SelectList
            items={[
              { id: "model", title: "Add new model" },
              { id: "frame", title: "Add new frame" },
            ]}
            onSelect={ props.action as (id: string) => void }
          />
        </Modal>
      }
    </>
  );
}
