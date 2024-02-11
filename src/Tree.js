import { TreeView } from "@mui/x-tree-view/TreeView";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Node from "./Node";

function Tree({ tree }) {
  return (
    <TreeView
        aria-label="file system navigator"
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
      >
        {tree.map((node) => (
          <Node key={node.id} node={node} />
        ))}
      </TreeView>
  );
}

export default Tree;
