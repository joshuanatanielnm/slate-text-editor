import {
  Heading,
  ListItem,
  OrderedList,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { CodeElement } from "./code";

export const Element = ({ attributes, children, element }: any) => {
  const style = { textAlign: element.align };
  switch (element.type) {
    case "bulleted-list":
      return (
        <UnorderedList style={style} {...attributes}>
          {children}
        </UnorderedList>
      );
    case "heading-one":
      return (
        <Heading style={style} {...attributes} as="h1" size="4xl">
          {children}
        </Heading>
      );
    case "heading-two":
      return (
        <Heading style={style} {...attributes} as="h2" size="3xl">
          {children}
        </Heading>
      );
    case "heading-three":
      return (
        <Heading style={style} {...attributes} as="h3" size="2xl">
          {children}
        </Heading>
      );
    case "list-item":
      return (
        <ListItem style={style} {...attributes}>
          {children}
        </ListItem>
      );
    case "numbered-list":
      return (
        <OrderedList style={style} {...attributes}>
          {children}
        </OrderedList>
      );
    case "code-block":
      return (
        <CodeElement style={style} {...attributes}>
          {children}
        </CodeElement>
      );
    default:
      return (
        <Text style={style} {...attributes}>
          {children}
        </Text>
      );
  }
};
