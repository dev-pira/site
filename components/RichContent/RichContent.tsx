import { Box, Link } from "@mui/material"
import { Typography } from "../Typography"

export interface RichContentProps {
    content?: {json?:any}
}

function processNode(node: any) {
    if (node.nodeType === 'document') {
        return node.content.map((c:any) => processNode(c))
    } else if (node.nodeType === 'paragraph') {
        return <Typography>{node.content.map((c:any) => processNode(c))}</Typography>
    } else if (node.nodeType === 'text') {
        const bold = node.marks?.findIndex((w:any) => w.type === 'bold') >= 0
        return <span style={{fontWeight: bold ? 'bold' : 'normal'}}>{node.value}</span>
    } else if (node.nodeType === 'unordered-list') {
        return <ul>{node.content.map((c:any) => processNode(c))}</ul>
    } else if (node.nodeType === 'list-item') {
        return <li>{node.content.map((c:any) => processNode(c))}</li>
    } else if (node.nodeType === 'hyperlink') {
        return <Link target="_blank" href={node.data.uri}>{node.content.map((c:any) => processNode(c))}</Link>
    }
}

const RichContent: React.FC<RichContentProps> = ({content}: RichContentProps) => {
    if (!content) return <span></span>
    const json = content.json
    return processNode(json)
}

export default RichContent