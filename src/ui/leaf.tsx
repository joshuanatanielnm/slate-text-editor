export const Leaf = ({ attributes, children, leaf }: any) => {
  if (leaf.bold) {
    children = <strong>{children}</strong>;
  }
  if (leaf.code) {
    children = <code style={{ background: "#f0f3f9" }}>{children}</code>;
  }
  if (leaf.italic) {
    children = <em>{children}</em>;
  }
  if (leaf.underline) {
    children = <u>{children}</u>;
  }
  if (leaf.sup) {
    children = <sup>{children}</sup>;
  }

  return <span {...attributes}>{children}</span>;
};
