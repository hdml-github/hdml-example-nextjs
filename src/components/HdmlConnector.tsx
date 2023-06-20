import Script from "next/script";
import { HdmlEndpoint } from "@/helpers/getHdmlProps";

type HdmlWindow = Window & typeof globalThis & {
  "@hdml/elements": { defineDefaults: () => void },
};

export default function HdmlConnector(props: HdmlEndpoint) {
  return (
    <>
      <Script src="/bin/elements.min.js" onReady={() => {
        const win = window as HdmlWindow;
        win["@hdml/elements"].defineDefaults();
      }} />
      <hdml-io
        name={props.name}
        host={props.host}
        tenant={props.tenant}
        token={props.token}>
      </hdml-io>
    </>
  );
}
