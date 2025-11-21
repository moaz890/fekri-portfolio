export default function SoftwareSkills() {
  const skills = [
    "Ansys",
    "Matlab",
    "Microsoft Office",
    "AutoCAD",
    "SolidWorks",
    "Fluidsim",
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-10 mx-auto xl:px-40 py-5" id="skills">
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
        Software Skills
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((skill) => (
          <div
            key={skill}
            className="p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-sm hover:shadow-md transition-shadow"
          >
            <p className="text-lg font-medium text-slate-700 dark:text-slate-200">
              {skill}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
