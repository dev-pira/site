import { Link } from "@mui/material";
import { Typography } from "../Typography";
import { RichContentNode, RichContentRoot } from "../../models/richcontent";
import { ReactNode } from "react";

export interface RichContentProps {
  content?: RichContentRoot;
}

const RichContent: React.FC<RichContentProps> = ({
  content,
}: RichContentProps) => {
  if (!content) return <></>;
  return <>{processNode(content.json)}</>;
};

function processNode(node: RichContentNode): ReactNode {
  if (node.nodeType === "document" && node.content) {
    return node.content.map((c: RichContentNode) => processNode(c));
  } else if (node.nodeType === "paragraph" && node.content) {
    return (
      <Typography>
        {node.content.map((c: RichContentNode) => processNode(c))}
      </Typography>
    );
  } else if (node.nodeType === "text" && node.marks) {
    const bold =
      node.marks?.findIndex((w: { type: string }) => w.type === "bold") >= 0;
    return (
      <span style={{ fontWeight: bold ? "bold" : "normal" }}>{node.value}</span>
    );
  } else if (node.nodeType === "unordered-list" && node.content) {
    return <ul>{node.content.map((c: RichContentNode) => processNode(c))}</ul>;
  } else if (node.nodeType === "list-item" && node.content) {
    return <li>{node.content.map((c: RichContentNode) => processNode(c))}</li>;
  } else if (node.nodeType === "hyperlink" && node.content) {
    return (
      <Link target="_blank" href={node?.data?.uri}>
        {node.content.map((c: RichContentNode) => processNode(c))}
      </Link>
    );
  }
}

export default RichContent;
