import { CustomElementProps } from "../types";

export const CodeElement = ({
  attributes,
  children,
  style,
}: CustomElementProps) => {
  return (
    <pre
      {...attributes}
      style={{ ...style, background: "#091D42", color: "white" }}
    >
      <code>{children}</code>
    </pre>
  );
};
