export type SelectListProps = {
  onSelect: (id: string) => void;
  items: {
    id: string;
    title: string;
  }[]
};

export default function SelectList(props: SelectListProps) {
  return (
    <div className="flex flex-row justify-center">
      <div className="flex flex-col justify-center">
        {props.items.map((item) => (
          <div
            key={item.id}
            onClick={ () => props.onSelect(item.id) }
            className="px-12 py-3 hover:bg-slate-200 cursor-pointer">
            {item.title}
          </div>
        ))}
      </div>
    </div>
  );
}
