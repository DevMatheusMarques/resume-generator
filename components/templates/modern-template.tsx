import type { ResumeData } from "@/types/resume"
import { Mail, Phone, MapPin, Calendar } from "lucide-react"

interface ModernTemplateProps {
  resumeData: ResumeData
}

export default function ModernTemplate({ resumeData }: ModernTemplateProps) {
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
    <div className="bg-white text-slate-800 p-8 shadow-sm print:shadow-none">
      <header className="border-b border-slate-200 pb-6 mb-6">
        <h1 className="text-3xl font-bold mb-1">{personalInfo.name || "Seu Nome"}</h1>
        <h2 className="text-xl text-slate-600 mb-4">{personalInfo.title || "Seu Título Profissional"}</h2>

        <div className="text-sm text-slate-600 flex flex-wrap gap-4">
          {personalInfo.email && (
            <div className="flex items-center gap-1">
              <Mail className="h-4 w-4" />
              <span>{personalInfo.email}</span>
            </div>
          )}

          {personalInfo.phone && (
            <div className="flex items-center gap-1">
              <Phone className="h-4 w-4" />
              <span>{personalInfo.phone}</span>
            </div>
          )}

          {personalInfo.address && (
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <span>{personalInfo.address}</span>
            </div>
          )}
        </div>
      </header>

      {personalInfo.summary && (
        <section className="mb-6">
          <h3 className="text-lg font-semibold mb-2 text-slate-800">Resumo Profissional</h3>
          <p className="text-slate-600">{personalInfo.summary}</p>
        </section>
      )}

      {hasExperience && (
        <section className="mb-6">
          <h3 className="text-lg font-semibold mb-4 text-slate-800 border-b border-slate-200 pb-1">
            Experiência Profissional
          </h3>

          <div className="space-y-4">
            {experience.map((exp, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-medium text-slate-800">{exp.position}</h4>
                  <div className="flex items-center text-sm text-slate-500">
                    <Calendar className="h-3 w-3 mr-1" />
                    {exp.startDate} - {exp.endDate}
                  </div>
                </div>

                <h5 className="text-slate-600 mb-2">{exp.company}</h5>

                {exp.description && <p className="text-sm text-slate-600">{exp.description}</p>}
              </div>
            ))}
          </div>
        </section>
      )}

      {hasEducation && (
        <section className="mb-6">
          <h3 className="text-lg font-semibold mb-4 text-slate-800 border-b border-slate-200 pb-1">
            Formação Acadêmica
          </h3>

          <div className="space-y-4">
            {education.map((edu, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-medium text-slate-800">{edu.degree}</h4>
                  <div className="flex items-center text-sm text-slate-500">
                    <Calendar className="h-3 w-3 mr-1" />
                    {edu.startDate} - {edu.endDate}
                  </div>
                </div>

                <h5 className="text-slate-600 mb-2">{edu.institution}</h5>

                {edu.description && <p className="text-sm text-slate-600">{edu.description}</p>}
              </div>
            ))}
          </div>
        </section>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {hasSkills && (
          <section>
            <h3 className="text-lg font-semibold mb-3 text-slate-800 border-b border-slate-200 pb-1">Habilidades</h3>
            <ul className="list-disc list-inside space-y-1 text-slate-600">
              {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </section>
        )}

        {hasLanguages && (
          <section>
            <h3 className="text-lg font-semibold mb-3 text-slate-800 border-b border-slate-200 pb-1">Idiomas</h3>
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
