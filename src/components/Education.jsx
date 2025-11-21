import React from 'react'

function Education() {
  return (
        <div className="px-4 sm:px-6 lg:px-10 mx-auto xl:px-40 py-5" id='education'>
    <div className="flex flex-wrap justify-between gap-3 p-4">
    <p className="text-slate-900 dark:text-slate-50 text-4xl font-black leading-tight tracking-[-0.033em] min-w-72">
        Education &amp; Professional Development
    </p>
</div>

<section className="mt-8">
    <h2 className="text-slate-900 dark:text-slate-50 text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Education
    </h2>

    <div className="grid grid-cols-[auto_1fr] gap-x-4 px-4">

        {/* <!-- Timeline Icon (Top) --> */}
        <div className="flex flex-col items-center gap-1.5 pt-4">
            <div className="text-primary flex items-center justify-center bg-primary/20 rounded-full size-10">
                <span className="material-symbols-outlined">school</span>
            </div>
            <div className="w-[2px] bg-slate-300 dark:bg-slate-700 h-full"></div>
        </div>

        {/* <!-- Education Entry 1 --> */}
        <div className="flex flex-1 flex-col py-3">
            <p className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-normal">
                Bachelor of Mechanical power engineering.
            </p>
            <p className="text-slate-500 dark:text-slate-400 text-base font-normal leading-normal">
                Zagazig University.
            </p>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal">
                2017 - 2022
            </p>

            <div className="mt-3 text-slate-600 dark:text-slate-300 text-sm space-y-1">
                <p><strong>GPA:</strong> 2.45/4.0</p>
                <p><strong>Honors:</strong> Graduated with Good</p>
                <p>
                    <strong>Capstone Project:</strong>
                     CONSTRUCTION AND TESTING OF A LABORATORY-SCALEWATER TUNNEL FOR HYDRAULICS STUDIES.
                </p>
                <p>
                    Grade: <strong>Excellent. </strong>
                </p>
            </div>
        </div>

        {/* <!-- Timeline Icon (Between) --> */}
        <div className="flex flex-col items-center gap-1.5 pb-4">
            <div className="w-[2px] bg-slate-300 dark:bg-slate-700 h-full"></div>
            <div className="text-primary flex items-center justify-center bg-primary/20 rounded-full size-10">
                <span className="material-symbols-outlined">school</span>
            </div>
        </div>
    </div>
</section>

{/* <!-- Trainings & Certifications --> */}
<section className="mt-12">
    <h2 className="text-slate-900 dark:text-slate-50 text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Trainings &amp; Certifications
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4">

        {/* <!-- Certification 1 --> */}
        <div className="bg-white dark:bg-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col justify-between">
            <div className="flex items-center gap-4">
                <div className="text-primary size-8">
                    <span className="material-symbols-outlined text-4xl">verified_user</span>
                </div>
                <div>
                    <h3 className="font-bold text-slate-900 dark:text-slate-100">Practical Training on Diesel Engine</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Engineering for Heavy Equipment Supplies</p>
                </div>
            </div>
            <p className="mt-4 text-sm text-slate-600 dark:text-slate-300 ">October 2020</p>
        </div>

        {/* <!-- Certification 2 --> */}
        <div className="bg-white dark:bg-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col justify-between">
            <div className="flex items-center gap-4">
                <div className="text-primary size-8">
                    <span className="material-symbols-outlined text-4xl">model_training</span>
                </div>
                <div>
                    <h3 className="font-bold text-slate-900 dark:text-slate-100">Training in the installation and F maintenance of elevators and escalator</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Fast Tracking Project Contractor</p>
                </div>
            </div>
            <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">From July 15 to August 15, 2021</p>
        </div>

        {/* <!-- Certification 3 --> */}
        <div className="bg-white dark:bg-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col justify-between">
            <div className="flex items-center gap-4">
                <div className="text-primary size-8">
                    <span className="material-symbols-outlined text-4xl">workspace_premium</span>
                </div>
                <div>
                    <h3 className="font-bold text-slate-900 dark:text-slate-100">Fundamentals of Turbomachinery Equipment Maintenance</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Egycet</p>
                </div>
            </div>
            <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">Aug 2022</p>
        </div>

        {/* <!-- Certification 4 --> */}
        <div className="bg-white dark:bg-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col justify-between">
            <div className="flex items-center gap-4">
                <div className="text-primary size-8">
                    <span className="material-symbols-outlined text-4xl">manufacturing</span>
                </div>
                <div>
                    <h3 className="font-bold text-slate-900 dark:text-slate-100">Mechanical Maintenance Essentials</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Oring</p>
                </div>
            </div>
            <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">January 2023</p>
        </div>
        {/* <!-- Certification 5 --> */}
        <div className="bg-white dark:bg-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col justify-between">
            <div className="flex items-center gap-4">
                <div className="text-primary size-8">
                    <span className="material-symbols-outlined text-4xl">verified_user</span>
                </div>
                <div>
                    <h3 className="font-bold text-slate-900 dark:text-slate-100">Hydraulic Systems</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Oring</p>
                </div>
            </div>
            <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">Oct 2022</p>
        </div>
        {/* <!-- Certification 6 --> */}
        <div className="bg-white dark:bg-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col justify-between">
            <div className="flex items-center gap-4">
                <div className="text-primary size-8">
                    <span className="material-symbols-outlined text-4xl">model_training</span>
                </div>
                <div>
                    <h3 className="font-bold text-slate-900 dark:text-slate-100">Heat Exchanger Fundamentals</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Udemy</p>
        
                </div>
            </div>
            <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">June 2024</p>
        </div>
        {/* Certification 7 */}
        <div className="bg-white dark:bg-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col justify-between">
            <div className="flex items-center gap-4">
                <div className="text-primary size-8">
                    <span className="material-symbols-outlined text-4xl">workspace_premium</span>
                </div>
                <div>
                    <h3 className="font-bold text-slate-900 dark:text-slate-100">Operation and Maintenance of Steam Turbines</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Udemy</p>
                </div>
            </div>
            <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">January 2022</p>
        </div>
        {/* Certification 8 */}
        <div className="bg-white dark:bg-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col justify-between">
            <div className="flex items-center gap-4">
                <div className="text-primary size-8">
                    <span className="material-symbols-outlined text-4xl">manufacturing</span>
                </div>
                <div>
                    <h3 className="font-bold text-slate-900 dark:text-slate-100">Boilers & Steam Systems</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Insight Academy</p>
                </div>
            </div>
            <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">December 2024</p>
        </div>
        {/* Certification 9 */}
        <div className="bg-white dark:bg-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col justify-between">
            <div className="flex items-center gap-4">
                <div className="text-primary size-8">
                    <span className="material-symbols-outlined text-4xl">manufacturing</span>
                </div>
                <div>
                    <h3 className="font-bold text-slate-900 dark:text-slate-100">Compressed Air Systems</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Insight Academy</p>
                </div>
            </div>
            <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">December 2023</p>
        </div>
    </div>
</section>
</div>
  )
}

export default Education