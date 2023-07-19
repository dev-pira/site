export interface RichContentRoot {
  json: RichContentNode;
}

export interface RichContentNode {
  data?: { uri: string };
  content?: RichContentNode[];
  marks?: [{ type: string }];
  value?: string;
  nodeType?:
    | "document"
    | "text"
    | "paragraph"
    | "unordered-list"
    | "list-item"
    | "hyperlink";
}
