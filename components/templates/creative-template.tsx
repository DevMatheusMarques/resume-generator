import type { ResumeData } from "@/types/resume"

interface CreativeTemplateProps {
  resumeData: ResumeData
}

export default function CreativeTemplate({ resumeData }: CreativeTemplateProps) {
  const { personalInfo, experience, education, skills, languages } = resumeData
  const hasPersonalInfo =
    personalInfo.name ||
    personalInfo.title ||
    personalInfo.email ||
    personalInfo.phone ||
    personalInfo.address ||
    personalInfo.summary
  const hasExperience = experience.length > 0
  const hasEducation = education.length > 0
  const hasSkills = skills.length > 0
  const hasLanguages = languages.length > 0

  if (!hasPersonalInfo && !hasExperience && !hasEducation && !hasSkills && !hasLanguages) {
    return (
      <div className="bg-white text-slate-800 p-8 shadow-sm print:shadow-none text-center">
        <p className="text-muted-foreground py-10">Preencha o formulário para visualizar seu currículo</p>
      </div>
    )
  }

  return (
    <div className="bg-white text-slate-800 shadow-sm print:shadow-none">
      <div className="bg-emerald-600 text-white p-8">
        <h1 className="text-3xl font-bold mb-1">{personalInfo.name || "Seu Nome"}</h1>
        <h2 className="text-xl opacity-90 mb-4">{personalInfo.title || "Seu Título Profissional"}</h2>

        <div className="text-sm opacity-90 grid grid-cols-1 md:grid-cols-3 gap-2">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
          {personalInfo.address && <span>{personalInfo.address}</span>}
        </div>
      </div>

      <div className="p-8">
        {personalInfo.summary && (
          <section className="mb-8">
            <h3 className="text-lg font-semibold mb-3 text-emerald-600">Sobre Mim</h3>
            <p className="text-slate-600">{personalInfo.summary}</p>
          </section>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            {hasExperience && (
              <section className="mb-8">
                <h3 className="text-lg font-semibold mb-4 text-emerald-600 border-b border-emerald-200 pb-1">
                  Experiência Profissional
                </h3>

                <div className="space-y-6">
                  {experience.map((exp, index) => (
                    <div
                      key={index}
                      className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-emerald-200"
                    >
                      <div className="absolute w-3 h-3 bg-emerald-500 rounded-full left-[-4px] top-1"></div>
                      <h4 className="font-medium text-slate-800 text-lg">{exp.position}</h4>
                      <h5 className="text-emerald-600 mb-1">{exp.company}</h5>
                      <p className="text-sm text-slate-500 mb-2">
                        {exp.startDate} - {exp.endDate}
                      </p>

                      {exp.description && <p className="text-sm text-slate-600">{exp.description}</p>}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {hasEducation && (
              <section className="mb-8">
                <h3 className="text-lg font-semibold mb-4 text-emerald-600 border-b border-emerald-200 pb-1">
                  Formação Acadêmica
                </h3>

                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <div
                      key={index}
                      className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-emerald-200"
                    >
                      <div className="absolute w-3 h-3 bg-emerald-500 rounded-full left-[-4px] top-1"></div>
                      <h4 className="font-medium text-slate-800 text-lg">{edu.degree}</h4>
                      <h5 className="text-emerald-600 mb-1">{edu.institution}</h5>
                      <p className="text-sm text-slate-500 mb-2">
                        {edu.startDate} - {edu.endDate}
                      </p>

                      {edu.description && <p className="text-sm text-slate-600">{edu.description}</p>}
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          <div>
            {hasSkills && (
              <section className="mb-8">
                <h3 className="text-lg font-semibold mb-4 text-emerald-600 border-b border-emerald-200 pb-1">
                  Habilidades
                </h3>
                <div className="space-y-2">
                  {skills.map((skill, index) => (
                    <div
                      key={index}
                      className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full inline-block mr-2 mb-2"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {hasLanguages && (
              <section>
                <h3 className="text-lg font-semibold mb-4 text-emerald-600 border-b border-emerald-200 pb-1">
                  Idiomas
                </h3>
                <ul className="space-y-2">
                  {languages.map((language, index) => (
                    <li key={index} className="flex justify-between text-slate-600 pb-1 border-b border-slate-100">
                      <span>{language.name}</span>
                      <span className="text-emerald-600 font-medium">{language.level}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
