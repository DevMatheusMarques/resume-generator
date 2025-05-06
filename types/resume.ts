export type Template = "modern" | "classic" | "creative" | "ats"

export interface PersonalInfo {
  name: string
  title: string
  email: string
  phone: string
  address: string
  summary: string
}

export interface Experience {
  company: string
  position: string
  startDate: string
  endDate: string
  description: string
}

export interface Education {
  institution: string
  degree: string
  startDate: string
  endDate: string
  description: string
}

export interface Language {
  name: string
  level: string
}

export interface ResumeData {
  personalInfo: PersonalInfo
  experience: Experience[]
  education: Education[]
  skills: string[]
  languages: Language[]
}
