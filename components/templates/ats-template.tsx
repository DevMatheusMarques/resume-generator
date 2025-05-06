import type { ResumeData } from "@/types/resume"

interface AtsTemplateProps {
  resumeData: ResumeData
}

export default function AtsTemplate({ resumeData }: AtsTemplateProps) {
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
      <div className="bg-white text-black p-8 shadow-sm print:shadow-none text-center font-sans">
        <p className="text-muted-foreground py-10">Preencha o formulário para visualizar seu currículo</p>
      </div>
    )
  }

  return (
    <div className="bg-white text-black p-8 shadow-sm print:shadow-none font-sans max-w-4xl mx-auto">
      {/* Header - Simple and clear for ATS parsing */}
      <header className="mb-6">
        <h1 className="text-2xl font-bold mb-1">{personalInfo.name || "Seu Nome"}</h1>
        <h2 className="text-lg font-medium mb-2">{personalInfo.title || "Seu Título Profissional"}</h2>

        <div className="text-sm space-y-1">
          {personalInfo.email && <div>{personalInfo.email}</div>}
          {personalInfo.phone && <div>{personalInfo.phone}</div>}
          {personalInfo.address && <div>{personalInfo.address}</div>}
        </div>
      </header>

      {/* Summary - Clear section title for ATS */}
      {personalInfo.summary && (
        <section className="mb-6">
          <h3 className="text-lg font-bold mb-2 uppercase">RESUMO PROFISSIONAL</h3>
          <p>{personalInfo.summary}</p>
        </section>
      )}

      {/* Experience - Structured for easy parsing */}
      {hasExperience && (
        <section className="mb-6">
          <h3 className="text-lg font-bold mb-3 uppercase">EXPERIÊNCIA PROFISSIONAL</h3>

          {experience.map((exp, index) => (
            <div key={index} className="mb-4">
              <div className="mb-1">
                <span className="font-bold">{exp.position}</span>
                {exp.company && <span> | {exp.company}</span>}
                {(exp.startDate || exp.endDate) && (
                  <span>
                    {" "}
                    | {exp.startDate} - {exp.endDate}
                  </span>
                )}
              </div>

              {exp.description && <p className="text-sm">{exp.description}</p>}
            </div>
          ))}
        </section>
      )}

      {/* Education - Structured for easy parsing */}
      {hasEducation && (
        <section className="mb-6">
          <h3 className="text-lg font-bold mb-3 uppercase">FORMAÇÃO ACADÊMICA</h3>

          {education.map((edu, index) => (
            <div key={index} className="mb-4">
              <div className="mb-1">
                <span className="font-bold">{edu.degree}</span>
                {edu.institution && <span> | {edu.institution}</span>}
                {(edu.startDate || edu.endDate) && (
                  <span>
                    {" "}
                    | {edu.startDate} - {edu.endDate}
                  </span>
                )}
              </div>

              {edu.description && <p className="text-sm">{edu.description}</p>}
            </div>
          ))}
        </section>
      )}

      {/* Skills - Listed clearly for keyword matching */}
      {hasSkills && (
        <section className="mb-6">
          <h3 className="text-lg font-bold mb-2 uppercase">HABILIDADES</h3>
          <p>{skills.join(", ")}</p>
        </section>
      )}

      {/* Languages - Simple format */}
      {hasLanguages && (
        <section>
          <h3 className="text-lg font-bold mb-2 uppercase">IDIOMAS</h3>
          <ul>
            {languages.map((language, index) => (
              <li key={index}>
                {language.name}: {language.level}
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  )
}
