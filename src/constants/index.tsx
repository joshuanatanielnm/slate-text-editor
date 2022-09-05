export * from "./features";

export const LIST_TYPES = ["numbered-list", "bulleted-list"];
export const TEXT_ALIGN_TYPES = ["left", "center", "right", "justify"];
export const HOTKEYS = {
  "mod+b": "bold",
  "mod+i": "italic",
  "mod+u": "underline",
  "mod+`": "code",
};
export const INITIAL_VALUE = [
  {
    type: "paragraph",
    children: [{ text: "Welcome to this simple text editor", bold: true }],
  },
];
