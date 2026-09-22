import React, { useRef, useState } from "react";

import SideBar from "./components/SideBar";
import NoProjectSelected from "./components/NoProjectSelected";
import CreateProject from "./components/CreateProject";
import ViewProject from "./components/VewProject";

function getProj(projects, viewIndex){
  return projects.find((item)=>item.projId === viewIndex);
}

function App() {
  const viewPage = useRef();

  const [PageName, setPageName] = useState("NoSelect");
  const [projects, setProjects] = useState([]);
  const [viewIndex, setViewIndex] = useState(-1);

  const viewProj = getProj(projects, viewIndex);

  function handleSetPage(name) {
    setPageName(name);
  }
  function handleAddProject(proj) {
    setProjects((preVal) => {
      return [...preVal, {...proj, projId:crypto.randomUUID()}];
    });
  }

  function handleView(ind){
    setViewIndex(ind);
  }

  function handleAddTask(task) {
    setProjects((preVal)=>{
      const updateList = preVal.map((item)=>{
        if(item.projId === viewIndex){
          return {
            ...item,
            Task: [...item.Task, task]
          }
        }
        return item
      })
      return updateList;
    })
  }
  function handleRemoveTask(taskToClear) {
    setProjects((preVal)=>{
      const updateList = preVal.map((item, index)=>{
        if(item.projId === viewIndex){
          return {
            ...item,
            Task: item.Task.filter((item) => item !== taskToClear)
          }
        }
        return item
      })
      return updateList;
    })
  }

  return (
    <main className="min-h-screen bg-stone-100 py-4 pl-4 pr-4 md:py-8 md:pl-80 md:pr-10">
      <SideBar
        changePage={handleSetPage}
        projects={projects}
        setViewInd={handleView}
      />
      <section className="min-h-[calc(100vh-2rem)] overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-stone-200 md:min-h-[calc(100vh-4rem)]">
        <>
          {PageName === "View" ? (
            <ViewProject
              project={viewProj}
              onAddTask={handleAddTask}
              onRemoveTask={handleRemoveTask}
            />
          ) : PageName === "Create" ? (
            <CreateProject
              changePage={handleSetPage}
              onAddProject={handleAddProject}
            />
          ) : (
            <NoProjectSelected changePage={handleSetPage}/>
          )}
        </>
      </section>
    </main>
  );
}

export default App;
