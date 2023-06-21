import { useEffect, useRef, useState } from "react";
import { getCytoscape } from "@/helpers/getCytoscape";
import Modal from '@/components/Modal';
import TableWindow from "./TableWindow";

export type ModelWindowProps = {
  show: boolean;
  close: () => void;
};

export default function ModelWindow(props: ModelWindowProps) {
  const cytoRef = useRef<null | HTMLDivElement>(null);
  const [cy, setCy] = useState<null | cytoscape.Core>(null);
  const [showTableWindow, setShowTableWindow] = useState(false);

  useEffect(() => {
    if (props.show && cytoRef && cytoRef.current) {
      setCy(
        getCytoscape(
          cytoRef.current,
          (node, type, data) => {
            console.log(node, type, data);
          }
        )
      );
    }
  }, [props, cytoRef]);

  const tableHandler = (name: string, type: string, source: string) => {
    console.log(name, type, source);
    if (cy) {
      cy.add({
        group: "nodes",
        classes: ["table"],
        data: {
          id: name,
          name,
          type,
          source,
        },
      });
    }
  }

  return (
    <>
      {props.show && 
        <Modal close={ props.close } overlay={ true }>
          <div
            className="flex flex-col"
            style={ { height: "90vh", width: "90vw" } }>
            <label className="px-12 py-3 text-xl whitespace-nowrap">
              Model name:
              <input
                className="ml-3 border-b-2 border-slate-300 focus:border-slate-800 outline-0"
                type="text"
                placeholder="my_model"
                aria-label="Model name input"
                defaultValue={""}
                onChange={ () => {} }
              />
            </label>
            <div
              ref={cytoRef}
              className="grow">
            </div>
            <div
              className="flex flex-row justify-end pb-3">
              <button
                className="w-14 h-14 mr-12 rounded-full bg-red-600 hover:bg-red-700 active:bg-red-800 text-3xl text-white shadow-md shadow-black/50 active:shadow-black/20"
                onClick={ () => setShowTableWindow(true) }>
                +
              </button>
            </div>
          </div>
          <TableWindow
            show={ showTableWindow }
            close={ () => setShowTableWindow(false) }
            action={ tableHandler }
          />
        </Modal>
      }
    </>
  );
}
