import React from "react";
import { createPortal } from "react-dom";

export default function SideBar({ changePage, projects, openView }) {
  return createPortal(
    <aside className="fixed left-4 top-4 bottom-4 z-40 w-60 md:w-64 bg-stone-900 text-stone-50 px-6 py-10 md:px-8 md:py-12 rounded-2xl shadow-xl shadow-stone-900/20 flex flex-col">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <button
          className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
          onClick={() => changePage("Create")}
        >
          + Add Project
        </button>
      </div>
      <ul className="mt-8">
        {projects.map((proj, index) => {
          return (
            <li className="my-1" key={index}>
              <button
                className="w-full text-left px-2 py-1 rounded-sm text-stone-200 bg-stone-800"
                onClick={() => {
                  openView(proj);
                }}
              >
                {proj.Title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>,
    document.getElementById("modal-root"),
  );
}
