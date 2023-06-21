import cytoscape from "cytoscape";
import cxtmenu from 'cytoscape-cxtmenu';

type TableAction = "edit" | "delete" | "show" | "add" | "join";

type TableData = {
  name: string;
  type: string;
  source: string;
};

type TableActionHandler = (
  node: "table",
  type: TableAction,
  data: TableData
) => void

cytoscape.use(cxtmenu);

export function getCytoscape(
  element: HTMLDivElement,
  action: TableActionHandler
) {
  const cy = cytoscape({
    container: element,
    layout: {
      name: "grid",
    },
    style: [
      {
        selector: "node.table",
        style: {
          label: "data(name)",
          width: 100,
          height: 100,
          "font-weight": "bold",
          "text-valign": "center",
          "text-halign": "center",
          // @ts-ignore
          "overlay-shape": "ellipse",
        },
      },
    ],
  });
  cy.cxtmenu({
    selector: "node.table",
    indicatorSize: 0,
    adaptativeNodeSpotlightRadius: true,
    menuRadius: (ele) => 100,
    commands: (ele) => [
      {
        content: "Edit",
        select: (elm) => {
          const elmData = <{ data: TableData }><unknown>elm.json();
          action("table", "edit", elmData.data);
        },
      },
      {
        content: "Delete",
        select: (elm) => {
          const elmData = <{ data: TableData }><unknown>elm.json();
          action("table", "delete", elmData.data)
        },
      },
      {
        content: "Show fields",
        select: (elm) => {
          const elmData = <{ data: TableData }><unknown>elm.json();
          action("table", "show", elmData.data)
        },
      },
      {
        content: "Add field",
        select: (elm) => {
          const elmData = <{ data: TableData }><unknown>elm.json();
          action("table", "add", elmData.data)
        },
      },
      {
        content: "Join",
        select: (elm) => {
          const elmData = <{ data: TableData }><unknown>elm.json();
          action("table", "join", elmData.data)
        },
      },
    ]
  });
  return cy;
}
