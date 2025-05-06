import type { ResumeData } from "@/types/resume"

interface ClassicTemplateProps {
  resumeData: ResumeData
}

export default function ClassicTemplate({ resumeData }: ClassicTemplateProps) {
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
      <div className="bg-white text-slate-800 p-8 shadow-sm print:shadow-none text-center font-serif">
        <p className="text-muted-foreground py-10">Preencha o formulário para visualizar seu currículo</p>
      </div>
    )
  }

  return (
    <div className="bg-white text-slate-800 p-8 shadow-sm print:shadow-none font-serif">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold uppercase tracking-wider mb-1">{personalInfo.name || "Seu Nome"}</h1>
        <h2 className="text-xl text-slate-600 mb-4">{personalInfo.title || "Seu Título Profissional"}</h2>

        <div className="text-sm text-slate-600 flex flex-wrap justify-center gap-4">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
          {personalInfo.address && <span>{personalInfo.address}</span>}
        </div>
      </header>

      {personalInfo.summary && (
        <section className="mb-6">
          <h3 className="text-lg font-bold uppercase tracking-wider mb-2 text-center border-b-2 border-slate-300 pb-1">
            Resumo Profissional
          </h3>
          <p className="text-slate-600 text-justify">{personalInfo.summary}</p>
        </section>
      )}

      {hasExperience && (
        <section className="mb-6">
          <h3 className="text-lg font-bold uppercase tracking-wider mb-4 text-center border-b-2 border-slate-300 pb-1">
            Experiência Profissional
          </h3>

          <div className="space-y-4">
            {experience.map((exp, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between items-baseline mb-1">
                  <h4 className="font-bold text-slate-800">{exp.position}</h4>
                  <span className="text-sm text-slate-500">
                    {exp.startDate} - {exp.endDate}
                  </span>
                </div>

                <h5 className="text-slate-600 italic mb-2">{exp.company}</h5>

                {exp.description && <p className="text-sm text-slate-600 text-justify">{exp.description}</p>}
              </div>
            ))}
          </div>
        </section>
      )}

      {hasEducation && (
        <section className="mb-6">
          <h3 className="text-lg font-bold uppercase tracking-wider mb-4 text-center border-b-2 border-slate-300 pb-1">
            Formação Acadêmica
          </h3>

          <div className="space-y-4">
            {education.map((edu, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between items-baseline mb-1">
                  <h4 className="font-bold text-slate-800">{edu.degree}</h4>
                  <span className="text-sm text-slate-500">
                    {edu.startDate} - {edu.endDate}
                  </span>
                </div>

                <h5 className="text-slate-600 italic mb-2">{edu.institution}</h5>

                {edu.description && <p className="text-sm text-slate-600 text-justify">{edu.description}</p>}
              </div>
            ))}
          </div>
        </section>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {hasSkills && (
          <section>
            <h3 className="text-lg font-bold uppercase tracking-wider mb-3 text-center border-b-2 border-slate-300 pb-1">
              Habilidades
            </h3>
            <ul className="list-disc list-inside space-y-1 text-slate-600">
              {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </section>
        )}

        {hasLanguages && (
          <section>
            <h3 className="text-lg font-bold uppercase tracking-wider mb-3 text-center border-b-2 border-slate-300 pb-1">
              Idiomas
            </h3>
            <ul className="space-y-1">
              {languages.map((language, index) => (
                <li key={index} className="flex justify-between text-slate-600">
                  <span>{language.name}</span>
                  <span className="text-slate-500">{language.level}</span>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </div>
  )
}
