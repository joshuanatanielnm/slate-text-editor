export type CustomElementProps = {
  style: {
    textAlign: "center" | "left" | "right" | "justify";
  };
  attributes: {
    "data-slate-node": "element";
    "data-slate-inline"?: true;
    "data-slate-void"?: true;
    dir?: "rtl";
    ref: any;
  };
  children: JSX.Element;
};
