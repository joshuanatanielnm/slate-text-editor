import { IconButton, IconButtonProps } from "@chakra-ui/react";
import React from "react";
import { useSlate } from "slate-react";
import { TEXT_ALIGN_TYPES } from "../constants";
import { isBlockActive, isMarkActive, toggleBlock, toggleMark } from "../utlis";

type ButtonProps = IconButtonProps & {
  active?: boolean;
  icon: JSX.Element;
};

type BlockMarkButtonProps = {
  format: string;
  icon: JSX.Element;
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { active, icon, ...props },
  ref
) {
  return (
    <IconButton
      {...props}
      icon={icon}
      colorScheme="whiteAlpha"
      color={active ? "black" : "#ccc"}
      ref={ref}
    />
  );
});

export const BlockButton = ({ format, icon }: BlockMarkButtonProps) => {
  const editor = useSlate();
  return (
    <Button
      active={isBlockActive(
        editor,
        format,
        TEXT_ALIGN_TYPES.includes(format) ? "align" : "type"
      )}
      onMouseDown={(event) => {
        event.preventDefault();
        toggleBlock(editor, format);
      }}
      icon={icon}
      aria-label={format}
      cursor="pointer"
    />
  );
};

export const MarkButton = ({ format, icon }: BlockMarkButtonProps) => {
  const editor = useSlate();
  return (
    <Button
      active={isMarkActive(editor, format)}
      onMouseDown={(event) => {
        event.preventDefault();
        toggleMark(editor, format);
      }}
      icon={icon}
      aria-label={format}
      cursor="pointer"
    />
  );
};
