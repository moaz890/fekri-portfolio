import React from 'react'

function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
      <div className="flex items-center justify-between whitespace-nowrap border-b border-slate-200/50 dark:border-slate-800/50 px-4 sm:px-6 lg:px-10 py-3 max-w-7xl mx-auto">
        <div className="flex items-center gap-4 text-slate-900 dark:text-slate-50">
          <div className="size-6 text-primary">
            <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L3 7v10l9 5 9-5V7l-9-5zm0 2.618L18.36 8 12 11.382 5.64 8 12 4.618zM5 9.701l5 2.778v5.44l-5-2.778V9.701zm14 0v5.44l-5 2.778v-5.44l5-2.778z"></path>
            </svg>
          </div>
          <h2 className="text-slate-900 dark:text-slate-50 text-lg font-bold leading-tight tracking-[-0.015em]">Mohammed Fekri</h2>
        </div>
        <div className="hidden md:flex flex-1 justify-end items-center gap-8">
          <nav className="flex items-center gap-9">
            <a className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-medium leading-normal transition-colors" href="#summary">Summary</a>
            <a className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-medium leading-normal transition-colors" href="#experience">Experience</a>
            <a className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-medium leading-normal transition-colors" href="#skills">Skills</a>
            <a className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-medium leading-normal transition-colors" href="#education">Education</a>
          </nav>
          <a className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-slate-50 text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors"
            href='#footer'
          >
            <span className="truncate">Contact Me</span>
          </a>
        </div>
        <button className="md:hidden text-slate-900 dark:text-slate-50">
          <span className="material-symbols-outlined">menu</span>
        </button>
    </div>
  </header>
  )
}

export default Navbar