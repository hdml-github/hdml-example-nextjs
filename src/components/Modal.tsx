import { type ReactNode, type SyntheticEvent } from "react";

export type ModalProps = {
  children: ReactNode;
  close: () => void;
};

export default function Modal(props: ModalProps) {
  const preventPropagation = (event: SyntheticEvent) => {
    event.stopPropagation();
  }

  return (
    <div
      onClick={ props.close }
      className="block absolute w-full h-screen top-0 bg-black/75">
      <div className="flex flex-row justify-center h-screen px-12">
        <div className="flex flex-col justify-center h-screen">
          <div
            onClick={ preventPropagation }
            className="py-3 bg-white shadow-md rounded-lg">
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
}
