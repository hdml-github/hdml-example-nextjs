import { useState, type ChangeEvent } from 'react';
import Modal from '@/components/Modal';
import SelectList from '@/components/SelectList';

export type TableWindowProps = {
  show: boolean;
  close: () => void;
  action: (name: string, type: string, source: string) => void;
};

export default function TableWindow(props: TableWindowProps) {
  const [tableName, setTableName] = useState<string>("my_table");
  const [tableType, setTableType] = useState<string>("table");
  const [tableSource, setTableSource] = useState<string>("`source`.`table`.`name`");

  const nameChanged = (event: ChangeEvent): void => {
    const input = event.target as unknown as EventTarget & {
      value: string;
    };
    setTableName(input.value);
  }

  const typeChanged = (event: ChangeEvent): void => {
    const input = event.target as unknown as EventTarget & {
      value: string;
    };
    setTableType(input.value);
  }

  const sourceChanged = (event: ChangeEvent): void => {
    const input = event.target as unknown as EventTarget & {
      value: string;
    };
    setTableSource(input.value);
  }

  const saveHandler = () => {
    props.action(tableName, tableType, tableSource);
    setTableName("my_table");
    setTableType("table");
    setTableSource("`source`.`table`.`name`");
    props.close();
  }

  return (
    <>
      {props.show && 
        <Modal close={ props.close } overlay={ false }>
          <div
            className="flex flex-col">

            {/* Title */}
            <h1 className="px-12 py-3 whitespace-nowrap text-xl">
              Add new table
            </h1>

            {/* Table name */}
            <label className="px-12 py-3 whitespace-nowrap">
              Name:
              <input
                className="ml-3 border-b-2 border-slate-300 focus:border-slate-800 outline-0"
                type="text"
                placeholder="my_table"
                aria-label="Table name input"
                defaultValue={ tableName }
                onChange={ nameChanged }
              />
            </label>

            {/* Table source type */}
            <label className="px-12 py-3 whitespace-nowrap">
              Source type:
              <select
                className="ml-3 border-b-2 border-slate-300 focus:border-slate-800 outline-0 bg-white"
                defaultValue={ tableType }
                placeholder="Please select"
                aria-label="Table type select"
                onChange={ typeChanged }>
                <option value="table">Table name</option>
                <option value="query">SQL query</option>
                <option value="csv">CSV content</option>
                <option value="json">JSON content</option>
              </select>
            </label>

            {/* Table source */}
            <label className="px-12 py-3 whitespace-nowrap">
              Source:
              <input
                className="ml-3 border-b-2 border-slate-300 focus:border-slate-800 outline-0"
                type="text"
                placeholder="Table origin input"
                aria-label="Table origin input"
                defaultValue={ tableSource }
                onChange={ sourceChanged }
              />
            </label>
    
            {/* Save button */}
            <button
              className="h-12 mx-12 my-4 rounded bg-sky-600 hover:bg-sky-700 active:bg-sky-800 text-white shadow-md shadow-black/50 active:shadow-black/20"
              onClick={ saveHandler }>
              Save
            </button>
          </div>
        </Modal>
      }
    </>
  );
}
