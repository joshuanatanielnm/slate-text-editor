type CodeElementProps = {
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

export const CodeElement = ({
  attributes,
  children,
  style,
}: CodeElementProps) => {
  return (
    <pre {...attributes} style={{ ...style, background: "#f0f3f9" }}>
      <code>{children}</code>
    </pre>
  );
};
