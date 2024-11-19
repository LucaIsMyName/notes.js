import { useState, useEffect } from 'react';
import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import Drawer from "./components/layout/Drawer";
import Button from "./components/design/Button";

function App() {
  const [workspaces, setWorkspaces] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/workspaces')
      .then(res => res.json())
      .then(setWorkspaces);
  }, []);

  return (
    <div data-component="app">
      <Header />
      <div className="flex">
        <div className="max-w-lg w-full">
          <Sidebar />
        </div>
        <div className="flex-1">
          {workspaces.map(workspace => (
            <Main
              key={workspace.id}
              workspace={workspace}>
              {workspace.description}
            </Main>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;