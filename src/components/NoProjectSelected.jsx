import React from "react";

import noProjectImage from "../assets/no-projects.png";

export default function NoProjectSelected(){
    return (
    <div className="flex min-h-[calc(100vh-2rem)] flex-col items-center justify-center px-6 py-16 text-center md:min-h-[calc(100vh-4rem)]">
      {/* 1. Image */}
      <img
        src={noProjectImage}
        alt="An empty task list"
        className="w-20 h-20 object-contain opacity-80 mb-2"
      />

      {/* 2. Heading */}
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-stone-700 mt-5 mb-3">
        No Project Selected
      </h2>

      {/* 3. Subtitle / Prompt */}
      <p className="max-w-md text-base md:text-lg leading-7 text-stone-500">
        Select a project or get started with a new one
      </p>

      {/* 4. Action Button */}
      <div className="mt-7">
        <button
        //   onClick={onStartAddProject}
          className="px-5 py-2.5 text-sm md:text-base font-medium rounded-lg bg-stone-800 text-stone-100 shadow-sm transition-colors hover:bg-stone-700 focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-offset-2 focus:ring-offset-stone-100"
        >
          Create new project
        </button>
      </div>
    </div>
  );
}