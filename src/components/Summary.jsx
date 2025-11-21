import React from 'react'

function Summary() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 px-4 sm:px-6 lg:px-10 py-8 max-w-7xl mx-auto" id='summary'>

    <div className="md:col-span-1">
        <div className="flex min-w-72 flex-col gap-3">
            <p className="text-slate-900 dark:text-slate-50 text-4xl font-black leading-tight tracking-[-0.033em]">
                Professional Summary
            </p>
            <p className="text-slate-500 dark:text-slate-400 text-base font-normal leading-normal">
                A concise overview of my experience, core disciplines, and significant achievements in mechanical engineering.
            </p>
        </div>
    </div>


    <div className="md:col-span-2">
        <p className="text-slate-700 dark:text-slate-300 text-lg font-normal leading-relaxed pb-3 pt-1">
            Results-driven Mechanical Engineer with experience in operating, maintaining, and optimizing 
            <strong className="font-bold text-slate-900 dark:text-slate-100"> utility systems</strong> 
            including <strong className="font-bold text-slate-900 dark:text-slate-100">boilers</strong>, 
            <strong className="font-bold text-slate-900 dark:text-slate-100"> air compressors</strong>, 
            <strong className="font-bold text-slate-900 dark:text-slate-100"> chillers</strong>, and 
            <strong className="font-bold text-slate-900 dark:text-slate-100"> water treatment plants</strong>. 
            Skilled in <strong className="font-bold text-slate-900 dark:text-slate-100">preventive</strong>, 
            <strong className="font-bold text-slate-900 dark:text-slate-100"> predictive</strong>, and 
            <strong className="font-bold text-slate-900 dark:text-slate-100"> corrective maintenance</strong> of rotating and static equipment 
            to ensure <strong className="font-bold text-slate-900 dark:text-slate-100">reliability</strong>, 
            <strong className="font-bold text-slate-900 dark:text-slate-100"> efficiency</strong>, and compliance with 
            <strong className="font-bold text-slate-900 dark:text-slate-100"> safety and environmental standards</strong>. 
            Adept at <strong className="font-bold text-slate-900 dark:text-slate-100">troubleshooting</strong> complex mechanical issues, improving 
            <strong className="font-bold text-slate-900 dark:text-slate-100"> system performance</strong>, and supporting continuous 
            <strong className="font-bold text-slate-900 dark:text-slate-100"> production operations</strong>.
        </p>


        <div className="flex pt-6 justify-start">
            <button
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden 
                       rounded-lg h-12 px-5 bg-primary hover:bg-primary/90 text-slate-50 text-base 
                       font-bold leading-normal tracking-[0.015em] transition-colors">
                <span className="truncate">View Projects</span>
            </button>
        </div>
    </div>

</div>

  )
}

export default Summary