import React, { useState } from "react";

export default function ViewProject({project, onAddTask, onRemoveTask}) {
  const [task, setTask] = useState("");

  function handleAddTask(event) {
    event.preventDefault();

    if (!task.trim()) {
      return;
    }
    onAddTask(task);
    setTask("");
  }

  function handleClearTask(taskToClear) {
    onRemoveTask(taskToClear);
    // setTasks((previousTasks) => previousTasks.filter((item) => item !== taskToClear));
  }

  return (
    <div className="mx-auto w-full max-w-4xl space-y-12 px-6 py-10 md:px-12 md:py-14">
      <section className="border-b border-stone-200 pb-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-stone-400">
              Project
            </p>
            <h1 className="text-3xl font-bold tracking-tight text-stone-800 md:text-4xl">
              {project.Title}
            </h1>
          </div>
          <p className="text-sm font-medium text-stone-400">
            Due {project.DueDate}
          </p>
        </div>

        <p className="mt-7 max-w-2xl text-base leading-7 text-stone-600">
          {project.Description}
        </p>
      </section>

      <section>
        <div className="mb-6">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-stone-400">
            Progress
          </p>
          <h2 className="text-2xl font-bold tracking-tight text-stone-800">
            Tasks
          </h2>
        </div>

        <form
          onSubmit={handleAddTask}
          className="flex flex-col gap-3 sm:flex-row"
        >
          <input
            type="text"
            value={task}
            onChange={(event) => setTask(event.target.value)}
            placeholder="Add a task..."
            className="min-w-0 flex-1 rounded-lg border border-stone-300 bg-stone-50 px-4 py-3 text-stone-800 outline-none transition placeholder:text-stone-400 focus:border-stone-500 focus:bg-white focus:ring-2 focus:ring-stone-200"
          />
          <button
            type="submit"
            className="rounded-lg bg-stone-800 px-5 py-3 text-sm font-semibold text-white transition hover:bg-stone-700 focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-offset-2"
          >
            Save task
          </button>
        </form>

        <div className="mt-6 overflow-hidden rounded-xl border border-stone-200 bg-stone-50">
          {project.Task.length === 0 ? (
            <p className="px-5 py-6 text-sm text-stone-500">
              Your saved tasks will appear here.
            </p>
          ) : (
            <ul className="divide-y divide-stone-200">
              {project.Task.map((savedTask, index) => (
                <li
                  key={index}
                  className="grid grid-cols-[1fr_auto] items-center gap-4 px-5 py-4"
                >
                  <span className="min-w-0 break-words text-sm text-stone-700">
                    {savedTask}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleClearTask(savedTask)}
                    className="rounded-md px-3 py-2 text-sm font-semibold text-stone-500 transition hover:bg-stone-200 hover:text-stone-800 focus:outline-none focus:ring-2 focus:ring-stone-300"
                  >
                    Clear
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </div>
  );
}
