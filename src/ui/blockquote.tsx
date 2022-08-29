import { Box } from "@chakra-ui/react";
import { FormatQuote } from "emotion-icons/material";
import React from "react";
import { CustomElementProps } from "../types";

export const Blockquote = ({
  attributes,
  children,
  style,
}: CustomElementProps) => {
  return (
    <Box
      {...attributes}
      style={{ ...style }}
      paddingLeft={4}
      borderLeft="2px solid"
      borderColor="gray.400"
      color="gray.400"
    >
      <FormatQuote size={30} style={{ paddingRight: 2 }} />
      {children}
    </Box>
  );
};
