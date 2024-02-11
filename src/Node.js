import { TreeItem } from "@mui/x-tree-view/TreeItem";
import Tree from "./Tree";

function Node({ node }) {
  const { id, name, price, children } = node;

  return (
    <TreeItem nodeId={id} label={`${name} (${price})`}>
      {children.length !== 0 ? <Tree tree={children} /> : null}
    </TreeItem>
  );
}

export default Node;
