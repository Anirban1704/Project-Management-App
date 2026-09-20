import React, { useState } from "react";

export default function CreateProject({ changePage, onAddProject }) {
  const [NewProject, setNewProject] = useState({
    Title: "",
    Description: "",
    DueDate: "",
    Task:[]
  });

  function handleProjectData(event) {
    const { name, value } = event.target;

    setNewProject((prevVal) => {
      return {
        ...prevVal,
        [name]: value,
      };
    });
  }

  function onClose() {
    setNewProject({
    Title: "",
    Description: "",
    DueDate: "",
    Task:[]
  });
    changePage("NoSelect");
  }

  function handleCreateProject(e) {
    e.preventDefault();

    onAddProject(NewProject);
    onClose();
  }

  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-10 md:px-12 md:py-14">
      <form onSubmit={handleCreateProject} className="space-y-8">
        <header className="border-b border-stone-200 pb-6">
          <h1 className="text-3xl font-bold tracking-tight text-stone-800 md:text-4xl">
            Create a project
          </h1>
          <p className="mt-3 max-w-xl text-sm leading-6 text-stone-500 md:text-base">
            Give your project a name, describe what you want to accomplish, and
            set a target date.
          </p>
        </header>

        <div className="space-y-6">
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-stone-700">
              Title
            </label>
            <input
              type="text"
              name="Title"
              value={NewProject.Title}
              onChange={handleProjectData}
              placeholder="e.g. Learn React"
              className="w-full rounded-lg border border-stone-300 bg-stone-50 px-4 py-3 text-stone-800 outline-none transition placeholder:text-stone-400 focus:border-stone-500 focus:bg-white focus:ring-2 focus:ring-stone-200"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-semibold text-stone-700">
              Description
            </label>
            <textarea
              value={NewProject.Description}
              name="Description"
              onChange={handleProjectData}
              placeholder="What is this project about?"
              rows="5"
              className="w-full resize-y rounded-lg border border-stone-300 bg-stone-50 px-4 py-3 text-stone-800 outline-none transition placeholder:text-stone-400 focus:border-stone-500 focus:bg-white focus:ring-2 focus:ring-stone-200"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-semibold text-stone-700">
              Due Date
            </label>
            <input
              type="date"
              name="DueDate"
              value={NewProject.DueDate}
              onChange={handleProjectData}
              className="w-full rounded-lg border border-stone-300 bg-stone-50 px-4 py-3 text-stone-800 outline-none transition focus:border-stone-500 focus:bg-white focus:ring-2 focus:ring-stone-200"
            />
          </div>
        </div>

        <div className="flex justify-end gap-3 border-t border-stone-200 pt-6">
          <button
            type="button"
            className="rounded-lg border border-stone-300 bg-white px-5 py-3 text-sm font-semibold text-stone-600 transition hover:border-stone-400 hover:bg-stone-100 hover:text-stone-800 focus:outline-none focus:ring-2 focus:ring-stone-300 focus:ring-offset-2"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-lg bg-stone-800 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-stone-700 focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-offset-2"
          >
            Create project
          </button>
        </div>
      </form>
    </div>
  );
}
