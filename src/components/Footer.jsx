import React from 'react'

function Footer() {
  return (
    <footer className="flex flex-col gap-6 px-5 py-10 text-center bg-background-light dark:bg-background-dark border-t border-slate-200/50 dark:border-slate-800/50" id='footer'>
        <div className="flex flex-wrap items-center justify-center gap-6 @container">
            <a className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary text-base font-normal leading-normal min-w-40 transition-colors" href="#summary">Summary</a>
            <a className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary text-base font-normal leading-normal min-w-40 transition-colors" href="#experience">Experience</a>
            <a className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary text-base font-normal leading-normal min-w-40 transition-colors" href="#skills">Skills</a>
            <a className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary text-base font-normal leading-normal min-w-40 transition-colors" href="#education">Education</a>
            <a className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary text-base font-normal leading-normal min-w-40 transition-colors" href="#contact">Contact</a>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
            <a className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors" href="http://linkedin.com/in/mohamed-fekri-03967222b">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
            </a>
            
            <a className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover-:text-primary transition-colors" href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJvqKBjpCzsJwkxMHBvHlJTzcDBNvZcVtKpNJDWgLqWTZfsdPKJhVvWqcLXpZfsRJkTJJNq">
                <span className="material-symbols-outlined">mail</span>
            </a>
        </div>
        <div className='flex justify-center items-center gap-2'>
            <a className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover-:text-primary transition-colors" href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJvqKBjpCzsJwkxMHBvHlJTzcDBNvZcVtKpNJDWgLqWTZfsdPKJhVvWqcLXpZfsRJkTJJNq">
                <span className="material-symbols-outlined">phone</span>
            </a>
        </div>
        <p className='-mt-4'>01229644337 / 01007724713</p>
        <p className="text-slate-600 dark:text-slate-400 text-sm font-normal leading-normal">© 2025 Mohammed Fekri. All Rights Reserved.</p>
    </footer>
  )
}

export default Footer