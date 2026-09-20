import React, { useState } from "react";

import SideBar from "./components/SideBar";
import NoProjectSelected from "./components/NoProjectSelected";
import CreateProject from "./components/CreateProject";
import ViewProject from "./components/VewProject";

function App() {
  const [PageName, setPageName] = useState("NoSelect");
  const [projects, setProjects] = useState([]);
  const [viewProj, setViewProj] = useState();

  function handleSetPage(name) {
    setPageName(name);
  }
  function handleAddProject(proj) {
    setProjects((preVal) => {
      return [...preVal, proj];
    });
  }
  function handleView(proj) {
    setViewProj(proj);
  }

  function handleAddTask(task) {
  }
  function handleRemoveTask(task) {}

  return (
    <main className="min-h-screen bg-stone-100 py-4 pl-4 pr-4 md:py-8 md:pl-80 md:pr-10">
      <SideBar
        changePage={handleSetPage}
        projects={projects}
        openView={handleView}
      />
      <section className="min-h-[calc(100vh-2rem)] overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-stone-200 md:min-h-[calc(100vh-4rem)]">
        <>
          {viewProj ? (
            <ViewProject
              project={viewProj}
              onAddTask={handleAddTask}
              onRemoveTask={handleRemoveTask}
            />
          ) : PageName == "Create" ? (
            <CreateProject
              changePage={handleSetPage}
              onAddProject={handleAddProject}
            />
          ) : (
            <NoProjectSelected />
          )}
        </>
      </section>
    </main>
  );
}

export default App;
