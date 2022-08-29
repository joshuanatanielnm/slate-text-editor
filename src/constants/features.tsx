import {
  FormatBold,
  FormatItalic,
  FormatUnderlined,
  Code,
  LooksOne,
  LooksTwo,
  FormatListNumbered,
  Looks3,
  StrikethroughS,
  FormatQuote,
  FormatAlignCenter,
  FormatAlignJustify,
  FormatAlignLeft,
  FormatAlignRight,
  FormatListBulleted,
  Superscript,
} from "@emotion-icons/material";
import { CodeSquare } from "emotion-icons/bootstrap";

const IconSize = 25;

type FeatureProps = {
  format: string;
  icon: JSX.Element;
  button: "mark" | "block";
}[];

export const Feature: FeatureProps = [
  {
    format: "bold",
    icon: <FormatBold size={IconSize} />,
    button: "mark",
  },
  {
    format: "italic",
    icon: <FormatItalic size={IconSize} />,
    button: "mark",
  },
  {
    format: "underline",
    icon: <FormatUnderlined size={IconSize} />,
    button: "mark",
  },
  {
    format: "strikethrough",
    icon: <StrikethroughS size={IconSize} />,
    button: "mark",
  },
  {
    format: "code",
    icon: <Code size={IconSize} />,
    button: "mark",
  },
  {
    format: "sup",
    icon: <Superscript size={IconSize} />,
    button: "mark",
  },
  {
    format: "code-block",
    icon: <CodeSquare size={IconSize} />,
    button: "block",
  },
  {
    format: "heading-one",
    icon: <LooksOne size={IconSize} />,
    button: "block",
  },
  {
    format: "heading-two",
    icon: <LooksTwo size={IconSize} />,
    button: "block",
  },
  {
    format: "heading-three",
    icon: <Looks3 size={IconSize} />,
    button: "block",
  },
  {
    format: "block-quote",
    icon: <FormatQuote size={IconSize} />,
    button: "block",
  },
  {
    format: "numbered-list",
    icon: <FormatListNumbered size={IconSize} />,
    button: "block",
  },
  {
    format: "bulleted-list",
    icon: <FormatListBulleted size={IconSize} />,
    button: "block",
  },
  {
    format: "left",
    icon: <FormatAlignLeft size={IconSize} />,
    button: "block",
  },
  {
    format: "center",
    icon: <FormatAlignCenter size={IconSize} />,
    button: "block",
  },
  {
    format: "right",
    icon: <FormatAlignRight size={IconSize} />,
    button: "block",
  },
  {
    format: "justify",
    icon: <FormatAlignJustify size={IconSize} />,
    button: "block",
  },
];
