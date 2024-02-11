import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import response from "./data/response.json";
import Tree from "./Tree";

const unflatten = (list) => {
  const tree = [];
  const mapped = {};

  list.forEach((item) => {
    const id = item.id;

    if (!mapped.hasOwnProperty(id)) {
      mapped[id] = item;
      mapped[id].children = [];
    }
  });

  Object.keys(mapped).forEach((id) => {
    if (mapped.hasOwnProperty(id)) {
      const elem = mapped[id];

      if (elem.head) {
        const headId = elem.head;

        mapped[headId].children.push(elem);

        return;
      }

      tree.push(elem);
    }
  });

  return {
    children: [...tree],
  };
};

function sortTree(tree) {
  if (!tree.children.length) {
    return tree;
  }

  tree.children.sort(function (a, b) {
    if (a.sorthead === b.sorthead) {
      return 0;
    }

    return a.sorthead < b.sorthead ? -1 : 1;
  });

  tree.children.forEach((node) => {
    sortTree(node);
  });

  return tree;
}

function App() {
  const tree = sortTree(unflatten(response.services));

  return (
    <div className="App">
      <header className="App-header">
        <Tree tree={tree.children} />
      </header>
    </div>
  );
}

export default App;
